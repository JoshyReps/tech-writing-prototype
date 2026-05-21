const PascalCaseConverter = function (text: string): string {
  if (text.includes("_")) {
    const textSplitByUnderscore: string[] = text.split("_");
    const textArrayWithPascalCasing: string[] = [];

    textSplitByUnderscore.forEach((word: string) => {
      textArrayWithPascalCasing.push(
        word.split("").at(0)?.toUpperCase() + word.slice(1),
      );
    });

    return textArrayWithPascalCasing.join(" ");
  }
  return text.split("").at(0)?.toUpperCase() + text.slice(1);
};

export default PascalCaseConverter;
