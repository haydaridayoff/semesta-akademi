import Button from "../ui/button";

export enum ProgramStatus {
  OPEN = 1,
  CLOSED = 0,
}

const ProgramCard: React.FC<{
  header: { status: ProgramStatus; time: number; timeUnit: string };
  img: string;
  title: string;
}> = ({ header, img, title }) => {
  return (
    <div className="m-5 w-72 sm:w-80">
      <div className="flex h-64 flex-col">
        {header.status === ProgramStatus.OPEN && (
          <div className="flex h-12 w-full border border-primary-black bg-primary-white">
            <div className="flex w-full items-center justify-center border-r border-primary-black">
              Pendaftaran Dibuka
            </div>
            <div className="flex w-full items-center justify-center">
              Program {header.time} {header.timeUnit}
            </div>
          </div>
        )}
        <div className="h-full w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={img} alt="" />
        </div>
      </div>
      <div className="flex h-56 flex-col bg-secondary-black p-4 text-primary-white">
        <div className="line line-clamp-2 h-36 text-2xl font-bold leading-10">
          {title}
        </div>
        <div className="flex h-full items-center justify-center">
          {header.status === ProgramStatus.OPEN && (
            <Button
              className="h-1/2 w-full text-2xl font-semibold"
              fill="orange"
              outline="transparent"
              isArrowIcon
            >
              Daftar Sekarang
            </Button>
          )}
          {header.status === ProgramStatus.CLOSED && (
            <Button
              className="h-1/2 w-full text-2xl font-semibold"
              fill="secondary-gray"
              outline="transparent"
              textColor="primary-gray"
              disabled
            >
              Akan Datang
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
