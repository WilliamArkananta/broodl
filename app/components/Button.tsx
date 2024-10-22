import React from "react";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

interface ButtonProps {
  text: string;
  dark?: boolean;
  full?: boolean;
}

function Button({ text, dark, full }: ButtonProps) {
  return (
    <button
      className={`rounded-full overflow-hidden duration-200 hover:opacity-60 border border-solid border-indigo-600 ${
        dark ? "text-white bg-indigo-600 " : "text-indigo-600"
      } ${full ? "grid place-items-center w-full" : ""}`}
    >
      <p
        className={`${fugaz.className} px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 text-base sm:text-lg`}
      >
        {text}
      </p>
    </button>
  );
}

export default Button;
