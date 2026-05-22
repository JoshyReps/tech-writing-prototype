import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  login as loginAPi,
  type loginCredentials,
} from "../../Services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: ({ email, password }: loginCredentials) =>
      loginAPi({ email, password }),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      navigate("/home", { replace: true });
    },
  });

  return { login, isPending };
}
