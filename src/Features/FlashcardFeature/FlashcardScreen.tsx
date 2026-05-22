import FlashcardFront from "./FlashcardFront";
import FlashcardBack from "./FlashcardBack";
import { useState } from "react";
import type { Card } from "../../Services/getCards";
import type { userReviewCards } from "../../Services/getUserReviewCards";

interface FlashCardScreenProps {
  listOfCards: Card[];
  userReviewCards: userReviewCards[] | undefined;
  userId: string | undefined;
}

export default function FlashcardScreen({
  listOfCards,
  userReviewCards,
  userId,
}: FlashCardScreenProps) {
  const [cards, setCards] = useState<Card[]>(listOfCards);

  const currentCard = cards.at(0);
  const [showBack, setShowBack] = useState<boolean>(false);

  function showFrontHandler() {
    setShowBack(false);
  }

  function showBackHandler() {
    setShowBack(true);
  }

  function setCardsHandler(updatedCards: Card[]) {
    setCards(updatedCards);
  }

  return (
    <>
      {showBack ? (
        <FlashcardBack
          backMessage={currentCard?.back}
          setCardsHandler={setCardsHandler}
          handleShowFront={showFrontHandler}
          currentCard={currentCard}
          listOfCards={cards}
          userReviewCards={userReviewCards}
          userId={userId}
        />
      ) : (
        <FlashcardFront
          frontMessage={currentCard?.front}
          handleShowBack={showBackHandler}
        />
      )}
    </>
  );
}
