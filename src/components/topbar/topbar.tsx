import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CaretDown from "../icons/caretDown";
import { useNavigation } from "../../contexts/navigationContext";
import { useRouter } from "next/router";
import Button from "../ui/button";
import ProgramTab from "./programTab";

const Topbar = () => {
  const [isNavTabOpen, setIsNavTabOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const navItem = useNavigation();
  const router = useRouter();

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    if (screenWidth > 768) {
      setIsNavTabOpen(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
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
        ref={headerRef}
        className={`fixed z-10  w-screen flex-col overflow-hidden border-y border-primary-black bg-salmon-white transition-all ${
          isNavTabOpen ? "h-screen border-primary-white" : "h-16 sm:h-20"
        }`}
      >
        <div
          className={`mx-auto flex h-16 max-w-screen-2xl justify-evenly transition-colors sm:h-20 ${
            isNavTabOpen && "border-b border-primary-white bg-primary-black "
          }`}
        >
          <div className="mx-4 w-full basis-1/3">
            <Link href="/" className="flex h-full w-full justify-center">
              {!isNavTabOpen ? (
                <img
                  src="https://semestaakademi.com/assets/v2/images/logo-semesta-akademi-black.svg"
                  alt="Semesta Akademi"
                  className="h-full w-fit"
                />
              ) : (
                <img
                  src="https://semestaakademi.com/assets/v2/images/logo-semesta-akademi-white.svg"
                  alt="Semesta Akademi"
                  className="h-full w-auto"
                />
              )}
            </Link>
          </div>
          <div
            className={`w-full basis-full border-x border-primary-black transition-all ${
              isNavTabOpen && "border-primary-white"
            }`}
          >
            <nav className="mx-auto hidden h-full w-fit items-center md:flex">
              <ul className="flex h-fit gap-6 text-base font-semibold">
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
          <div className="mx-10 flex w-full basis-1/3 justify-center">
            <div className="hidden gap-4 md:flex">
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
              className="grid-row-3 my-auto grid min-h-[1rem] min-w-[1rem] items-center sm:h-10 sm:w-10 md:hidden"
            >
              <span
                className={`h-[2px] rounded-full bg-secondary-black transition-all duration-200 sm:h-1 ${firstLineStyle}`}
              ></span>
              <span
                className={`h-[2px] rounded-full bg-secondary-black transition-opacity duration-200 sm:h-1 ${secondLineStyle}`}
              ></span>
              <span
                className={`h-[2px] rounded-full bg-secondary-black transition-all duration-200 sm:h-1 ${thirdLineStyle}`}
              ></span>
            </button>
          </div>
        </div>
        <div
          className={`h-screen w-full overflow-y-auto bg-primary-black text-primary-white`}
        >
          Hello
        </div>
      </header>
      <ProgramTab
        isOpen={isProgramOpen}
        onMouseLeave={() => setIsProgramOpen(false)}
        items={[
          {
            name: "Program",
            childs: [
              {
                name: "Program 1",
                to: "/program/program-1",
              },
              {
                name: "Program 2",
                to: "/program/program-2",
              },
            ],
          },
          {
            name: "Gelo Program",
            childs: [
              {
                name: "Program 1",
                to: "/program/program-1",
              },
              {
                name: "Program 2",
                to: "/program/program-2",
              },
            ],
          },
          {
            name: "Udin Program ",
            childs: [
              {
                name: "Program 1",
                to: "/program/program-1",
              },
              {
                name: "Program 2",
                to: "/program/program-2",
              },
            ],
          },
          {
            name: "Semesta Program",
            childs: [
              {
                name: "Program 1",
                to: "/program/program-1",
              },
              {
                name: "Program 2",
                to: "/program/program-2",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Topbar;
