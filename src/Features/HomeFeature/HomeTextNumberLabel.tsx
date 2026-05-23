import SpinnerMini from "../../Components/SpinnerMini";

interface TextNumberLabelProps {
  numberValue: number;
  textLabel: string;
  col: boolean;
  size: "large" | "small";
  isLoading?: boolean;
  color?: string;
}

export default function TextNumberLabel(props: TextNumberLabelProps) {
  const { numberValue, textLabel, col, size, color = "" } = props;
  const isLoading: boolean | undefined = props?.isLoading;

  const flexDirectionBasedOnCol = col
    ? "flex-col items-center"
    : "flex-row gap-1 items-end";
  const isLarge = size === "large";

  return (
    <div className={`flex ${flexDirectionBasedOnCol} justify-center`}>
      <p
        className={`text-${isLarge ? "2xl" : "xl"} font-semibold text-${color}-900`}
      >
        {isLoading ? <SpinnerMini /> : numberValue}
      </p>{" "}
      <p className={`text-[${isLarge ? "18px" : "13px"}]`}>{textLabel}</p>
    </div>
  );
}
