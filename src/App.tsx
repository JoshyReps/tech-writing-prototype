import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";
import FlashcardPage from "./Pages/FlashcardPage";
import SetCardsPages from "./Pages/SetCardsPages";
import ErrorPage from "./Pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import ProtectedRoute from "./Features/Authentication/ProtectedRoute";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
// Setting up React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 10,
    },
  },
});
// --------------------------

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SkeletonTheme baseColor="#7a7a7a" highlightColor="#aaaaaa">
        <BrowserRouter>
          <Routes>
            <Route path="signin" element={<SignInPage />} />
            {/* <Route path="signup" element={<SignUpPage />} /> Removed For Simplicity Sake */}
            <Route index element={<Navigate replace to="signin" />} />
            <Route path="*" element={<ErrorPage />} />
            <Route
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route path="home" element={<HomePage />} />
              <Route path="flashcard" element={<FlashcardPage />} />
              <Route path="setcards" element={<SetCardsPages />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            maxWidth: "400px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  );
}
