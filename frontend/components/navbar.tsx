"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between z-10 items-center mt-4 mb-10 p-4 max-w-[1100px] w-full">
      <div className="flex items-center w-[200px] gap-2 hover:cursor-pointer text-3xl font-bold">
        <Image src="/download.png" alt="csprime logo" width={50} height={50} />
        CS Prime
      </div>
      <div>
        <ul className="flex gap-4 hidden md:flex">
          <Link href="/">
            <li className="hover:cursor-pointer">Home</li>
          </Link>
          <Link href="/modules">
            <li className="hover:cursor-pointer">Modules</li>
          </Link>
          <Link href="/topics">
            <li className="hover:cursor-pointer">Topics</li>
          </Link>
          <Link href="/analytics">
            <li className="hover:cursor-pointer">Analytics</li>
          </Link>
          <Link href="/chat">
            <li className="hover:cursor-pointer">Chat</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className="flex justify-around hidden md:flex gap-4 w-[200px]">
          <SignedOut>
            <li className="border-gray-400 border-1 py-2 px-4 text-center rounded-lg">
              <SignInButton />
            </li>
            <li className="bg-black text-white py-2 px-4 rounded-lg">
              <SignUpButton />
            </li>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ul>
      </div>
      <div className="text-3xl flex md:hidden">
        <span onClick={() => setIsOpen((prev) => !prev)}>
          <CiMenuBurger />
        </span>
      </div>
      <div
        className={`flex md:hidden p-8 ${
          !isOpen && "hidden"
        } fixed justify-between top-0 left-0 w-full bg-white`}
      >
        <ul className="flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <li className="hover:cursor-pointer">Home</li>
          </Link>
          <Link href="/modules" onClick={() => setIsOpen(false)}>
            <li className="hover:cursor-pointer">Modules</li>
          </Link>
          <Link href="/topics" onClick={() => setIsOpen(false)}>
            <li className="hover:cursor-pointer">Topics</li>
          </Link>
          <Link href="/analytics" onClick={() => setIsOpen(false)}>
            <li className="hover:cursor-pointer">Analytics</li>
          </Link>
          <Link href="/analytics" onClick={() => setIsOpen(false)}>
            <li className="hover:cursor-pointer">Chat</li>
          </Link>
          <li className="border-gray-400 border-1 py-2 px-4 rounded-lg">
            Login
          </li>
          <li className="bg-black text-white py-2 px-4 rounded-lg">Sign Up</li>
        </ul>
        <span className="text-4xl" onClick={() => setIsOpen((prev) => !prev)}>
          <IoIosClose />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
