import { useQuery } from "@tanstack/react-query";
import { getUserReviewCards } from "../../Services/getUserReviewCards";

export function useUserReviewFlashcards(userId: string) {
  const { data: userCards, isPending } = useQuery({
    queryKey: ["userCards", userId],
    queryFn: () => getUserReviewCards(userId),
  });

  return { userCards, isPending };
}
