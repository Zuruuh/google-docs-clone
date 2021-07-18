import Background from "../resources/background.png";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src={Background} height="300" width="550" objectFit="contain" />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </section>
  );
}

export default Login;
