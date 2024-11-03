import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="h-20 w-full bg-black flex items-center justify-between px-6">
        <div className="font-extrabold tracking-widest text-3xl uppercase bg-gradient-to-r from-emerald-700 to-slate-800 text-transparent bg-clip-text">
          Linker
        </div>
        <div className="flex  gap-10 text-white font-medium uppercase">
          <Link href="/">Home</Link>
          <Link href="/shortner">Shortner</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <div className="h-[1px] bg-emerald-900 mx-auto w-[95%]"></div>

    </>
  );
};

export default Navbar;
