"use client";

import { useState } from "react";

export default function Home() {
  const [noText, setNoText] = useState("Harmaargui bn 💭");
  const [acceptedStep, setAcceptedStep] = useState(0);

  const noTexts = [
    "🥺 neeree harmaargui bgamu",
    "💔 bi hoorhonshde",
    "😢 haramsvaa",
    "👉 suuliin bolomj shu",
    "😈 nadaa durguil ym bnldaa",
  ];

  const handleNo = () => {
    const random = noTexts[Math.floor(Math.random() * noTexts.length)];
    setNoText(random);
  };

  // 💖 YES FLOW (3 clicks)
  const handleYes = () => {
    setAcceptedStep((prev) => prev + 1);
  };

  const isAccepted = acceptedStep >= 3;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-pink-100 p-6">

      {/* 🌸 MAIN CARD */}
      <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md flex flex-col items-center">

        {/* 🐻 BEFORE CLICK GIF (FIXED) */}
        {!isAccepted && (
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRiYml6YnFnc3BlNThhN20xbHltc2l6cTRhcHRwNTAzMmwyemZhcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DHKDB8OdEVMkwTX3IQ/giphy.gif"
            className="w-44 h-44 mb-6 rounded-2xl"
            alt="cute dudu"
          />
        )}

        {/* 💖 QUESTION */}
        <h1 className="text-2xl font-bold text-center text-pink-500 mb-6">
          {!isAccepted
            ? "💌 Hoorhon sankig harmaar bnuu?"
            : "No No No harah boluguijuuuuu 💌💌💌lob uuu💌💌💌"}
        </h1>

        {/* 🎀 BUTTONS */}
        {!isAccepted && (
          <div className="flex gap-4">

            {/* 💖 YES BUTTON VARIANTS */}
            <button
              onClick={handleYes}
              className="px-6 py-3 bg-pink-400 text-white rounded-full shadow-lg hover:scale-110 transition-all"
            >
              {acceptedStep === 0 && "Harmaareen💖"}
              {acceptedStep === 1 && "Itgeltei bnuu🥺"}
              {acceptedStep === 2 && "👉zaza har har"}
            </button>

            {/* ❌ NO BUTTON */}
            <button
              onClick={handleNo}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full shadow-lg hover:scale-110 transition-all"
            >
              {noText}
            </button>
          </div>
        )}

        {/* 💔 FINAL RESULT */}
        {isAccepted && (
          <div className="flex flex-col items-center mt-6 animate-fade-in">

            {/* 💖 FIXED WORKING GIF */}
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTNydnh1YW5wN2ZsY3NpeXNqZTNmbjVkMTFmdzB0cHI3YXp1dm94OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jDA7CqG6PNA1sNYCyH/giphy.gif"
              className="w-64 rounded-2xl shadow-lg mb-4"
              alt="love gif"
            />
          </div>
        )}
      </div>
    </div>
  );
}