export const moneyConverter = (value: number, commas: boolean = true) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: Boolean(commas) ? 2 : 0,
  }).format(value);
};
