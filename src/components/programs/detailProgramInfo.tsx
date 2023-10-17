import { dateToIndonesianString } from "../../utils/dateConverter";
import { moneyConverter } from "../../utils/moneyConverter";

const DetailProgramInfo: React.FC<{
  durasi?: string;
  jadwalBuka?: Date;
  jadwalTutup?: Date;
  hargaAsli?: number;
  hargaPromo?: number;
  hargaPerBulan?: number;
  fixed?: boolean;
}> = ({
  durasi,
  jadwalBuka,
  jadwalTutup,
  hargaAsli,
  hargaPromo,
  hargaPerBulan,
  fixed,
}) => {
  return (
    <div
      className={`gap-8 bg-secondary-black lg:px-32 ${
        fixed
          ? "fixed z-10 hidden h-24 w-full  lg:flex"
          : "flex flex-col p-4 lg:hidden"
      }`}
    >
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">Durasi Program</p>
        <p className="font-semibold text-primary-white">{durasi}</p>
      </div>
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">Jadwal Kelas</p>
        <p className="font-semibold text-primary-white">
          {jadwalBuka && dateToIndonesianString(jadwalBuka)}
        </p>
      </div>
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">
          Pendaftaran Ditutup
        </p>
        <p className="font-semibold text-primary-white">
          {jadwalTutup && dateToIndonesianString(jadwalTutup)}
        </p>
      </div>
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">Harga</p>
        <p className="font-semibold text-primary-white">
          {hargaAsli && moneyConverter(hargaAsli)}
        </p>
      </div>
      <div className={`flex flex-col ${!durasi && "hidden"}`}>
        <p className="text-xs font-semibold text-orange-600">Harga Promo</p>
        <p className="font-semibold text-primary-white">
          {hargaPromo && moneyConverter(hargaPromo)}
        </p>
        <p
          className={`text-xs text-primary-white ${!hargaPerBulan && "hidden"}`}
        >
          {"("}Starts from{" "}
          <span className="font-black">
            {hargaPerBulan && moneyConverter(hargaPerBulan, false)}
          </span>
          /month*
          {")"}
        </p>
      </div>
    </div>
  );
};

export default DetailProgramInfo;
