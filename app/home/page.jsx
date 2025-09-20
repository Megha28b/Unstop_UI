"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-y-auto">
      <div className="flex flex-col gap-20">
        <div className="text-4xl text-center">
          Welcome to <br />
          <span className="font-extrabold text-[var(--color-primary)]">
            Unstop
          </span>
        </div>
        <div className="flex flex-col py-4 px-6 rounded-lg shadow-[0px_0px_3px_6px_rgba(0,0,0,0.03)] dark:shadow-[0px_0px_3px_6px_rgba(255,255,255,0.03)] items-center gap-3">
          <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
            <Image src="/dummy.jpg" alt="Profile" width={100} height={100} />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="text-[var(--color-primary)] text-base font-bold">
              Michael Dam
            </div>
            <div className="text-xs">Example.com</div>
            <div className="text-xs">Female</div>
          </div>
          <button
            className="p-2 w-[160px] rounded-2xl mt-2 border-0 bg-[var(--color-primary)] text-white cursor-pointer"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
