import type { userReviewCards } from "./getUserReviewCards";
import supabase from "./supabase";

export async function createUserReviewCards(newCards: userReviewCards[]) {
  const { data, error } = await supabase
    .from("userReviewedCards")
    .insert(newCards)
    .select();

  if (error) throw new Error(error.message);
  return data;
}
