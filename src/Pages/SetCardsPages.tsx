import { useFlashcardPageData } from "../Features/FlashcardFeature/useFlashcardData";
import shortenText from "../Helper/ShortenText";
import SetCardRow from "../Features/SetCardsFeature/SetCardRow";
import SetCardHeader from "../Features/SetCardsFeature/SetCardHeader";
import BackContainer from "../Components/BackContainer";
import formatDate from "../Helper/FormatDate";
import SetCardSkeleton from "../Features/SetCardsFeature/SetCardSkeleton";

export default function SetCardsPages() {
  const { userCards, isLoading, premadeCards } = useFlashcardPageData();

  function findCardBack(cardId: number) {
    const card = premadeCards?.find((card) => card.id === cardId);
    const cardBackText = card?.back || "Unknown Card";
    const shortenCardBackText = shortenText(cardBackText);
    return shortenCardBackText;
  }

  return (
    <div className="w-full">
      <BackContainer addPaginationLabel={false} />
      <SetCardHeader left="Card Front" right="Next Due Date" />
      <div className="flex w-full flex-col gap-2 py-2">
        {isLoading ? (
          <SetCardSkeleton cards={7} />
        ) : (
          userCards?.map((card) => (
            <SetCardRow
              key={card.cardId}
              left={findCardBack(card.cardId)}
              right={formatDate(card.reviewDate)}
            />
          ))
        )}
      </div>
    </div>
  );
}
