const DetailProgramTitleLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <section className="flex h-full w-full flex-col border-b border-primary-black bg-gradient-to-b from-cyan-400 pb-16 pl-24 pt-40 md:flex-row">
      <div className="re h-32 w-32 animate-none transition-all hover:animate-spin">
        <img
          src="https://semestaakademi.com/assets/v2/ProgramDetails/Purple_Star.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full">{children}</div>
      <div className="flex h-full w-fit flex-col items-start justify-center gap-2">
        <span className="block h-28 w-28 -rotate-90 overflow-hidden truncate text-start font-redactionItalic text-sm">
          Scroll to bottom
        </span>
        <span className="h-4 w-4">
          <img
            className="h-full w-full object-contain"
            src="https://semestaakademi.com/assets/v2/images/arrow-bottom.png"
            alt="sadada"
          />
        </span>
      </div>
    </section>
  );
};

export default DetailProgramTitleLayout;
