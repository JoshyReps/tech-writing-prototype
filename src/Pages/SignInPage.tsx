import Image from "../Components/Image";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Form from "../Components/Form";
import TextLink from "../Components/TextLink";
import TextLogo from "../Components/TextLogo";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const SignInSchema = z.object({
  email: z.email().nonempty(),
  password: z.string(),
});

export type SubmittedSignInData = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<SubmittedSignInData>({
    resolver: zodResolver(SignInSchema),
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<SubmittedSignInData> = () => {
    //===============================================
    //logic for authentication here...............
    //===============================================
    navigate("/home");
  };

  const onError: SubmitErrorHandler<SubmittedSignInData> = (error) => {
    console.log(error);
  };

  return (
    <div className="h-screen w-full place-content-center">
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onError={onError}>
        <div className="flex h-25 w-25 flex-col items-center justify-center gap-2">
          <Image src="/logo.svg" alt="logo" bg={true} />
          <TextLogo />
        </div>
        <Input
          inputName="email"
          type="text"
          register={register}
          error={errors?.email?.message}
        ></Input>
        <Input
          inputName="password"
          type="password"
          register={register}
          error={errors?.password?.message}
        ></Input>
        <Button>Sign In</Button>
        <TextLink to="/signup">Don't have an Account?</TextLink>
      </Form>
    </div>
  );
}
