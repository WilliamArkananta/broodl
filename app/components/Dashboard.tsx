import React from "react";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moods = [
    { mood: "!@#$%", emoji: "🤬" },
    { mood: "Sad", emoji: "🙁" },
    { mood: "Existing", emoji: "😐" },
    { mood: "Good", emoji: "🙂" },
    { mood: "Elated", emoji: "😍" },
  ];

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
      <div className="grid grid-cols-3 bg-indigo-50 text-indigo-500">
        {Object.entries(statuses).map(([key, value]) => (
          <div key={key} className="p-4">
            <p className="font-medium uppercase text-xs sm:text-sm truncate">
              {key.replace("_", " ")}
            </p>
            <p className={`${fugaz.className} text-base sm:text-lg truncate`}>
              {value}
            </p>
          </div>
        ))}
      </div>
      <h4
        className={`${fugaz.className} text-4xl md:text-6xl sm:text-5xl text-center`}
      >
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {moods.map((mood, index) => (
          <button
            key={index}
            className={`lex flex-col items-center p-4 ${
              index === 4 ? "sm:col-span-2 md:col-span-1" : ""
            }`}
          >
            <p>{mood.emoji}</p>
            <p>{mood.mood}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
