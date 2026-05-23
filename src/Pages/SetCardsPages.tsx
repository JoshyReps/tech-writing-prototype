import { useFlashcardPageData } from "../Features/FlashcardFeature/useFlashcardData";
import LoadingPage from "./LoadingPage";
import shortenText from "../Helper/ShortenText";
import SetCardRow from "../Features/SetCardsFeature/SetCardRow";
import SetCardHeader from "../Features/SetCardsFeature/SetCardHeader";
import BackContainer from "../Components/BackContainer";

export default function SetCardsPages() {
  const { userCards, isLoading, premadeCards } = useFlashcardPageData();

  if (isLoading) return <LoadingPage />;

  function findCardBack(cardId: number) {
    const card = premadeCards?.find((card) => card.id === cardId);
    const cardBackText = card?.back || "Unkown Card";
    const shortenCardBackText = shortenText(cardBackText);
    return shortenCardBackText;
  }

  return (
    <div className="w-full">
      <BackContainer addPaginationLabel={false} />
      <SetCardHeader left="Card Front" right="Due Date" />
      <div className="flex flex-col gap-2 py-2">
        {userCards?.map((card) => (
          <SetCardRow
            left={findCardBack(card.cardId)}
            right={card.reviewDate}
          />
        ))}
      </div>
    </div>
  );
}
