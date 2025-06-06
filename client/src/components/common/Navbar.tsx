"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from '../../../public/logo.png'
import { useRouter } from "next/navigation";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const router = useRouter()
  return (
    <div className="bg-black flex items-center py-6 px-4 justify-between w-full text-white">
      <div className="flex items-center gap-2">
        <Image src={logo} alt='logo' width={24} height={24}/>
        <div className="font-semibold text-sm italic">Tech Dhundo</div>
      </div>

      <div className="flex items-center gap-10 font-semibold text-sm">
        <div>Home</div>
        <div>Pricing</div>
        <div>About Us</div>
      </div>

      <div className="flex items-center gap-3">
        <button className="border cursor-pointer border-gray-500 px-4 py-2 rounded-sm text-sm" onClick={()=>{router.push('/auth/login')}}>Log In</button>
        <button className="px-6 py-3 cursor-pointer rounded-sm text-sm font-semibold bg-blue-800" onClick={()=>{router.push('/auth/login')}}>Sign Up</button>
      </div>
    </div>
  );
}
