import { useNavigate } from "react-router-dom";
import TextNumberLabel from "./HomeTextNumberLabel";
import { useFlashcardPageData } from "../FlashcardFeature/useFlashcardData";
import toast from "react-hot-toast";

export default function CardHome() {
  const { initialCards, isLoading, premadeCards } = useFlashcardPageData();

  const navigate = useNavigate();

  // Number of Cards in the Premade Test Set
  const currentNumberOfSets: number = premadeCards?.length || 0;

  // Number of Due Cards in the Premade Test Set based on the current user
  const currentDueSetCount: number = initialCards?.length || 0;

  const handleRightSideClick = function () {
    const doesNotHaveDueDate = currentDueSetCount === 0;
    if (doesNotHaveDueDate) {
      toast.error("You currently have no Due Card");
    } else {
      navigate("/flashcard");
    }
  };

  const handleLeftSideClick = function () {
    navigate("/setcards");
  };

  return (
    <ul className="shadow-in hover:primary hover:outline-primary my-2 flex items-center justify-between border-2 border-x-0 border-amber-50 bg-linear-65 from-olive-100 to-olive-300 shadow-md shadow-black/20 outline-2 outline-white/0 transition-all hover:cursor-pointer hover:from-olive-50 hover:to-olive-200">
      <div
        className="hover:cursor-pointe hover:text-primary w-full shrink py-3 pl-3"
        onClick={handleRightSideClick}
      >
        <h2 className="text-left text-xl">Text Cards</h2>
      </div>
      <div
        className="over flex h-auto gap-3 rounded-tl-full rounded-bl-full bg-olive-400/60 px-10 py-3 pr-3 shadow-sm shadow-black/30 transition-all hover:bg-olive-500/70 hover:px-12"
        onClick={handleLeftSideClick}
      >
        <TextNumberLabel
          color="blue"
          numberValue={currentNumberOfSets}
          textLabel="/Cards"
          col={false}
          size="small"
          isLoading={isLoading}
        />
        <TextNumberLabel
          color="red"
          numberValue={currentDueSetCount}
          textLabel="/Due"
          col={false}
          size="small"
          isLoading={isLoading}
        />
      </div>
    </ul>
  );
}
