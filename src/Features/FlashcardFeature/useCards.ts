import { useQuery } from "@tanstack/react-query";
import { getCards } from "../../Services/getCards";

export function useCards() {
  const { data: cards, isPending } = useQuery({
    queryKey: ["cards"],
    queryFn: () => getCards(),
  });

  return { cards, isPending };
}
