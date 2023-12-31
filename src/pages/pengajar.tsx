import { useEffect, useState } from "react";
import MainTitle from "../components/title/mainTitle";
import TopMainLayout from "../components/layouts/topMainLayout";
import FilterBox from "../components/filters/filterBox";
import DescriptionTitle from "../components/title/descriptionTitle";
import FilterBoxMobile from "../components/filters/filterBoxMobile";
import fetchData from "../services/fetchData";
import { PengajarItem } from "../models/pengajar";
import { filterNames } from "../data/filter";
import PengajarContent from "../components/pengajar/pengajarContent";

const Pengajar: React.FC = () => {
  const [filter, setFilter] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filterItems, setFilterItems] = useState<PengajarItem[]>([]);

  useEffect(() => {
    fetchData<{
      data: PengajarItem[];
    }>("/mockData/pengajar.json")
      .then((response) => {
        setFilterItems(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });
  }, []);

  return (
    <>
      <TopMainLayout>
        <MainTitle>
          <span className="font-bold">Pengajar</span>
          <span>
            <img
              src="https://semestaakademi.com/assets/v2/images/hero-star.png"
              alt=""
              className="ml-4 inline-block h-12 w-12 sm:h-24 sm:w-24"
            />
          </span>
          <span className="block font-redactionItalic">Berpengalaman</span>
        </MainTitle>
        <DescriptionTitle>
          Kolaborasi dan diskusikan semua mengenai bisnis kamu dengan pengajar
          kami. Dengan pengalaman dan ilmu yang dimiliki, pengajar kami siap
          membagikan ilmunya kepada kamu!{" "}
        </DescriptionTitle>
      </TopMainLayout>
      <div className="hidden sm:block">
        <FilterBox
          filterItems={filterNames}
          selected={filter}
          setSelected={setFilter}
        />
      </div>
      <div className="block sm:hidden">
        <FilterBoxMobile
          filterItems={filterNames}
          selected={filter}
          isOpen={isFilterOpen}
          setSelected={setFilter}
          setIsOpen={setIsFilterOpen}
        />
      </div>
      <PengajarContent
        items={filterItems}
        selectedDivision={filterNames[filter].name}
      />
    </>
  );
};

export default Pengajar;
