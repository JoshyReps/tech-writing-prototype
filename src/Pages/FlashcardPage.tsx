import { useFlashcardPageData } from "../Features/FlashcardFeature/useFlashcardData";
import LoadingPage from "./LoadingPage";
import FlashcardScreen from "../Features/FlashcardFeature/FlashcardScreen";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FlashcardPage() {
  const { initialCards, isLoading, userCards } = useFlashcardPageData();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (initialCards.length === 0) {
        navigate("/home");
      }
    },
    [userCards, navigate, initialCards.length],
  );

  if (isLoading) return <LoadingPage />;

  return (
    <FlashcardScreen listOfCards={initialCards} userReviewCards={userCards} />
  );
}
