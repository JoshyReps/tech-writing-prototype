import { useEffect, type ReactNode } from "react";
import { useUser } from "./useUser";
import LoadingPage from "../../Pages/LoadingPage";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children?: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to /signin
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/signin");
    },
    [navigate, isAuthenticated, isPending],
  );

  // 3. While loading, show a spinner
  if (isPending) return <LoadingPage />;

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}
