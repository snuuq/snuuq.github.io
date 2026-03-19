export const formatLongDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

export const formatMonthYear = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  });
