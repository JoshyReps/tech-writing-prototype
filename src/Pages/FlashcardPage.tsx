import { useFlashcardPageData } from "../Features/FlashcardFeature/useFlashcardData";
import LoadingPage from "./LoadingPage";
import FlashcardScreen from "../Features/FlashcardFeature/FlashcardScreen";

export default function FlashcardPage() {
  const { initialCards, isLoading, userCards, userId } = useFlashcardPageData();

  if (isLoading) return <LoadingPage />;

  return (
    <FlashcardScreen
      listOfCards={initialCards}
      userReviewCards={userCards}
      userId={userId}
    />
  );
}
