import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ImageCarousel from "../components/imageCarousel/imageCarousel";
import ProgramCard, {
  ProgramStatus,
} from "../components/programCard/programCard";
import SectionTitle from "../components/title/sectionTitle";
import Button from "../components/ui/button";
// Sample company logos
const companyLogos = [
  "https://semestaakademi.com/assets/v2/images/partners/lazada.png",
  "https://semestaakademi.com/assets/v2/images/partners/boga-group.png",
  "https://semestaakademi.com/assets/v2/images/partners/tiketcom.png",
  "https://semestaakademi.com/assets/v2/images/partners/reckitt-beckinser.png",
  "https://semestaakademi.com/assets/v2/images/partners/tuku.png",

  // Add more logo paths as needed
];

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
          <ProgramCard
            header={{
              status: ProgramStatus.OPEN,
              time: 1,
              timeUnit: "Hari",
            }}
            title="re-Setting OKR & re- Builfngaskfjaslfjalskfjaslkfjsaldjsal
          kjdsaljfalkfjaslfkjasflkjljf"
            img="https://semestaakademi.com/assets/v2/Okr/SA_PM_Thumbnail_Website.png"
          />
          <ProgramCard
            header={{
              status: ProgramStatus.OPEN,
              time: 1,
              timeUnit: "Hari",
            }}
            title="re-Setting OKR & re- Builfngaskfjaslfjalskfjaslkfjsaldjsal
          kjdsaljfalkfjaslfkjasflkjljf"
            img="https://semestaakademi.com/assets/v2/Okr/SA_PM_Thumbnail_Website.png"
          />
          <ProgramCard
            header={{
              status: ProgramStatus.OPEN,
              time: 1,
              timeUnit: "Hari",
            }}
            title="re-Setting OKR & re- Builfngaskfjaslfjalskfjaslkfjsaldjsal
          kjdsaljfalkfjaslfkjasflkjljf"
            img="https://semestaakademi.com/assets/v2/Okr/SA_PM_Thumbnail_Website.png"
          />
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
          <ProfileCard
            image="https://semestaakademi.com/assets/v2/DigitalMarketing/Gaery.png"
            name="Mikhael Gaery Undarsa"
            description="Co-founder & Chief Marketing Officer at Tiket.com"
          />
          <ProfileCard
            image="https://semestaakademi.com/assets/v2/DigitalMarketing/Gaery.png"
            name="Mikhael Gaery Undarsa"
            description="Co-founder & Chief Marketing Officer at Tiket.com"
          />
          <ProfileCard
            image="https://semestaakademi.com/assets/v2/DigitalMarketing/Gaery.png"
            name="Mikhael Gaery Undarsa"
            description="Co-founder & Chief Marketing Officer at Tiket.com"
          />
          <ProfileCard
            image="https://semestaakademi.com/assets/v2/DigitalMarketing/Gaery.png"
            name="Mikhael Gaery Undarsa"
            description="Co-founder & Chief Marketing Officer at Tiket.com"
          />
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
      <div></div>
    </>
  );
};

const ProfileCard: React.FC<{
  image: string;
  name: string;
  description: string;
}> = ({ image, name, description }) => {
  return (
    <div className="w-[220px]">
      <div className="w-[220px] h-[220px]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <h3 className="font-bold text-lg mt-4">{name}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

const GridColsLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`grid grid-flow-col overflow-x-auto gap-4 sm:grid-flow-dense sm:grid-cols-2 xl:grid-cols-3 justify-items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Beranda;
