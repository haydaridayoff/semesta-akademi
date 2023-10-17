import MainTitle from "../../components/title/mainTitle";
import MiddleTitle from "../../components/title/middleTitle";
import DetailProgramTitleLayout from "../../components/layouts/detailProgramTitleLayout";
import DetailProgramInfo from "../../components/programs/detailProgramInfo";
import SectionTitle from "../../components/title/sectionTitle";
import ProfileCard from "../../components/cards/profileCard";
import { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";
import { PengajarItem } from "../../models/pengajar";
import { ProgramsItem } from "../../models/programs";
import { ProgramDetail as ProgramDetailModel } from "../../models/programDetail";
import ForYouSection from "../../components/programs/forYouSection";

const ProgramDetail: React.FC = () => {
  const [content, setContent] = useState<ProgramDetailModel | null>(null);

  useEffect(() => {
    fetchData<{
      data: {
        detail: {
          durasi: string;
          jadwal: string;
          ditutup: string;
          "harga-asli": number;
          "harga-promo": number;
          "harga-cicilan-perbulan": number;
        };
        "untuk-kamu": {
          title: string;
          description: string;
        }[];
        pengajar: PengajarItem[];
        semesta: {
          image: string;
          title: string;
        }[];
        kurikulum: {
          title: string;
          timeline: string;
          description: string;
        }[];
        testimony: {
          testimony: string;
          name: string;
          role: string;
          image: string;
        }[];
        "program-lain": ProgramsItem[];
      };
    }>("/mockData/programDetail0.json")
      .then((response) => {
        setContent({
          detail: {
            durasi: response.data.detail.durasi,
            jadwal: response.data.detail.jadwal,
            ditutup: response.data.detail.ditutup,
            hargaAsli: response.data.detail["harga-asli"],
            hargaDiskon: response.data.detail["harga-promo"],
            hargaCicilan: response.data.detail["harga-cicilan-perbulan"],
          },
          untukKamu: response.data["untuk-kamu"],
          pengajar: response.data.pengajar,
          semesta: response.data.semesta,
          kuriKulum: response.data.kurikulum,
          testimony: response.data.testimony,
          programLain: response.data["program-lain"],
        });
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });
  }, []);

  return (
    <>
      <DetailProgramInfo
        durasi={content?.detail.durasi}
        jadwalBuka={new Date(content?.detail.ditutup ?? 0)}
        jadwalTutup={new Date(content?.detail.ditutup ?? 0)}
        hargaAsli={content?.detail.hargaAsli}
        hargaPromo={content?.detail.hargaDiskon}
        hargaPerBulan={content?.detail.hargaCicilan}
        fixed
      />
      <DetailProgramTitleLayout>
        <MainTitle className="font-bold lg:p-4 ">
          Build and Grow Your <br className="hidden lg:block" />
          <span className=" font-redactionItalic">F&B Business</span>
        </MainTitle>
        <MiddleTitle>
          Panduan{" "}
          <span className="relative inline-block">
            <span className="ellipse-content px-4">Lengkap</span>
            <svg
              className="absolute left-1/2 top-1/2 h-auto w-11/12 -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 254 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="ellipse invisible"
                d="M252 46.6471C252 54.5325 247.174 61.1947 238.148 66.8282C229.113 72.4675 216.199 76.8446 200.876 80.1554C170.262 86.77 130.667 89 94.9533 89C59.3412 89 35.9981 83.5921 21.6295 75.5764C7.36855 67.6209 2 57.1507 2 46.6471C2 36.5401 11.0349 25.3823 29.8081 16.637C48.4226 7.96557 76.007 2 111.57 2C147.23 2 182.634 5.62529 209.055 13.2019C222.277 16.9935 233.11 21.7361 240.596 27.4034C248.062 33.0554 252 39.4582 252 46.6471Z"
                stroke="#FF1C26"
                strokeWidth="4"
              ></path>
            </svg>
          </span>{" "}
          Bikin Bisnis <br className="hidden lg:block" />
          Kuliner dari Nol
        </MiddleTitle>
        <div>
          <p className="text-lg text-secondary-black">
            Ingin berinovasi di industri kuliner seperti Tuku, Eatlah,
            Burgreens, Hangry, Boga Group, Haka dan Puyo di dunia kuliner? Kelas
            ini tepat untukmu. Kejar inspirasi, nikmati proses kreatif dalam
            menjalani bisnismu bersama Semesta{" "}
          </p>
        </div>
      </DetailProgramTitleLayout>
      <DetailProgramInfo
        durasi={content?.detail.durasi}
        jadwalBuka={new Date(content?.detail.ditutup ?? 0)}
        jadwalTutup={new Date(content?.detail.ditutup ?? 0)}
        hargaAsli={content?.detail.hargaAsli}
        hargaPromo={content?.detail.hargaDiskon}
        hargaPerBulan={content?.detail.hargaCicilan}
      />
      <ForYouSection content={content?.untukKamu} />
      <SectionTitle
        image="https://semestaakademi.com/assets/v2/ProgramDetails/Green_Triangle.svg"
        title="Pengajar Berpengalaman"
      />
      <section className="grid grid-flow-col gap-4 overflow-x-auto">
        <ProfileCard
          name="Arief Widhiyasa"
          description="Arief Widhiyasa adalah seorang pengusaha muda yang bergerak di bidang kuliner. Ia adalah founder dari beberapa brand kuliner seperti Bakmi GM, Bakmi Gocit, dan Bakmi Gajah Mada. Ia juga merupakan founder dari beberapa brand kuliner lainnya seperti Bakmi Gajah Mada, Bakmi Gocit, dan Bakmi GM. Ia juga merupakan founder dari beberapa brand kuliner lainnya seperti Bakmi Gajah Mada, Bakmi Gocit, dan Bakmi GM."
          image="https://semestaakademi.com/assets/v2/ProgramDetails/.png"
        />
      </section>
    </>
  );
};

export default ProgramDetail;
