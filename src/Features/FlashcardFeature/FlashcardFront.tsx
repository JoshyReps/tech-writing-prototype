import FlashcardButton from "./FlashcardButton";

interface FlashcardFrontProps {
  handleShowBack: () => void;
  frontMessage: string | undefined;
}

export default function FlashcardFront({
  frontMessage,
  handleShowBack,
}: FlashcardFrontProps) {
  function handleClickShowBack() {
    handleShowBack();
  }

  return (
    <div className="flex h-[70vh] w-full flex-col justify-around">
      <div className="shaodw-md grid h-65 w-full place-content-center bg-white p-5 text-center text-xl font-semibold shadow-black/20">
        {frontMessage}
      </div>

      <FlashcardButton
        backgroundColor="bg-olive-500"
        type="front"
        textValue={"Show Back"}
        handleClick={handleClickShowBack}
      />
    </div>
  );
}
