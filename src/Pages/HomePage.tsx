import TextNumberLabel from "../Features/HomeFeature/TextNumberLabelHome";
import CardHome from "../Features/HomeFeature/CardHome";

export default function HomePage() {
  const deckCount = 1; // Fixed Because we only have 1 premade flashcard

  return (
    <>
      <div className="flex items-center justify-between bg-olive-400 px-5 py-3 shadow-md shadow-black/15">
        <div className="text-2xl font-bold">My Flashcards</div>
        <div className="flex gap-3">
          <TextNumberLabel
            numberValue={deckCount}
            textLabel="Deck"
            col={true}
            size="large"
          />
        </div>
      </div>

      <li>
        {/* The premade flashcard */}
        <CardHome />
      </li>
    </>
  );
}
