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
      <div style={{ backgroundColor: filterItems[selected].color }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between border-y border-primary-black px-4 py-6 text-left"
        >
          <div>
            <p className="font-redactionItalic">Pilih Kategori</p>
            <p className="text-xl font-semibold text-primary-white">
              {filterItems[selected].name}
            </p>
          </div>
          <div>
            <img
              src="https://semestaakademi.com/assets/v2/images/chevron-down.png"
              alt=""
            />
          </div>
        </button>
      </div>
      <div
        className={`absolute flex w-full flex-col overflow-hidden bg-primary-black text-primary-white transition-all ${
          isOpen ? "h-64" : "h-0"
        }`}
      >
        {isOpen &&
          filterItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(item.id);
                setIsOpen(false);
              }}
              className="h-full w-full text-left text-xl font-semibold"
            >
              {item.name}
            </button>
          ))}
      </div>
    </>
  );
};

export default FilterBoxMobile;
