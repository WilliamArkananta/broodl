import React from "react";
import { Fugaz_One } from "next/font/google";
import Calendar from "./Calendar";

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
      <div className="grid grid-cols-3 bg-indigo-50 text-indigo-500 p-4 gap-4 ">
        {Object.entries(statuses).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-1 sm:gap-2">
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
      <div className="flex flex-wrap items-stretch gap-4">
        {moods.map((mood, index) => (
          <button
            key={index}
            className={`flex flex-col gap-2 items-center p-4 px-5 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex-1`}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl">{mood.emoji}</p>
            <p
              className={` ${fugaz.className} text-indigo-500 text-xs sm:text-sm md:text-base`}
            >
              {mood.mood}
            </p>
          </button>
        ))}
      </div>
      <Calendar />
    </div>
  );
}

export default Dashboard;
