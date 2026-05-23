// Features/FlashcardFeature/useFlashcardPageData.ts
import { useUser } from "../Authentication/useUser";
import { useUserReviewFlashcards } from "./useUserReviewFlashcard";
import { useCards } from "./useCards";
import { useCreatNewReviews } from "./useCreateNewReviews";
import { useEffect, useRef } from "react";

export function useFlashcardPageData() {
  const { user, isPending: userPending } = useUser();
  const userId = user?.id || "";

  const { userCards, isPending: reviewCardsPending } =
    useUserReviewFlashcards(userId);
  const { cards: premadeCards, isPending: premadeCardsPending } = useCards();
  const { initializeUserCards, isPending: createUserReviewCardsPending } =
    useCreatNewReviews(userId);

  const didInitialize = useRef(false);

  const isLoading =
    userPending ||
    reviewCardsPending ||
    premadeCardsPending ||
    createUserReviewCardsPending;

  const accountNewlyCreated = userCards && userCards.length <= 0;

  useEffect(() => {
    if (
      accountNewlyCreated &&
      !createUserReviewCardsPending &&
      premadeCards &&
      !didInitialize.current
    ) {
      didInitialize.current = true;

      const newReviewSetToDefaultValues = premadeCards.map((el) => ({
        cardId: el.id,
        user_id: userId,
        interval: 0,
        easiness: 2.5,
        repetitions: 0,
        reviewDate: new Date().toISOString(),
      }));

      if (newReviewSetToDefaultValues.length > 0) {
        initializeUserCards(newReviewSetToDefaultValues);
      }
    }
  }, [
    accountNewlyCreated,
    createUserReviewCardsPending,
    premadeCards,
    userId,
    initializeUserCards,
  ]);

  const userDueCards = premadeCards?.filter((el) => {
    const hasReviewCard = userCards?.find((useEl) => useEl.cardId == el.id);
    if (!hasReviewCard) return false;

    const currentDate = new Date();
    const nextReviewDate = new Date(hasReviewCard.reviewDate);

    const nextReviewDateTimestamp = nextReviewDate.setHours(0, 0, 0, 0);
    const currentDateTimestamp = currentDate.setHours(0, 0, 0, 0);

    const reviewdCardDueToday = nextReviewDateTimestamp <= currentDateTimestamp;
    const intervalIsZero = hasReviewCard.interval === 0;

    return reviewdCardDueToday || intervalIsZero;
  });

  const initialCards = userDueCards || [];

  return {
    initialCards,
    isLoading,
    userCards,
    userId,
    premadeCards,
  };
}
