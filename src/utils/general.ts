/**
 * Parses a date string into a JS Date object.
 *
 * @param {string | null} dateString - The date string to parse. It should be in the format "month year".
 * @return {Date | null} The parsed JavaScript Date object, or null if the input is falsy.
 */
export const parseDateString = (dateString: string | null) => {
  if (!dateString) return null;

  const [month, year] = dateString.split(" ");
  const months: Record<string, number> = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };
  
  return new Date(parseInt(year, 10), months[month.toLowerCase()]);
};