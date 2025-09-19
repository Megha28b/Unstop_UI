"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Spinner from "@/components/Spinner";

export default function HomeLayout({ children }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.replace("/auth/login");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated === true) {
    return <>{children}</>;
  }

  return <Spinner />;
}
