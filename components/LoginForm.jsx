"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setValidation((prevValidation) => {
      let isValid = null;

      if (id === "email") {
        isValid = value === "" ? null : emailRegex.test(value);
      }

      if (id === "password") {
        isValid = value === "" ? null : value.length >= 8;
      }

      if (id === "username") {
        isValid = value === "" ? null : value.toLowerCase() === "emilys";
      }

      return {
        ...prevValidation,
        [id]: isValid,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = Object.values(validation).every((v) => v === true);

    if (!isFormValid) {
      toast.error("Please fill all the fields correctly to Login.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    const dataToSubmit = {
      username: formData.username.toLowerCase(),
      password: "emilyspass",
      ...(formData.email && { email: formData.email }),
    };
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result?.message || "Login failed", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return;
      }

      login(result.accessToken);
      router.push("/home");
    } catch (error) {
      toast.error("An error occurred, please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="w-full bg-[#f4f4f4] dark:dark:bg-[#3c3c3c] rounded-2xl flex gap-2 items-center py-1 px-2">
          <Image
            src="/account_circle.svg"
            alt="User Icon"
            width={25}
            height={25}
            className="mr-1 md:mr-3"
          />
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-0.5 md:mb-2 block"
              htmlFor="username"
            >
              User name
            </label>
            <input
              id="username"
              type="text"
              className="w-full bg-transparent outline-none font-bold"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>
        {validation.username === false && (
          <span className="text-red-500 px-2 text-xs -mt-2 flex gap-1 items-center">
            <IoInformationCircleOutline />
            Invalid Username
          </span>
        )}{" "}
        {validation.username === true && (
          <span className="text-green-500 px-2 text-xs -mt-2 flex gap-1 items-center">
            <FaRegCheckCircle />
            Valid Username!
          </span>
        )}{" "}
        <div className="w-full bg-[#f4f4f4] dark:dark:bg-[#3c3c3c] rounded-2xl flex gap-4 items-center py-1 px-2">
          <Image
            src="/mail.svg"
            alt="Email"
            width={25}
            height={25}
            className="mr-1 md:mr-3"
          />
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-0.5 block"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              className="w-full bg-transparent outline-none font-bold"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        {validation.email === false && (
          <span className="text-red-500 px-2 text-xs -mt-2 flex gap-1 items-center">
            <IoInformationCircleOutline />
            Invalid Email
          </span>
        )}{" "}
        {validation.email === true && (
          <span className="text-green-500 px-2 text-xs -mt-2 flex gap-1 items-center">
            <FaRegCheckCircle />
            Email verified!
          </span>
        )}{" "}
        <div className="w-full bg-[#f4f4f4] dark:dark:bg-[#3c3c3c] rounded-2xl flex gap-2 items-center py-1 px-2">
          <Image
            src="/key.svg"
            alt="Password"
            width={25}
            height={25}
            className="mr-1 md:mr-3"
          />
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-0.5 block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type={isVisible ? "text" : "password"}
              className="w-full bg-transparent outline-none font-bold"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Image
            src="/visibility.svg"
            alt="visible"
            width={25}
            height={25}
            className="ml-auto cursor-pointer"
            onClick={() => setIsVisible((prev) => !prev)}
          />
        </div>
        {validation.password === false && (
          <span className="text-red-500 px-2 text-xs -mt-2 flex gap-1 items-center">
            <IoInformationCircleOutline /> Password must be 8 characters long.
          </span>
        )}{" "}
        {validation.password === true && (
          <span className="text-green-500 px-2 text-xs -mt-2 flex gap-1 items-center">
            <FaRegCheckCircle />
            Valid Password Format!
          </span>
        )}{" "}
        <div className="flex justify-between">
          <div className="text-xs md:text-sm flex gap-1 md:gap-2 items-center ">
            <input type="checkbox" className="bg-[#e5e5e5] h-3 w-3" />
            <label>Remember me</label>
          </div>
          <Link
            href="/"
            className="text-xs  md:text-sm text-[var(--color-primary)]"
          >
            Forgot Password ?
          </Link>
        </div>
      </div>
      <button
        type="submit"
        className="py-4 w-full rounded-lg mt-4 border-0 bg-[var(--color-primary)] text-white cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
