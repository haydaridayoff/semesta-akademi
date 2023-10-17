const DetailProgramTitleLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <section className="flex h-full w-full flex-col border-b border-primary-black bg-gradient-to-b from-cyan-400 p-4 lg:flex-row lg:pb-16 lg:pl-24 lg:pt-40">
      <div className="re h-20 w-20 animate-none transition-all hover:animate-spin sm:h-32 sm:w-32">
        <img
          src="https://semestaakademi.com/assets/v2/ProgramDetails/Purple_Star.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full">{children}</div>
      <div className="hidden h-full w-fit flex-col items-start justify-center gap-2 lg:flex">
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
