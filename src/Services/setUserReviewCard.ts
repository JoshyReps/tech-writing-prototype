import supabase from "./supabase";

import type { userReviewCards } from "./getUserReviewCards";

export default async function setUserReviewCards(
  updatedUserReviewCards: userReviewCards,
) {
  const { data, error } = await supabase
    .from("userReviewedCards")
    .update({
      easiness: updatedUserReviewCards.easiness,
      interval: updatedUserReviewCards.interval,
      repetitions: updatedUserReviewCards.repetitions,
      reviewDate: updatedUserReviewCards.reviewDate,
    })
    .eq("cardId", updatedUserReviewCards.cardId)
    .eq("user_id", updatedUserReviewCards.user_id)
    .select()
    .single();

  return { data, error };
}
