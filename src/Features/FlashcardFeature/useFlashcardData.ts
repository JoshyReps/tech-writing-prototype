// Features/FlashcardFeature/useFlashcardPageData.ts
import { useUser } from "../Authentication/useUser";
import { useUserReviewFlashcards } from "./useUserReviewFlashcard";
import { useCards } from "./useCards";
import type { Card } from "../../Services/getCards";

export function useFlashcardPageData() {
  const { user, isPending: userPending } = useUser();
  const userId = user?.id || "";
  const { userCards, isPending: reviewCardsPending } =
    useUserReviewFlashcards(userId);
  const { cards: premadeCards, isPending: premadeCardsPending } = useCards();

  const isLoading = userPending || reviewCardsPending || premadeCardsPending;

  const currentDate = new Date("5/23/2026");
  let initialCards: Card[];

  const hasAlreadyReviewedOnce = userCards && userCards.length > 0;
  if (hasAlreadyReviewedOnce) {
    const userDueCards = premadeCards?.filter((el) => {
      const hasReviewCard = userCards?.find((useEl) => useEl.cardId == el.id);

      if (!hasReviewCard) return false;
      const nextReviewDate = new Date(hasReviewCard.reviewDate);

      const nextReviewDateTimestamp = nextReviewDate.setHours(0, 0, 0, 0); // keep just date
      const currentDateTimestamp = currentDate.setHours(0, 0, 0, 0); // keep just date
      const reviewdCardDueToday =
        nextReviewDateTimestamp === currentDateTimestamp; // compare data
      const intervalIsZero = hasReviewCard.interval === 0;
      return hasReviewCard && (reviewdCardDueToday || intervalIsZero);
    });
    initialCards = userDueCards || [];
  } else {
    initialCards = premadeCards || [];
  }

  console.log(initialCards, " from useFlashcardData");

  return {
    initialCards,
    isLoading,
    userCards,
    userId,
  };
}
