import AuthForm from "@/components/auth/AuthForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="ms:mx-auto ms:w-full ms:max-w-md">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={48}
          height={48}
          className="w-auto mx-auto"
        ></Image>
      </div>
      <AuthForm></AuthForm>
    </div>
  );
}
