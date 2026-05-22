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
} & (FrontFlashcardButton | BackFrontendButton);

export default function FlashcardButton(props: FlashcardButtonProps) {
  const { backgroundColor, textValue, type, handleClick } = props;
  const tailwindStyleBasedOnType =
    type === "front" ? "text-white p-3" : "text-black p-1";

  if (type === "front") {
    return (
      <button
        className={`w-full ${backgroundColor} ${tailwindStyleBasedOnType} text-center text-xl font-bold shadow-md shadow-black/20`}
        onClick={() => handleClick()}
      >
        {textValue}
      </button>
    );
  } else {
    const { value } = props;
    return (
      <button
        className={`w-full ${backgroundColor} ${tailwindStyleBasedOnType} text-center text-xl font-bold shadow-md shadow-black/20`}
        onClick={() => handleClick(value)}
      >
        {textValue}
      </button>
    );
  }
}
