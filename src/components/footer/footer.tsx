import Link from "next/link";
import GridColsLayout from "../layouts/gridColsLayout";

const Footer: React.FC = () => {
  return (
    <footer className="h-fit w-full bg-secondary-black text-primary-white">
      <div className="flex w-full flex-col border-b border-primary-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 pb-4 pt-16 sm:px-20">
          <div className="flex w-full items-center justify-between">
            <h2 className="w-full font-primary text-2xl sm:text-5xl">
              Ikuti Instagram Kami
            </h2>
            <Link
              href="https://www.instagram.com/semesta.akademi/"
              className="h-10 w-10 align-middle"
            >
              <img
                src="https://semestaakademi.com/assets/v2/Homepage/Right_Arrow_White.svg"
                alt=""
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
          <div className="grid w-full grid-flow-col justify-items-center gap-4 overflow-x-auto sm:grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item, index) => (
              <Link
                key={index}
                href="https://www.instagram.com/p/CWpvIT8pJGs/"
                className="h-28 w-28 sm:h-52 sm:w-52"
              >
                <img
                  src="https://semestaakademi.com/assets/v2/images/instagram-feed-1.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-4 pb-4 pt-16 sm:px-20">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-primary text-2xl sm:text-5xl">
              Terhubung dengan Kami
            </h2>
          </div>
          <div className="grid w-full grid-cols-2 justify-between sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Link
                key={index}
                href="https://www.instagram.com/p/CWpvIT8pJGs/"
                className="flex w-full justify-center border border-primary-white p-6 hover:bg-orange-600"
              >
                <div className="h-8 w-8 shrink-0">
                  <img
                    src="https://semestaakademi.com/assets/v2/SocialIcon/Facebook.svg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-primary text-2xl">Facebook</h3>
              </Link>
            ))}
          </div>
          <div className="flex w-full flex-col justify-between gap-4 text-center text-gray-400 sm:flex-row sm:text-left">
            <p>© SEMESTA AKADEMI 2021. ALL RIGHTS RESERVED</p>
            <Link
              href={`https://semestaakademi.com/privacy`}
              className="text-gray-600 underline hover:text-gray-400"
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
