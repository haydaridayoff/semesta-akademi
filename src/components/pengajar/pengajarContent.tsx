import { PengajarItem } from "../../models/pengajar";
import ProfileCard from "../cards/profileCard";

const PengajarContent: React.FC<{
  items: PengajarItem[];
  selectedDivision: string;
}> = ({ items, selectedDivision }) => {
  return (
    <div className="grid w-full grid-cols-2 justify-items-center gap-4 p-4 md:grid-cols-3 md:px-8 md:py-12">
      {items
        .filter((item) => {
          return item.division === selectedDivision;
        })
        .map((item, index) => {
          return (
            <ProfileCard
              key={index}
              description={item.description}
              image={item.image}
              name={item.name}
            />
          );
        })}
    </div>
  );
};

export default PengajarContent;
