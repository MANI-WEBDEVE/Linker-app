
"use client"
import Image from "next/image";
import React from "react";
import styled from "styled-components";
const LandigPage = () => {
  return (
    <div className="w-full h-screen bg-black grid grid-cols-2">
      <div className="flex flex-col mt-20  px-5">
        <h1 className="text-8xl font-bold uppercase bg-gradient-to-r from-emerald-700 to-slate-800 text-transparent bg-clip-text">
          Welcome to Linker
        </h1>
        <p className="text-white text-xl font-semibold mt-8 w-[70%]">
          Our Servise is free and most straightforward URL shortner in the world
        </p>
        <StyledWrapper>
      <button>Button</button>
    </StyledWrapper>
      </div>
      <div className=" flex justify-end items-start mt-10  w-full">
        <Image src={"/vector.png"} alt="vector" height={200} width={500} />
      </div>
    </div>
  );
};

export default LandigPage;

const StyledWrapper = styled.div`
    button {
    --color: #10B981;  /* Changed to emerald-500 to match gradient */
    font-family: inherit;
    display: inline-block;
    width: 6em;
    height: 2.6em;
    line-height: 2.5em;
    overflow: hidden;
    cursor: pointer;
    margin: 20px;
    font-size: 17px;
    z-index: 1;
    color: var(--color);
    border: 2px solid var(--color);
    border-radius: 6px;
    position: relative;
  }

  button::before {
    position: absolute;
    content: "";
    background: linear-gradient(to right, #047857, #1e293b); /* Match heading gradient */
    width: 150px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  button:hover {
    color: white;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  button:hover::before {
    top: -30px;
    left: -30px;
  }
`;