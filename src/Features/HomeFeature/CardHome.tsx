import { useNavigate } from "react-router-dom";
import TextNumberLabel from "./TextNumberLabelHome";

type cardType = {
  front: string;
  back: string;
  nextReviewDate: Date;
};

// Note : (Test Cards) - will be deleted eventually
const testCards: cardType[] = [
  {
    front: "It is the powerhouse of cell",
    back: "Mitosomething",
    nextReviewDate: new Date("5/21/2026"),
  },
  {
    front: "The strongest pokemon in existence",
    back: "Mewtwo",
    nextReviewDate: new Date("5/22/2026"),
  },
  {
    front:
      "The current president of the united states of america... lorem ipsum dolor, extra text to make a very complicated card... more more more more more, okay stop, just a little bit more maybe",
    back: "Donald Trump",
    nextReviewDate: new Date("5/21/2026"),
  },
];
// --------------------------------------------------------------------------------------

export default function CardHome() {
  const navigate = useNavigate();
  const currentDate = new Date();

  //Note : (Currently on TEST) Replace with actual number of deck
  const currentNumberOfSets: number = testCards.length;

  //Note : (Currently on TEST) Replace with number of cards due
  //Context : this code loops to all the cards and counts only the set with review date equal to now
  const currentDueSetCount: number = testCards.reduce((acc, card) => {
    const nextReviewDateTimestamp = card.nextReviewDate.setHours(0, 0, 0, 0); // keep just date
    const currentDateTimestamp = currentDate.setHours(0, 0, 0, 0); // keep just date

    return nextReviewDateTimestamp === currentDateTimestamp ? acc + 1 : acc; // compare dates
  }, 0);

  const handleRightSideClick = function () {
    // 1. Move to the flashcards page
    // 2. Pass the cards related to the set
    // 3/ Sem
    // Supposedly, we should pass the name of the set but in our case, since we only have one premade set, we don't have to worry about that
    navigate("/flashcard");
  };

  const handleLeftSideClick = function () {
    navigate("/setcards");
  };

  return (
    <ul className="shadow-in my-2 flex items-center justify-between border-2 border-x-0 border-amber-50 bg-linear-65 from-olive-100 to-olive-300 shadow-md shadow-black/20">
      <div className="w-full shrink py-3 pl-3" onClick={handleRightSideClick}>
        <h2 className="text-left text-xl">Text Cards</h2>
      </div>
      <div className="flex gap-3 py-3 pr-3" onClick={handleLeftSideClick}>
        <TextNumberLabel
          numberValue={currentNumberOfSets}
          textLabel="/Sets"
          col={false}
          size="small"
        />
        <TextNumberLabel
          numberValue={currentDueSetCount}
          textLabel="/Due"
          col={false}
          size="small"
        />
      </div>
    </ul>
  );
}
