import FlashcardFront from "./FlashcardFront";
import FlashcardBack from "./FlashcardBack";
import { useState } from "react";
import type { Card } from "../../Services/getCards";
import type { userReviewCards } from "../../Services/getUserReviewCards";
import BackContainer from "../../Components/BackContainer";

interface FlashCardScreenProps {
  listOfCards: Card[];
  userReviewCards: userReviewCards[] | undefined;
}

export default function FlashcardScreen({
  listOfCards,
  userReviewCards,
}: FlashCardScreenProps) {
  const [cards, setCards] = useState<Card[]>(listOfCards);
  const [initialLength, setInitialLength] = useState<number>(
    listOfCards.length,
  );
  const [incorrectCards, setIncorrectCards] = useState<Card[]>([]);
  const currentCard = cards.at(0);
  const [showBack, setShowBack] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  function showFrontHandler() {
    setShowBack(false);
  }

  function showBackHandler() {
    setShowBack(true);
  }

  function setCardsHandler(updatedCards: Card[]) {
    setCards(updatedCards);
  }

  function setIncorrectCardsHandler(updatedIncorrectCards: Card[]) {
    setIncorrectCards(updatedIncorrectCards);
  }

  function setInitialLengthHandler(newLength: number) {
    setInitialLength(newLength);
  }

  function resetCurrentPage() {
    setCurrentPage(1);
  }

  function incrementCurrentPage() {
    setCurrentPage((currentValue) => currentValue + 1);
  }

  return (
    <>
      <BackContainer
        addPaginationLabel={true}
        currentPage={currentPage}
        initialLength={initialLength}
      />
      {showBack ? (
        <FlashcardBack
          backMessage={currentCard?.back}
          setCardsHandler={setCardsHandler}
          setIncorrectCardsHandler={setIncorrectCardsHandler}
          handleShowFront={showFrontHandler}
          currentCard={currentCard}
          listOfCards={cards}
          incorrectCards={incorrectCards}
          userReviewCards={userReviewCards}
          initialLength={initialLength}
          setInitialLengthHandler={setInitialLengthHandler}
          resetCurrentPage={resetCurrentPage}
          incrementCurrentPage={incrementCurrentPage}
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
