"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RootRedirect() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated === true) {
      router.replace("/home");
    } else if (isAuthenticated === false) {
      router.replace("/auth/login");
    }
  }, [isAuthenticated, router]);

  return null;
}
