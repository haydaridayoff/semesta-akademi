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

const companyLogos = [
  "https://semestaakademi.com/assets/v2/images/partners/lazada.png",
  "https://semestaakademi.com/assets/v2/images/partners/boga-group.png",
  "https://semestaakademi.com/assets/v2/images/partners/tiketcom.png",
  "https://semestaakademi.com/assets/v2/images/partners/reckitt-beckinser.png",
  "https://semestaakademi.com/assets/v2/images/partners/tuku.png",

  // Add more logo paths as needed
];

const testimonies = [
  {
    testimony:
      "Disini kita bukan hanya mendengar lecturers secara one way, tetapi setelah itu, kami ada “tugas” untuk memikirkan bagaimana mengaplikasikan apa yang kita pelajari ke business kami",
    name: "Hiroto Rauzan Fikri",
    role: "Digital Marketing",
    image:
      "https://semestaakademi.com/assets/v2/images/testimonials/hiroto.png",
  },
  {
    testimony:
      "Disini kita bukan hanya mendengar lecturers secara one way, tetapi setelah itu, kami ada “tugas” untuk memikirkan bagaimana mengaplikasikan apa yang kita pelajari ke business kami",
    name: "Hiroto Rauzan Fikri",
    role: "Digital Marketing",
    image:
      "https://semestaakademi.com/assets/v2/images/testimonials/hiroto.png",
  },
  {
    testimony:
      "Disini kita bukan hanya mendengar lecturers secara one way, tetapi setelah itu, kami ada “tugas” untuk memikirkan bagaimana mengaplikasikan apa yang kita pelajari ke business kami",
    name: "Hiroto Rauzan Fikri",
    role: "Digital Marketing",
    image:
      "https://semestaakademi.com/assets/v2/images/testimonials/hiroto.png",
  },
  {
    testimony:
      "Disini kita bukan hanya mendengar lecturers secara one way, tetapi setelah itu, kami ada “tugas” untuk memikirkan bagaimana mengaplikasikan apa yang kita pelajari ke business kami",
    name: "Hiroto Rauzan Fikri",
    role: "Digital Marketing",
    image:
      "https://semestaakademi.com/assets/v2/images/testimonials/hiroto.png",
  },
  {
    testimony:
      "Disini kita bukan hanya mendengar lecturers secara one way, tetapi setelah itu, kami ada “tugas” untuk memikirkan bagaimana mengaplikasikan apa yang kita pelajari ke business kami",
    name: "Hiroto Rauzan Fikri",
    role: "Digital Marketing",
    image:
      "https://semestaakademi.com/assets/v2/images/testimonials/hiroto.png",
  },
  {
    testimony:
      "Disini kita bukan hanya mendengar lecturers secara one way, tetapi setelah itu, kami ada “tugas” untuk memikirkan bagaimana mengaplikasikan apa yang kita pelajari ke business kami",
    name: "Hiroto Rauzan Fikri",
    role: "Digital Marketing",
    image:
      "https://semestaakademi.com/assets/v2/images/testimonials/hiroto.png",
  },
  {
    testimony:
      "Disini kita bukan hanya mendengar lecturers secara one way, tetapi setelah itu, kami ada “tugas” untuk memikirkan bagaimana mengaplikasikan apa yang kita pelajari ke business kami",
    name: "Hiroto Rauzan Fikri",
    role: "Digital Marketing",
    image:
      "https://semestaakademi.com/assets/v2/images/testimonials/hiroto.png",
  },
  {
    testimony:
      "Disini kita bukan hanya mendengar lecturers secara one way, tetapi setelah itu, kami ada “tugas” untuk memikirkan bagaimana mengaplikasikan apa yang kita pelajari ke business kami",
    name: "Hiroto Rauzan Fikri",
    role: "Digital Marketing",
    image:
      "https://semestaakademi.com/assets/v2/images/testimonials/hiroto.png",
  },
];

const featuredPrograms = [
  {
    header: { status: ProgramStatus.OPEN, time: 3, timeUnit: "hari" },
    img: "https://semestaakademi.com/assets/v2/MusicalTheaterActing/MusicalTheaterActingBatch2.png",
    title: "Semesta Akademi Digital Marketing",
  },
  {
    header: { status: ProgramStatus.OPEN, time: 3, timeUnit: "hari" },
    img: "https://semestaakademi.com/assets/v2/MusicalTheaterActing/MusicalTheaterActingBatch2.png",
    title: "Semesta Akademi Digital Marketing",
  },
  {
    header: { status: ProgramStatus.OPEN, time: 3, timeUnit: "hari" },
    img: "https://semestaakademi.com/assets/v2/MusicalTheaterActing/MusicalTheaterActingBatch2.png",
    title: "Semesta Akademi Digital Marketing",
  },
];

const pengajarProfiles = [
  {
    name: "Mikhael Gaery Undarsa",
    description: "Co-founder & Chief Marketing Officer at Tiket.com",
    image: "https://semestaakademi.com/assets/v2/DigitalMarketing/Gaery.png",
  },
  {
    name: "Mikhael Gaery Undarsa",
    description: "Co-founder & Chief Marketing Officer at Tiket.com",
    image: "https://semestaakademi.com/assets/v2/DigitalMarketing/Gaery.png",
  },
  {
    name: "Mikhael Gaery Undarsa",
    description: "Co-founder & Chief Marketing Officer at Tiket.com",
    image: "https://semestaakademi.com/assets/v2/DigitalMarketing/Gaery.png",
  },
  {
    name: "Mikhael Gaery Undarsa",
    description: "Co-founder & Chief Marketing Officer at Tiket.com",
    image: "https://semestaakademi.com/assets/v2/DigitalMarketing/Gaery.png",
  },
];

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
};

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

const Beranda: React.FC = () => {
  return (
    <>
      <div className="w-full h-fit">
        <video autoPlay muted loop playsInline className="w-screen h-auto">
          <source
            src="https://semestaakademi.com/assets/v2/Homepage/header_desktop_v2.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="w-full flex flex-col md:flex-row border-b border-primary-black">
        <p className="basis-1/4 py-7 pr-3 pl-20 min-h-[7rem] h-full font-bold text-2xl font-primary text-secondary-black border-primary-black border-b md:border-b-0 md:border-r">
          Belajar dari yang terbaik di Industri
        </p>
        <ImageCarousel images={companyLogos} widthModifier={1.2} />
      </div>
      <SectionTitle
        image="https://semestaakademi.com/assets/v2/Homepage/Daftar_Program.svg"
        title="Daftar Program"
      />
      <div className="px-14 py-5 pb-8 border-b border-primary-black">
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
          {pengajarProfiles.map((profile) => (
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
        <Slider {...settings} pauseOnHover>
          {testimonyCards()}
        </Slider>
      </div>
    </>
  );
};

export default Beranda;
