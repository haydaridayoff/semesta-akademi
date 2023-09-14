export const fromStringToDate = (date: string) => {
  let newDate = new Date(date);

  //indonesian date format
  return newDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const dateToIndonesianString = (date: Date) => {
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
