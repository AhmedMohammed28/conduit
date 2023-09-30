import RegisterForm from "@/components/auth/RegisterForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const RegisterPage = () => {
  return <RegisterForm />;
};
export default RegisterPage;
