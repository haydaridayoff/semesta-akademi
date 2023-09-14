import { useEffect, useState } from "react";
import { ProgramsItem } from "../../models/programs";
import fetchData from "../../services/fetchData";
import TopMainLayout from "../../components/layouts/topMainLayout";
import MainTitle from "../../components/title/mainTitle";
import DescriptionTitle from "../../components/title/descriptionTitle";
import FilterBox from "../../components/filters/filterBox";
import { filterNames } from "../../data/filter";
import FilterBoxMobile from "../../components/filters/filterBoxMobile";
import ProgramsContent from "../../components/programs/programsContent";

const Program: React.FC = () => {
  const [filter, setFilter] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filterItems, setFilterItems] = useState<ProgramsItem[]>([]);

  useEffect(() => {
    fetchData<{
      data: ProgramsItem[];
    }>("/mockData/programs.json")
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
          <span className="font-bold">#BelajarBeda</span>
          <span className="font-redactionItalic"> a la</span>
          <span>
            <img
              src="https://semestaakademi.com/assets/v2/images/hero-circle.png"
              alt=""
              className="ml-4 inline-block h-12 w-12 sm:h-24 sm:w-24"
            />
          </span>
          <span className="block font-redactionItalic">Berpengalaman</span>
        </MainTitle>
        <DescriptionTitle>
          Kurikulum Workshop Series ini dirancang khusus untuk para pelaku
          kreatif, pegiat media sosial, dan digital marketer yang ingin
          mengoptimalkan tampilan serta penyampaian performance report.{" "}
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
      <ProgramsContent
        items={filterItems}
        selectedDivision={filterNames[filter].name}
      />
    </>
  );
};

export default Program;
