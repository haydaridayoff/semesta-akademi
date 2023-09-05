import Button from "../ui/button";

export enum ProgramStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

const ProgramCard: React.FC<{
  header: { status: ProgramStatus; time: number; timeUnit: string };
  img: string;
  title: string;
}> = ({ header, img, title }) => {
  return (
    <div className="w-80">
      <div className="h-64 flex flex-col">
        <div className="border border-primary-black h-12 w-full flex bg-primary-white">
          <div className="w-full flex items-center justify-center border-r border-primary-black">
            Pendaftaran{" "}
            {header.status === ProgramStatus.OPEN ? "Dibuka" : "Ditutup"}
          </div>
          <div className="w-full flex items-center justify-center">
            Program {header.time} {header.timeUnit}
          </div>
        </div>
        <div className="w-full h-full overflow-hidden">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
      </div>
      <div className="h-56 flex flex-col p-4 bg-secondary-black text-primary-white">
        <div className="h-36 text-2xl line font-bold line-clamp-2 leading-10">
          {title}
        </div>
        <div className="flex h-full justify-center items-center">
          <Button
            className="h-1/2 text-2xl w-full font-semibold"
            fill="orange"
            outline="transparent"
            isArrowIcon
          >
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
