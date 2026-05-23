import Image from "../Components/Image";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Form from "../Components/Form";
import TextLogo from "../Components/TextLogo";
import { useForm, type SubmitHandler } from "react-hook-form";
import SpinnerMini from "../Components/SpinnerMini";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "../Features/Authentication/useLogin";
import { useEffect } from "react";
import { useUser } from "../Features/Authentication/useUser";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const SignInSchema = z.object({
  email: z.email().nonempty(),
  password: z.string(),
});

export type SubmittedSignInData = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, setError } =
    useForm<SubmittedSignInData>({
      resolver: zodResolver(SignInSchema),
    });
  const { login, isPending } = useLogin();
  const { isAuthenticated, isPending: userPending } = useUser();
  const { errors } = formState;

  const onSubmit: SubmitHandler<SubmittedSignInData> = async ({
    email,
    password,
  }) => {
    //===============================================

    //logic for authentication here...............
    try {
      await login({ email, password });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      setError("root", { message: "Incorrect username or password" });
    }
    //===============================================
  };

  useEffect(
    function () {
      if (isAuthenticated) navigate("/home");
    },
    [navigate, isAuthenticated],
  );

  if (userPending) return <LoadingPage />;

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <div className="flex h-25 w-25 flex-col items-center justify-center gap-2">
          <Image src="/logo.svg" alt="logo" bg={true} />
          <TextLogo />
        </div>
        <Input
          inputName="email"
          type="text"
          register={register}
          error={errors?.email?.message}
          disabled={isPending}
          // value="joshwareps@gmail.com"
        ></Input>
        <Input
          inputName="password"
          type="password"
          register={register}
          error={errors?.password?.message || errors?.root?.message}
          disabled={isPending}
          // value="qwerty"
        ></Input>
        <Button>{isPending ? <SpinnerMini /> : "Sign In"}</Button>
        {/* <TextLink to="/signup">Don't have an Account?</TextLink> Removed for Simplicity Sake */}
      </Form>
    </div>
  );
}
