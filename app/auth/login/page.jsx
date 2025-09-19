import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#F4F4F4] dark:bg-[#3c3c3c] p-10 flex items-center">
      <Image
        src="/Group.svg"
        alt="Group Image"
        width={500}
        height={500}
        className="hidden md:block md:w-[400px] lg:w-[500px]"
      />
      <div className="lg:fixed lg:right-10 min-w-[240px] md:min-w-[540px] lg:min-w-[760px] bg-background rounded-3xl p-4 md:p-10 shadow-lg">
        <div className="text-2xl md:text-4xl ">
          Welcome to <br />
          <span className="font-extrabold text-[var(--color-primary)]">
            Unstop
          </span>
        </div>
        <div className="flex flex-col my-4 gap-2 md:gap-4">
          <button className="w-full border-[1px] border-gray-300 dark:border-gray-700 shadow-[0px_0px_2px_4px_rgba(0,0,0,0.03)] dark:shadow-[0px_0px_2px_4px_rgba(255,255,255,0.03)] py-2 md:py-3 text-base rounded-2xl flex items-center justify-center gap-2 cursor-pointer">
            <Image src="/google.svg" width={30} height={30} alt="Google Icon" />
            <span>Login with Google</span>
          </button>
          <button className="w-full border-[1px] border-gray-300 dark:border-gray-700 shadow-[0px_0px_2px_4px_rgba(0,0,0,0.03)] dark:shadow-[0px_0px_2px_4px_rgba(255,255,255,0.03)] py-2 md:py-3 text-base rounded-2xl flex items-center justify-center gap-2 cursor-pointer">
            <Image
              src="/facebook.svg"
              width={30}
              height={30}
              alt="Facebook Icon"
            />
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
          <span className="mr-1">Dont have an account?</span>
          <span className="text-[var(--color-primary)] cursor-pointer">
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
