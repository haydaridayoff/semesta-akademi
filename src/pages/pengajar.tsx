import { useState } from "react";

interface FilterItem {
  id: number;
  name: string;
  color: string;
}

const filterNames: FilterItem[] = [
  { id: 0, name: "Creative Media", color: "#FF3E46" },
  { id: 1, name: "Creative Bussiness", color: "#03CCB8" },
  { id: 2, name: "Creative Branding & Marketing", color: "#3887C7" },
  { id: 3, name: "Creative Fundamentals", color: "#FDCA40" },
];

const Pengajar: React.FC = () => {
  const [filter, setFilter] = useState<number>(2);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  return (
    <>
      <TopMainLayout>
        <MainTitle>
          <span className="font-bold">Pengajar</span>
          <span>
            <img
              src="https://semestaakademi.com/assets/v2/images/hero-star.png"
              alt=""
              className="ml-4 inline-block h-24 w-24"
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
      <FilterBox
        filterItems={filterNames}
        selected={filter}
        setSelected={setFilter}
      />
      <FilterBoxMobile
        filterItems={filterNames}
        selected={filter}
        isOpen={isFilterOpen}
        setSelected={setFilter}
        setIsOpen={setIsFilterOpen}
      />
    </>
  );
};

// export const getStaticProps: GetStaticProps<{
//   repo: string
// }> = async () => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   return { props: { repo } }
// }

const MainTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <h1 className="text-8xl text-secondary-black">{children}</h1>
    </>
  );
};

const TopMainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex flex-col gap-12 px-24 pb-16 pt-20">{children}</div>
  );
};

const DescriptionTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <p className="w-full max-w-xl text-xl text-secondary-black">{children}</p>
  );
};

const FilterBox: React.FC<{
  filterItems: {
    id: number;
    name: string;
    color: string;
  }[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}> = ({ filterItems, selected, setSelected }) => {
  return (
    <div className="flex w-full">
      {filterItems.map((item) => (
        <button
          key={item.id}
          className={`w-full items-center justify-between break-words border-y border-r border-primary-black py-10 font-primary text-2xl font-semibold first:border-l `}
          style={{
            backgroundColor: selected === item.id ? item.color : "transparent",
          }}
          onClick={() => setSelected(item.id)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

const FilterBoxMobile: React.FC<{
  filterItems: {
    id: number;
    name: string;
    color: string;
  }[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}> = ({ filterItems, selected, setSelected, setIsOpen, isOpen }) => {
  return (
    <>
      {filterItems.map((item) => (
        <>
          {selected === item.id && (
            <div key={item.id} style={{ backgroundColor: item.color }}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left"
              >
                <div>
                  <p className="font-redactionItalic">Pilih Kategori</p>
                  <p className="text-primary-white">{item.name}</p>
                </div>
                <div>
                  <img
                    src="https://semestaakademi.com/assets/v2/images/chevron-down.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
          )}
        </>
      ))}
      <div
        className={`absolute flex w-full flex-col overflow-hidden bg-primary-black text-primary-white transition-all ${
          isOpen ? "h-1/2" : "h-0"
        }`}
      >
        {isOpen &&
          filterItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className="text-left"
            >
              {item.name}
            </button>
          ))}
      </div>
    </>
  );
};

export default Pengajar;
