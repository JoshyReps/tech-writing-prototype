import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { userReviewCards } from "../../Services/getUserReviewCards";
import setUserReviewCards from "../../Services/setUserReviewCard";

export function useSetUserReviewCard() {
  const queryClient = useQueryClient();

  const { mutate: updatedUserReview, isPending } = useMutation({
    mutationFn: (updatedCard: userReviewCards) =>
      setUserReviewCards(updatedCard),

    onSuccess: (_, updatedCard) => {
      queryClient.invalidateQueries({
        queryKey: ["userSets", updatedCard.user_id],
      });
    },
  });

  return { updatedUserReview, isPending };
}
