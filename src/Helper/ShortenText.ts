export default function shortenText(text: string) {
  const isLettersLongerThanFifteen = text.length > 15;
  const textCutByFifteen = text.slice(0, 15);
  return textCutByFifteen + (isLettersLongerThanFifteen ? "..." : "");
}
