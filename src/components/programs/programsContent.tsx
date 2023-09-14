import { ProgramsItem } from "../../models/programs";
import ProgramCard from "../cards/programCard";

const ProgramsContent: React.FC<{
  items: ProgramsItem[];
  selectedDivision: string;
}> = ({ items, selectedDivision }) => {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-4 p-4 md:grid-cols-2 md:px-8 md:py-12">
      {items
        .filter((item) => {
          return item.division === selectedDivision;
        })
        .map((item, index) => {
          return (
            <ProgramCard
              key={index}
              img={item.img}
              title={item.title}
              header={item.header}
            />
          );
        })}
    </div>
  );
};

export default ProgramsContent;
