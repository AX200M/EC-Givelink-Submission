import axios from "axios";
import Image from "next/image";
import React from "react";
import Products from "./components/API";

export default function Home() {
  return (
    <div className="bg-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center justify-self-center">
        <div className="py-10">
          <h1 className="text-black text-6xl font-bold text-center">
            Givelink Interview<br></br>
          </h1>
          <h2 className="text-center text-5xl text-black">
            <br></br>
            Coded By Evangelos Colombus
          </h2>
        </div>
      </main>
      <Products/>
    </div>
  );
}
