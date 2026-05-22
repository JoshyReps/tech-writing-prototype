import supabase from "./supabase";

export type userReviewCards = {
  id: number;
  user_id: string;
  cardId: number;
  interval: number;
  repetitions: number;
  easiness: number;
  reviewDate: string;
};

export async function getUserReviewCards(userId: string) {
  const { data: userReviewedCards, error } = await supabase
    .from("userReviewedCards")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return userReviewedCards as userReviewCards[];
}
