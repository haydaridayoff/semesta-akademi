import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-fit bg-secondary-black text-primary-white">
      <div className="flex flex-col w-full border-b border-primary-white">
        <div className="flex flex-col items-center justify-center mx-auto px-20 pt-16 pb-10">
          <div className="flex justify-between w-full items-center">
            <h2 className="font-primary text-5xl ">Ikuti Instagram Kami</h2>
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
          <div className="flex w-full justify-between">
            {[1, 2, 3, 4].map((item, index) => (
              <Link
                key={index}
                href="https://www.instagram.com/p/CWpvIT8pJGs/"
                className="w-52 h-52"
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
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center justify-center mx-auto px-20 pt-16 pb-10">
          <div className="flex justify-between w-full items-center">
            <h2 className="font-primary text-5xl ">Terhubung dengan Kami</h2>
          </div>
          <div className="flex w-full justify-between">
            {[1, 2, 3, 4].map((item, index) => (
              <Link
                key={index}
                href="https://www.instagram.com/p/CWpvIT8pJGs/"
                className="flex w-full p-6 border-y border-primary-white border-r first:border-l hover:bg-orange-600"
              >
                <div className="w-8 h-8">
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
          <div className="flex w-full justify-between text-gray-600">
            <p>© SEMESTA AKADEMI 2021. ALL RIGHTS RESERVED</p>
            <Link href={`https://semestaakademi.com/privacy`}>
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
