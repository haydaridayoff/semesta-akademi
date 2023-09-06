import { useEffect, useState } from "react";
import Link from "next/link";
import CaretDown from "../icons/caretDown";
import { useNavigation } from "../../contexts/navigationContext";
import { useRouter } from "next/router";
import Button from "../ui/button";

const Topbar = () => {
  const [isNavTabOpen, setIsNavTabOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const navItem = useNavigation();
  const router = useRouter();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    if (screenWidth > 768) {
      setIsNavTabOpen(false);
    }
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, [screenWidth]);

  //animation group
  let firstLineStyle = isNavTabOpen
    ? "origin-top-left rotate-45 translate-x-1/4 bg-white"
    : "";
  let secondLineStyle = isNavTabOpen ? "opacity-0 bg-white" : "";
  let thirdLineStyle = isNavTabOpen
    ? "origin-bottom-left -rotate-45 translate-x-1/4 bg-white"
    : "";
  //animation group

  const navTabToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsNavTabOpen(!isNavTabOpen);
  };

  return (
    <>
      <header
        className={`fixed flex-col  w-screen transition-all bg-salmon-white z-10 overflow-hidden border-y border-primary-black ${
          isNavTabOpen ? "h-screen border-primary-white" : "h-16 sm:h-20"
        }`}
      >
        <div
          className={`justify-evenly flex max-w-screen-2xl h-16 sm:h-20 transition-colors mx-auto ${
            isNavTabOpen && "bg-primary-black border-b border-primary-white "
          }`}
        >
          <div className="w-full basis-1/3 mx-4">
            <Link href="/" className="flex justify-center h-full w-full">
              {!isNavTabOpen ? (
                <img
                  src="https://semestaakademi.com/assets/v2/images/logo-semesta-akademi-black.svg"
                  alt="Semesta Akademi"
                  className="w-fit h-full"
                />
              ) : (
                <img
                  src="https://semestaakademi.com/assets/v2/images/logo-semesta-akademi-white.svg"
                  alt="Semesta Akademi"
                  className="w-auto h-full"
                />
              )}
            </Link>
          </div>
          <div
            className={`w-full basis-full border-x border-primary-black transition-all ${
              isNavTabOpen && "border-primary-white"
            }`}
          >
            <nav className="w-fit items-center h-full mx-auto hidden md:flex">
              <ul className="flex gap-6 text-base font-semibold h-fit">
                {navItem.navigationItems.map((item) => {
                  if (item.id === "program") {
                    return (
                      <li
                        onMouseEnter={() => setIsProgramOpen(true)}
                        key={item.id}
                        className="flex items-center gap-1"
                      >
                        <Link
                          href={item.path}
                          className={`${
                            router.pathname === item.path && "underline"
                          }`}
                        >
                          {item.label}
                        </Link>
                        <CaretDown />
                      </li>
                    );
                  }
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className={`${
                          router.pathname === item.path && "underline"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="w-full basis-1/3 flex justify-center mx-10">
            <div className="gap-4 hidden md:flex">
              <Button
                fill="transparent"
                outline="secondary-black"
                className="my-4"
              >
                Masuk
              </Button>
              <Button style="fill" color="secondary-black" className="my-4">
                Daftar
              </Button>
            </div>
            <button
              onClick={navTabToggle}
              className="sm:w-10 sm:h-10 min-h-[1rem] min-w-[1rem] grid-row-3 my-auto items-center grid md:hidden"
            >
              <span
                className={`sm:h-1 h-[2px] bg-secondary-black rounded-full transition-all duration-200 ${firstLineStyle}`}
              ></span>
              <span
                className={`sm:h-1 h-[2px] bg-secondary-black rounded-full transition-opacity duration-200 ${secondLineStyle}`}
              ></span>
              <span
                className={`sm:h-1 h-[2px] bg-secondary-black rounded-full transition-all duration-200 ${thirdLineStyle}`}
              ></span>
            </button>
          </div>
        </div>
        <div
          className={`w-full bg-primary-black h-screen text-primary-white overflow-y-auto`}
        >
          Hello
        </div>
      </header>
    </>
  );
};

export default Topbar;
