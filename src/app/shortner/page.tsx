"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { StyledWrapper } from "@/components/LandigPage";
import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
const page = () => {
  const [url, seturl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [generated, setGenerated] = useState<string[]>([]);

  const generateFunction = async () => {
    try {
      const response = await axios.post("/api/generate", {
        url,
        shortUrl,
      });

      if (response.data.status === 200) {
        seturl("");
        setShortUrl("");
        alert(response.data.message);
        setGenerated([...generated, shortUrl]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen ">
        <div className="flex items-center justify-center w-full flex-col gap-10 mt-10">
          <StyledWrapper2>
            <input
              placeholder="Enter Your URL"
              className="input  px-10 pr-[7rem] py-2"
              name="url"
              type="text"
              onChange={(e) => seturl(e.target.value)}
              value={url}
            />
          </StyledWrapper2>
          <StyledWrapper2>
            <input
              placeholder="Enter Your Prefer URL"
              className="input px-10 pr-[7rem] py-2"
              name="shorturl"
              type="text"
              onChange={(e) => setShortUrl(e.target.value)}
              value={shortUrl}
            />
          </StyledWrapper2>
          <StyledWrapper>
            <button
              style={{
                borderRadius: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "17px",
              }}
              className="rounded-2xl"
              onClick={generateFunction}
            >
              Generate
            </button>
          </StyledWrapper>
        </div>
        {generated && (
          <>
            <div className="flex items-center justify-center w-full px-10 py-3 mx-auto ">
              <span className="text-2xl font-bold text-white">Your Links</span>
            </div>
            <div className="w-full flex items-center flex-col gap-2">
              <code className="text-white text-xl font-semibold mt-2">
                {generated.map((item, index) => (
                  <li key={index}>
                    <a href={item} target="_blank" rel="noopener noreferrer">
                      {item}
                    </a>
                  </li>
                ))}
              </code>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default page;

const StyledWrapper2 = styled.div`
  .input {
    background: linear-gradient(145deg, #2a2a2a, #3d3d3d);
    border: 2px solid #4a4a4a;
    outline: none;
    font-size: 16px;
    border-radius: 9999px;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3),
      0 2px 15px rgba(66, 133, 244, 0.1);
    color: #e1e1e1;
    transition: all 0.3s ease;
  }

  .input:focus {
    border-color: #4285f4;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(66, 133, 244, 0.2);
  }

  .input::placeholder {
    color: #808080;
  }
`;
