import MainTitle from "../../components/title/mainTitle";
import MiddleTitle from "../../components/title/middleTitle";
import DetailProgramTitleLayout from "../../components/layouts/detailProgramTitleLayout";
import DetailProgramHeader from "../../components/layouts/detailProgramHeader";
import SectionTitle from "../../components/title/sectionTitle";
import ProfileCard from "../../components/cards/profileCard";

const ProgramDetail: React.FC = () => {
  return (
    <>
      <DetailProgramHeader
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
      <section className="flex border-b border-primary-black pb-16 pl-24">
        <h2>Untuk Kamu</h2>
        <div>
          <h3>Pengusaha UMKM Kuliner</h3>
          <p>
            Kamu yang ingin mempelajari lebih dalam bagaimana cara membesarkan
            bisnis kamu, atau yang baru memulai bisnis di dunia F&B{" "}
          </p>
        </div>
        <div>
          <h3>Pengusaha Kuliner Sampingan</h3>
          <p>
            Kamu yang tertarik menjelajahi industri makanan dan minuman atau
            bisnis kuliner lainnya sebagai bisnis sampingan
          </p>
        </div>
      </section>
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
