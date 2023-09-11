import Link from "next/link";
import GridColsLayout from "../layouts/gridColsLayout";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-fit bg-secondary-black text-primary-white">
      <div className="flex flex-col w-full border-b border-primary-white">
        <div className="flex w-full flex-col gap-10 items-center justify-center max-w-7xl px-4 mx-auto sm:px-20 pt-16 pb-4">
          <div className="flex w-full justify-between items-center">
            <h2 className="font-primary w-full text-2xl sm:text-5xl">
              Ikuti Instagram Kami
            </h2>
            <Link
              href="https://www.instagram.com/semesta.akademi/"
              className="w-10 h-10 align-middle"
            >
              <img
                src="https://semestaakademi.com/assets/v2/Homepage/Right_Arrow_White.svg"
                alt=""
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className="grid w-full overflow-x-auto justify-items-center grid-flow-col sm:grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item, index) => (
              <Link
                key={index}
                href="https://www.instagram.com/p/CWpvIT8pJGs/"
                className="w-28 h-28 sm:w-52 sm:h-52"
              >
                <img
                  src="https://semestaakademi.com/assets/v2/images/instagram-feed-1.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-10 items-center justify-center max-w-7xl px-4 mx-auto sm:px-20 pt-16 pb-4">
          <div className="flex justify-between w-full items-center">
            <h2 className="font-primary text-2xl sm:text-5xl">
              Terhubung dengan Kami
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full justify-between">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Link
                key={index}
                href="https://www.instagram.com/p/CWpvIT8pJGs/"
                className="flex justify-center w-full p-6 border border-primary-white hover:bg-orange-600"
              >
                <div className="w-8 h-8 shrink-0">
                  <img
                    src="https://semestaakademi.com/assets/v2/SocialIcon/Facebook.svg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-primary text-2xl">Facebook</h3>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-center sm:text-left sm:flex-row w-full justify-between text-gray-400">
            <p>© SEMESTA AKADEMI 2021. ALL RIGHTS RESERVED</p>
            <Link
              href={`https://semestaakademi.com/privacy`}
              className="underline text-gray-600 hover:text-gray-400"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
