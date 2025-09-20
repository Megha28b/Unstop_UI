import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-[#F4F4F4] dark:bg-[#3c3c3c] p-8 px-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-y-auto">
      <Image
        src="/Group.svg"
        alt="Group Image"
        width={300}
        height={300}
        className="hidden md:block md:w-[350px] lg:w-[450px]"
      />
      <div className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[560px] bg-background rounded-3xl p-6 md:p-8 shadow-lg">
        <div className="text-2xl md:text-4xl mb-10">
          Welcome to <br />
          <span className="font-extrabold text-[var(--color-primary)]">
            Unstop
          </span>
        </div>
        <div className="flex flex-col my-3 gap-2">
          <button className="w-full border border-gray-300 dark:border-gray-700 shadow-[0px_0px_2px_4px_rgba(0,0,0,0.03)] dark:shadow-[0px_0px_2px_4px_rgba(255,255,255,0.03)] py-2 md:py-3 text-base rounded-2xl flex items-center justify-center gap-2 cursor-pointer">
            <Image src="/google.svg" width={24} height={24} alt="Google Icon" />
            <span>Login with Google</span>
          </button>
          <button className="w-full border border-gray-300 dark:border-gray-700 shadow-[0px_0px_2px_4px_rgba(0,0,0,0.03)] dark:shadow-[0px_0px_2px_4px_rgba(255,255,255,0.03)] py-2 md:py-3 text-base rounded-2xl flex items-center justify-center gap-2 cursor-pointer">
            <Image src="/facebook.svg" width={24} height={24} alt="Facebook Icon" />
            <span>Login with Facebook</span>
          </button>
        </div>
        <div className="relative my-4 md:my-8 flex items-center justify-center">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="absolute px-4 text-sm font-medium bg-background">
            OR
          </span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <LoginForm />
        <div className="text-sm mt-4 text-center">
          <span className="mr-1">Don’t have an account?</span>
          <span className="text-[var(--color-primary)] cursor-pointer">
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
