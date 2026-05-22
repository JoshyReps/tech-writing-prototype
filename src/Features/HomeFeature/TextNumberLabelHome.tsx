interface TextNumberLabelProps {
  numberValue: number;
  textLabel: string;
  col: boolean;
  size: "large" | "small";
}

export default function TextNumberLabel({
  numberValue,
  textLabel,
  col,
  size,
}: TextNumberLabelProps) {
  const flexDirectionBasedOnCol = col
    ? "flex-col items-center"
    : "flex-row gap-1 items-end";
  const isLarge = size === "large";

  return (
    <div className={`flex ${flexDirectionBasedOnCol} justify-center`}>
      <p className={`text-${isLarge ? "2xl" : "xl"} font-semibold`}>
        {numberValue}
      </p>{" "}
      <p className={`text-[${isLarge ? "18px" : "13px"}]`}>{textLabel}</p>
    </div>
  );
}
