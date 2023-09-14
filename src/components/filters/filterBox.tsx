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

export default FilterBox;
