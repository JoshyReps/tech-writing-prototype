import type { Card } from "../../Services/getCards";
import FlashcardButton from "./FlashcardButton";

interface FlashCardNextRoundProps {
  initialLength: number;
  incorrectCardList: Card[];
  handleNextRound: () => void;
}

export default function FlashcardNextRound({
  initialLength,
  incorrectCardList,
  handleNextRound,
}: FlashCardNextRoundProps) {
  const numberOfCorrectRecall = initialLength - incorrectCardList.length;
  const numberOfIncorrectRecall = incorrectCardList.length;
  const correctRecallInPercetange = Math.round(
    (numberOfCorrectRecall / initialLength) * 100,
  );

  const color = correctRecallInPercetange >= 50 ? "green" : "red";

  return (
    <div className="flex h-[50vh] w-full flex-col justify-between">
      <div className="flex items-center justify-between bg-olive-300 bg-linear-65 from-olive-200 to-olive-100 px-5 py-5 shadow-md shadow-black">
        <div className="flex flex-col items-center justify-start text-left">
          <p className="text-2xl font-semibold text-green-800">
            {numberOfCorrectRecall}
          </p>
          <p className="opacity-50">Right</p>
        </div>
        <div className="grid place-content-center pl-5">
          <h2 className={`text-5xl font-bold text-${color}-700`}>
            {correctRecallInPercetange}
            <span className="text-[16px] opacity-50">%</span>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-end text-right">
          <p className="text-2xl font-semibold text-red-800">
            {numberOfIncorrectRecall}
          </p>
          <p className="opacity-50">Wrong</p>
        </div>
      </div>
      <div>
        <p className="p-5 py-2 text-center text-[18px] italic opacity-50">
          Correct your mistakes. *The next part will not be recorded*
        </p>
        <FlashcardButton
          backgroundColor="bg-olive-500"
          type="front"
          textValue="Next Round"
          handleClick={handleNextRound}
        />
      </div>
    </div>
  );
}
