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
        />
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
          className="flex items-center font-medium gap-4 text-xl"
        >
          <img src={shape} alt="" className="h-8 w-8" />
          #BelajarBeda
        </div>
      );
    });
    return rows;
  };

  return (
    <>
      <div className="sm:w-full w-full h-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="sm:w-screen w-full h-auto"
        >
          <source
            src="https://semestaakademi.com/assets/v2/Homepage/header_desktop_v2.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="w-full flex flex-col md:flex-row border-b border-primary-black">
        <p className="sm:basis-1/4 py-4 sm:py-7 pl-4 sm:pl-20 sm:pr-3 sm:min-h-[7rem] sm:h-full font-bold text-lg sm:text-2xl font-primary text-secondary-black border-primary-black border-b md:border-b-0 md:border-r">
          Belajar dari yang terbaik di Industri
        </p>
        <ImageCarousel images={companyLogos} widthModifier={2} />
      </div>
      <SectionTitle
        image="https://semestaakademi.com/assets/v2/Homepage/Daftar_Program.svg"
        title="Daftar Program"
      />
      <div className="py-5 pb-8 sm:px-14 border-b border-primary-black">
        <div className="grid grid-flow-col overflow-x-auto gap-4 sm:grid-flow-dense sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {featuredPrograms.map((program) => (
            <ProgramCard
              key={program.title}
              header={program.header}
              img={program.img}
              title={program.title}
            />
          ))}
        </div>
        <div className="flex justify-center m-4">
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
      <div className="px-14 py-5 pb-8 border-b border-primary-black">
        <GridColsLayout className="sm:grid-cols-3 xl:grid-cols-4">
          {featuredPengajar.map((profile) => (
            <ProfileCard
              key={profile.name}
              image={profile.image}
              name={profile.name}
              description={profile.description}
            />
          ))}
        </GridColsLayout>
        <div className="flex justify-center m-4">
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
      <div className="h-[500px] py-5 pb-8 border-b border-primary-black">
        <Slider {...settings}>{testimonyCards()}</Slider>
      </div>
      <div>
        <ImageCarousel items={carouselItems()} widthModifier={1.6} />
      </div>
      <div className="px-14 py-5 pb-8 border-b border-primary-black flex">
        <div>
          <div>
            <img src="/images/beranda1.png" alt="" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-5xl text-secondary-black">
            Temukan Solusi Kreatif
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/Ornament_Ellipse.svg"
              alt=""
              className="inline-block h-10 w-10"
            />
            dalam
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/Ornament_Stairs.svg"
              alt=""
              className="inline-block h-10 w-10"
            />
            Ruang Kolaboratif
          </h2>
          <p>
            Kami percaya perkembangan ekosistem industri dapat dicapai dengan
            ketersediaan talenta yang berkualitas. Semesta Akademi menawarkan
            program edukasi kreatif melalui pendekatan komunitas bersama para
            pemimpin dan praktisi profesional.
          </p>
        </div>
      </div>
      <div className="px-14 py-5 pb-8 border-b border-primary-black flex">
        <div>
          <div>
            <img src="/images/beranda1.png" alt="" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-5xl text-secondary-black">
            Temukan Solusi Kreatif
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/Ornament_Ellipse.svg"
              alt=""
              className="inline-block h-10 w-10"
            />
            dalam
            <img
              src="https://semestaakademi.com/assets/v2/Homepage/Ornament_Stairs.svg"
              alt=""
              className="inline-block h-10 w-10"
            />
            Ruang Kolaboratif
          </h2>
          <p>
            Kami percaya perkembangan ekosistem industri dapat dicapai dengan
            ketersediaan talenta yang berkualitas. Semesta Akademi menawarkan
            program edukasi kreatif melalui pendekatan komunitas bersama para
            pemimpin dan praktisi profesional.
          </p>
          <div></div>
          <Button
            outline="primary-black"
            fill="orange"
            className=""
            isArrowIcon
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div>
        <div>
          Berani <span>#BelajarBeda?</span>
        </div>
        <div>
          <Button outline="primary-black" fill="orange" className="">
            Daftar Sekarang
          </Button>
          <Button outline="primary-white" fill="transparent" className="">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </>
  );
};

export default Beranda;
