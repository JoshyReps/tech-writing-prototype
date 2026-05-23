// Features/Flashcards/useInsertUserReviewCards.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { userReviewCards } from "../../Services/getUserReviewCards";
import { toast } from "react-hot-toast";
import { createUserReviewCards } from "../../Services/createUserReviewCard";

export function useCreatNewReviews(userId: string) {
  const queryClient = useQueryClient();

  const { mutate: initializeUserCards, isPending } = useMutation({
    mutationFn: (newCards: userReviewCards[]) =>
      createUserReviewCards(newCards),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userCards", userId],
      });
    },

    onError: (err) => {
      toast.error(`Failed to initialize deck: ${err.message}`);
    },
  });

  return { initializeUserCards, isPending };
}
