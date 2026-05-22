import supabase from "./supabase";

export type Card = {
  id: number;
  front: string;
  back: string;
  hasBeenReviewed?: boolean;
};

export async function getCards() {
  const { data: cards, error } = await supabase.from("card").select("*");

  if (error) throw new Error(error.message);

  return cards as Card[];
}
