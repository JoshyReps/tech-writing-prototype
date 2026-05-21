import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import FlashcardPage from "./Pages/FlashcardPage";
import SetCardsPages from "./Pages/SetCardsPages";

import "./index.css";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route index element={<Navigate replace to="signin" />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="flashcard" element={<FlashcardPage />} />
        <Route path="setcards" element={<SetCardsPages />} />
      </Routes>
    </BrowserRouter>
  );
}
