import { useEffect, useLayoutEffect, useRef } from "react";
import DescriptionTitle from "../../components/title/descriptionTitle";
import MainTitle from "../../components/title/mainTitle";
import { dateToIndonesianString } from "../../utils/dateConverter";
import { moneyConverter } from "../../utils/moneyConverter";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProgramDetail: React.FC = () => {
  return (
    <>
      <ProgramDetailHeader
        durasi="3 Bulan"
        jadwalBuka={new Date()}
        jadwalTutup={new Date()}
        hargaAsli={100000}
        hargaPromo={90000}
        hargaPerBulan={50000}
      />
      <DetailProgramTitleLayout>
        <MainTitle className="p-4 font-bold">
          Build and Grow Your
          <br />
          <span className=" font-redactionItalic">F&B Business</span>
        </MainTitle>
        <MiddleTitle>
          Panduan{" "}
          <span className="relative inline-block">
            <span className="ellipse-content px-4">Lengkap</span>
            <svg
              className="absolute top-0"
              width="220"
              height="80"
              viewBox="0 0 254 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="ellipse invisible"
                d="M252 46.6471C252 54.5325 247.174 61.1947 238.148 66.8282C229.113 72.4675 216.199 76.8446 200.876 80.1554C170.262 86.77 130.667 89 94.9533 89C59.3412 89 35.9981 83.5921 21.6295 75.5764C7.36855 67.6209 2 57.1507 2 46.6471C2 36.5401 11.0349 25.3823 29.8081 16.637C48.4226 7.96557 76.007 2 111.57 2C147.23 2 182.634 5.62529 209.055 13.2019C222.277 16.9935 233.11 21.7361 240.596 27.4034C248.062 33.0554 252 39.4582 252 46.6471Z"
                stroke="#FF1C26"
                stroke-width="4"
              ></path>
            </svg>
          </span>{" "}
          Bikin Bisnis
          <br />
          Kuliner dari Nol
        </MiddleTitle>
      </DetailProgramTitleLayout>
    </>
  );
};

const MiddleTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(DrawSVGPlugin);
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".ellipse", {
        visibility: "visible",
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".ellipse",
            start: "top 60%",
            end: "bottom 60%",
            markers: {
              startColor: "green",
              endColor: "#FF1C26",
            },
          },
        })
        .fromTo(
          ".ellipse",
          {
            drawSVG: 0,
            immediateRender: false,
          },
          {
            duration: 2,
            drawSVG: "100%",
            ease: "power4.inOut",
          },
          "stroke",
        )
        .to(
          ".ellipse-content",
          {
            duration: 1,
            opacity: 0,
            ease: "power4.in",
          },
          "<",
        )
        .to(
          ".ellipse-content",
          {
            duration: 1,
            opacity: 1,
            ease: "power4.out",
          },
          ">",
        )
        .set(
          ".ellipse-content",
          {
            fontFamily: "var(--font-redaction-italic)",
          },
          "<",
        );
      return () => {
        ctx.revert();
      };
    }, containerRef);
  }, []);

  return (
    <p
      ref={containerRef}
      className=" text-5xl font-semibold leading-relaxed text-secondary-black"
    >
      {children}
    </p>
  );
};

const DetailProgramTitleLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex h-full w-full bg-gradient-to-b from-cyan-400 pb-16 pl-24 pt-40">
      <div className="h-32 w-32">
        <img
          src="https://semestaakademi.com/assets/v2/ProgramDetails/Purple_Star.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full">{children}</div>
      <div className="flex h-full w-fit flex-col items-start justify-center gap-2">
        <span className="block h-28 w-28 -rotate-90 overflow-hidden truncate text-start font-redactionItalic text-sm">
          Scroll to bottom
        </span>
        <span className="h-4 w-4">
          <img
            className="h-full w-full object-contain"
            src="https://semestaakademi.com/assets/v2/images/arrow-bottom.png"
            alt="sadada"
          />
        </span>
      </div>
    </div>
  );
};

const ProgramDetailHeader: React.FC<{
  durasi?: string;
  jadwalBuka?: Date;
  jadwalTutup?: Date;
  hargaAsli?: number;
  hargaPromo?: number;
  hargaPerBulan?: number;
}> = ({
  durasi,
  jadwalBuka,
  jadwalTutup,
  hargaAsli,
  hargaPromo,
  hargaPerBulan,
}) => {
  return (
    <div className="fixed z-10 flex h-24 w-full gap-8 bg-secondary-black px-32 py-6">
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">Durasi Program</p>
        <p className="font-semibold text-primary-white">{durasi}</p>
      </div>
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">Jadwal Kelas</p>
        <p className="font-semibold text-primary-white">
          {jadwalBuka && dateToIndonesianString(jadwalBuka)}
        </p>
      </div>
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">
          Pendaftaran Ditutup
        </p>
        <p className="font-semibold text-primary-white">
          {jadwalTutup && dateToIndonesianString(jadwalTutup)}
        </p>
      </div>
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">Harga</p>
        <p className="font-semibold text-primary-white">
          {hargaAsli && moneyConverter(hargaAsli)}
        </p>
      </div>
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">Harga Promo</p>
        <p className="font-semibold text-primary-white">
          {hargaPromo && moneyConverter(hargaPromo)}
        </p>
        <p
          className={`text-xs text-primary-white ${!hargaPerBulan && "hidden"}`}
        >
          {"("}Starts from{" "}
          <span className="font-black">
            {hargaPerBulan && moneyConverter(hargaPerBulan, false)}
          </span>
          /month*
          {")"}
        </p>
      </div>
    </div>
  );
};

export default ProgramDetail;
