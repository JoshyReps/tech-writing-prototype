import FlashcardButton from "./FlashcardButton";
import type { Card } from "../../Services/getCards";
import Spinner from "../../Components/Spinner";
import supermemo from "../../Helper/sm-2";
import type { userReviewCards } from "../../Services/getUserReviewCards";
import { useSetUserReviewCard } from "./useSetUserReviewCard";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface FlashcardBackProps {
  setCardsHandler: (updatedCards: Card[]) => void;
  backMessage: string | undefined;
  handleShowFront: () => void;
  listOfCards: Card[];
  currentCard: Card | undefined;
  userReviewCards: userReviewCards[] | undefined;
  userId: string | undefined;
}

export default function FlashcardBack({
  setCardsHandler,
  backMessage,
  handleShowFront,
  currentCard,
  listOfCards,
  userReviewCards,
}: FlashcardBackProps) {
  const { updatedUserReview, isPending: updateUserReviewPending } =
    useSetUserReviewCard();
  const navigate = useNavigate();

  function responseHandlerSM2(value: number) {
    // 0. If card has a property called `hasBeenReviwed` then move to step 4
    if (!currentCard) return;

    if (!currentCard?.hasBeenReviewed) {
      const reviewItem = {
        interval: 0,
        repetition: 0,
        efactor: 2.5,
      };

      // 1. We get the current user's review on the card
      const userReviewOfCard = userReviewCards?.find(
        (reviewCard) => currentCard?.id == reviewCard.cardId,
      );

      if (!userReviewOfCard) return;

      reviewItem.interval = userReviewOfCard.interval;
      reviewItem.repetition = userReviewOfCard.repetitions;
      reviewItem.efactor = userReviewOfCard.easiness;

      // 2. Run the SM-2 and Get the response
      const result = supermemo(reviewItem, value);

      // 3. update it to the current user's review of that card
      userReviewOfCard.interval = result.interval;
      userReviewOfCard.repetitions = result.repetition;
      userReviewOfCard.easiness = result.efactor;
      userReviewOfCard.reviewDate = result.review_datetime;

      updatedUserReview(userReviewOfCard);
    }

    let updatedList: Card[];
    if (value >= 4) {
      // 4. If the response value is greater than or equal to 4
      // • Remove the card from the list by creating a new one `updatedList`
      updatedList = [...listOfCards].slice(1);
    } else {
      // 5. If the repsonse value is not greater than 4
      // • Move the card to the end of the list
      // • Add a property called `hasBeenReviewed`
      const updatedCurrentCard: Card = {
        id: currentCard.id,
        front: currentCard.front,
        back: currentCard.back,
        hasBeenReviewed: true,
      };

      updatedList = [...listOfCards.slice(1), updatedCurrentCard];
    }

    if (updatedList.length === 0) {
      // 6. If the list of cards still has an element
      // • Set the list of card to the `updatedList`
      toast.success("Successfully Completed Session");
      navigate("/home");
    } else {
      // 7. If the list does not have an element
      // • Navigate back to home
      console.log("reached?");
      setCardsHandler(updatedList);
      handleShowFront();
    }
  }

  if (updateUserReviewPending)
    <div className="fixed top-0 left-0 z-20 h-full w-full">
      <div className="grid h-50 w-full place-content-center bg-olive-500">
        <Spinner />
        <h1>Processing Response...</h1>
      </div>
    </div>;

  return (
    <div
      className="flex w-full flex-col justify-around gap-5 py-5"
      key={currentCard?.id}
    >
      <div className="shaodw-md grid h-65 w-full place-content-center bg-white p-5 text-center text-xl font-semibold shadow-black/20">
        {backMessage}
      </div>
      <div className="space-around flex flex-col gap-3">
        <FlashcardButton
          backgroundColor="bg-green-500"
          type="back"
          value={5}
          textValue="5"
          handleClick={responseHandlerSM2}
        />
        <FlashcardButton
          backgroundColor="bg-green-300"
          type="back"
          value={4}
          textValue="4"
          handleClick={responseHandlerSM2}
        />

        <FlashcardButton
          backgroundColor="bg-green-200"
          type="back"
          value={3}
          textValue="3"
          handleClick={responseHandlerSM2}
        />

        <FlashcardButton
          backgroundColor="bg-yellow-300"
          type="back"
          value={2}
          textValue="2"
          handleClick={responseHandlerSM2}
        />

        <FlashcardButton
          backgroundColor="bg-orange-400"
          type="back"
          value={1}
          textValue="1"
          handleClick={responseHandlerSM2}
        />

        <FlashcardButton
          backgroundColor="bg-red-400"
          type="back"
          value={0}
          textValue="0"
          handleClick={responseHandlerSM2}
        />

        <FlashcardButton
          backgroundColor="bg-olive-500"
          type="front"
          textValue="Show Front"
          handleClick={handleShowFront}
        />
      </div>
    </div>
  );
}
