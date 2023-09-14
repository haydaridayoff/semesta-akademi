import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ImageCarousel from "../components/imageCarousel/infiniteCarousel";
import ProgramCard, { ProgramStatus } from "../components/cards/programCard";
import SectionTitle from "../components/title/sectionTitle";
import Button from "../components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings as SlickSettings } from "react-slick";
import ProfileCard from "../components/cards/profileCard";
import TestimonyCard, {
  Color,
  selectRandomColor2Execption,
  selectRandomColorException,
} from "../components/cards/testimonyCard";
import GridColsLayout from "../components/layouts/gridColsLayout";
import fetchData from "../services/fetchData";

const settings: SlickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 915,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: false,
        centerMode: false,
      },
    },
  ],
};

interface Program {
  header: ProgramHeader;
  img: string;
  title: string;
}

interface ProgramHeader {
  status: ProgramStatus;
  time: number;
  timeUnit: string;
}

interface Testimony {
  testimony: string;
  name: string;
  role: string;
  image: string;
}

interface Pengajar {
  name: string;
  description: string;
  image: string;
}

const Beranda: React.FC = () => {
  const [companyLogos, setCompanyLogos] = useState<string[]>([]);
  const [featuredPrograms, setFeaturedPrograms] = useState<Program[]>([]);
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [featuredPengajar, setFeaturedPengajar] = useState<Pengajar[]>([]);
  const [shapes, setShapes] = useState<string[]>([]);

  useEffect(() => {
    fetchData<{ data: string[] }>("/mockData/companyLogos.json")
      .then((response) => {
        setCompanyLogos(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });

    fetchData<{ data: Program[] }>("/mockData/featuredPrograms.json")
      .then((response) => {
        setFeaturedPrograms(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });

    fetchData<{ data: Testimony[] }>("/mockData/testimonies.json")
      .then((response) => {
        setTestimonies(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });

    fetchData<{ data: Pengajar[] }>("/mockData/featuredPengajar.json")
      .then((response) => {
        setFeaturedPengajar(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });

    fetchData<{ data: string[] }>("/mockData/shapes.json")
      .then((response) => {
        setShapes(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });
  }, []);

  const testimonyCards = () => {
    const rows = [];
    let selectedColor: Color = "orange";
    for (let i = 0; i < testimonies.length; i++) {
      rows.push(
        <TestimonyCard
          testimony={testimonies[i].testimony}
          name={testimonies[i].name}
          role={testimonies[i].role}
          image={testimonies[i].image}
          color={selectedColor}
          className={i % 2 === 0 ? "rotate-1" : "-rotate-1"}
        />,
      );
      selectedColor = selectRandomColorException(selectedColor);
      if (i >= testimonies.length - 1) {
        selectedColor = selectRandomColor2Execption(selectedColor, "orange");
      }
    }
    return rows;
  };

  const carouselItems = (): JSX.Element[] => {
    const rows: JSX.Element[] = [];
    shapes.map((shape, index) => {
      rows.push(
        <div
          key={index}
          className="flex items-center gap-4 text-xl font-medium"
        >
          <img src={shape} alt="" className="h-8 w-8" />
          #BelajarBeda
        </div>,
      );
    });
    return rows;
  };

  return (
    <>
      <div className="h-auto w-full sm:w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-auto w-full sm:w-screen"
        >
          <source
            src="https://semestaakademi.com/assets/v2/Homepage/header_desktop_v2.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="flex w-full flex-col border-b border-primary-black md:flex-row">
        <p className="border-b border-primary-black py-4 pl-4 font-primary text-lg font-bold text-secondary-black sm:h-full sm:min-h-[7rem] sm:basis-1/4 sm:py-7 sm:pl-20 sm:pr-3 sm:text-2xl md:border-b-0 md:border-r">
          Belajar dari yang terbaik di Industri
        </p>
        <ImageCarousel images={companyLogos} widthModifier={2} />
      </div>
      <SectionTitle
        image="https://semestaakademi.com/assets/v2/Homepage/Daftar_Program.svg"
        title="Daftar Program"
      />
      <div className="border-b border-primary-black py-5 pb-8 sm:px-14">
        <div className="grid grid-flow-col justify-items-center gap-4 overflow-x-auto sm:grid-flow-dense sm:grid-cols-2 xl:grid-cols-3">
          {featuredPrograms.map((program, index) => (
            <ProgramCard
              key={index}
              header={program.header}
              img={program.img}
              title={program.title}
            />
          ))}
        </div>
        <div className="m-4 flex justify-center">
          <Button
            fill="transparent"
            outline="orange"
            isArrowIcon
            className="w-48 justify-evenly text-lg"
          >
            Lihat Lebih
          </Button>
        </div>
      </div>
      <SectionTitle
        image="https://semestaakademi.com/assets/v2/Homepage/Pengajar_Kami.svg"
        title="Pengajar Kami"
      />
      <div className="border-b border-primary-black py-5 pb-8 sm:px-14">
        <GridColsLayout className="sm:grid-cols-3 xl:grid-cols-4">
          {featuredPengajar.map((profile, index) => (
            <ProfileCard
              key={index}
              image={profile.image}
              name={profile.name}
              description={profile.description}
            />
          ))}
        </GridColsLayout>
        <div className="m-4 flex justify-center">
          <Button
            fill="transparent"
            outline="orange"
            isArrowIcon
            className="w-48 justify-evenly text-lg"
          >
            Lihat Lebih
          </Button>
        </div>
      </div>
      <SectionTitle
        image="https://semestaakademi.com/assets/v2/Homepage/Testimoni.svg"
        title="Testimoni Pengajar dan Alumni"
      />
      <div className="h-[500px] border-b border-primary-black py-5 pb-8">
        <Slider {...settings}>
          {testimonyCards().map((card, index) => (
            <div key={index} className="flex items-center p-5">
              {card}
            </div>
          ))}
        </Slider>
      </div>
      <div className="border-b border-primary-black bg-yellow-400 py-5">
        <ImageCarousel items={carouselItems()} className="h-full" />
      </div>
      <div className="flex flex-col gap-12 border-b border-primary-black px-4 py-20 md:flex-row md:items-center md:gap-24 md:px-32">
        <div className="h-48 w-48 shrink-0 md:h-[420px] md:w-[420px]">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-contain"
              src="/images/beranda1.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8 font-primary ">
          <h2 className="text-3xl font-semibold text-secondary-black md:text-5xl">
            Temukan Solusi Kreatif{" "}
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/Ornament_Ellipse.svg"
              alt=""
              className="inline-block h-8 w-8 align-middle md:h-12 md:w-24"
            />{" "}
            dalam{" "}
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/Ornament_Stairs.svg"
              alt=""
              className="inline-block h-6 w-6 align-baseline md:h-12 md:w-12"
            />{" "}
            Ruang Kolaboratif
          </h2>
          <p className="text-lg">
            Kami percaya perkembangan ekosistem industri dapat dicapai dengan
            ketersediaan talenta yang berkualitas. Semesta Akademi menawarkan
            program edukasi kreatif melalui pendekatan komunitas bersama para
            pemimpin dan praktisi profesional.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-4 py-20 md:flex-row-reverse md:items-center md:gap-0 md:px-32">
        <div className="h-48 w-48 shrink-0 md:h-[420px] md:w-[420px]">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-contain"
              src="/images/beranda2.png"
              alt=""
            />
          </div>
        </div>
        <div className="mr-60 flex w-full flex-col gap-8 font-primary">
          <h2 className="text-3xl font-semibold text-secondary-black md:text-5xl">
            Optimalkan Talenta, Tingkatkan Potensi Perusahaan Anda {""}
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/ArcOrange.svg"
              alt=""
              className="inline-block h-8 w-16 align-baseline md:h-12 md:w-24"
            />
          </h2>
          <p className="text-lg">
            Kami menawarkan solusi pengembangan keterampilan dan pengetahuan,
            berkolaborasi dengan trainer dan praktisi terbaik di industri,
            sesuai kebutuhan perusahaan Anda.
          </p>
          <div className="flex max-w-lg flex-wrap justify-between md:max-w-lg">
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/Emtek.png"
              alt=""
              className="h-6 w-auto object-contain object-left md:h-12"
            />
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/BRI.png"
              alt=""
              className="h-6 w-auto object-contain object-left md:h-12"
            />
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/FASBlack.png"
              alt=""
              className="h-6 w-auto object-contain object-left md:h-12"
            />
          </div>
          <Button
            outline="primary-black"
            fill="orange"
            isArrowIcon
            className="mx-auto gap-2 font-primary font-bold"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div className="mb-12">
        <div className="mx-auto flex h-52 w-11/12 max-w-7xl flex-col items-center justify-center gap-4 rounded-2xl bg-indigo-800 font-primary text-primary-white">
          <div className="text-2xl leading-normal sm:text-4xl">
            Berani{" "}
            <span className="relative">
              <img
                src="https://semestaakademi.com/assets/v2/images/join-ellipse.png"
                alt=""
                className="inline-block w-44 sm:h-20 sm:w-64"
              />
              <span className="absolute left-0 top-0 truncate">
                #BelajarBeda ?
              </span>
            </span>
          </div>
          <div className="flex w-full flex-col justify-center gap-4 px-4 sm:flex-row sm:gap-8">
            <Button outline="primary-black" fill="orange" className="">
              Daftar Sekarang
            </Button>
            <Button outline="primary-white" fill="transparent" className="">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
