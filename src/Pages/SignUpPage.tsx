import Image from "../Components/Image";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Form from "../Components/Form";
import TextLink from "../Components/TextLink";
import TextLogo from "../Components/TextLogo";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const SignUpSchema = z
  .object({
    email: z.email().nonempty(),
    password: z
      .string()
      .min(8, "Password should not atleast be 8 characters long")
      .max(30, "Password should not be over 20 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password should not atleast be 8 characters long")
      .max(30, "Password should not be over 20 characters long"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Password is not matched",
    path: ["confirmPassword"],
  });

export type SubmittedSignUpData = z.infer<typeof SignUpSchema>;

export default function SignInPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<SubmittedSignUpData>({
    resolver: zodResolver(SignUpSchema),
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<SubmittedSignUpData> = () => {
    //===============================================
    //logic for creating account here...............
    //===============================================
    navigate("/home");
  };

  return (
    <div className=" h-screen w-full place-content-center">
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
        ></Input>
        <Input
          inputName="password"
          type="password"
          register={register}
          error={errors?.password?.message}
        ></Input>
        <Input
          inputName="confirmPassword"
          type="password"
          register={register}
          error={errors?.confirmPassword?.message}
        ></Input>
        <Button>Sign Up</Button>
        <TextLink to="/signin">Have an account?</TextLink>
      </Form>
    </div>
  );
}
