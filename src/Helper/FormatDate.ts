function formatDate(dateString: string) {
  if (!dateString) return "No Date";

  const datePart = dateString.split("T")[0].split(" ")[0];
  const [year, month, day] = datePart.split("-");

  const date = new Date(Number(year), Number(month) - 1, Number(day));

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default formatDate;
