type FrontFlashcardButton = {
  type: "front";
  handleClick: () => void;
};

type BackFrontendButton = {
  type: "back";
  value: number;
  handleClick: (value: number) => void;
};

type FlashcardButtonProps = {
  backgroundColor: string;
  textValue: string;
  disabled?: boolean;
  subTextValue?: string;
} & (FrontFlashcardButton | BackFrontendButton);

export default function FlashcardButton(props: FlashcardButtonProps) {
  const {
    backgroundColor,
    textValue,
    type,
    handleClick,
    disabled = false,
  } = props;
  const tailwindStyleBasedOnType =
    type === "front" ? "text-white p-3" : "text-black p-1";

  if (type === "front") {
    return (
      <button
        className={`w-full ${backgroundColor} ${tailwindStyleBasedOnType} text-center text-xl font-bold shadow-md shadow-black/20 brightness-100 transition-all hover:cursor-pointer hover:brightness-120 active:brightness-40`}
        onClick={() => handleClick()}
        disabled={disabled}
      >
        <p>{textValue}</p>
      </button>
    );
  } else {
    const { value } = props;
    return (
      <button
        className={`w-full ${backgroundColor} ${tailwindStyleBasedOnType} relative py-1 text-center text-[16px] font-bold shadow-md shadow-black/20 brightness-100 transition-all hover:cursor-pointer hover:py-2 hover:text-[18px] hover:brightness-130 active:brightness-40`}
        onClick={() => handleClick(value)}
        disabled={disabled}
      >
        <p className="absolute top-0 left-1 text-[14px] opacity-60">{value}</p>
        <p>{textValue}</p>
      </button>
    );
  }
}
