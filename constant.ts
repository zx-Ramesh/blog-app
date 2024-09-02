export const dateConvert = (date: string) => {
    const originalDate = new Date(date);
    const formattedDate = originalDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };