import React, { useMemo, useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const motivationMessages = useMemo(
    () => [
      "Don't be afraid to ask for Help!",
      "Don't generally learn the code, pick a project and get started on it.",
      "Don't be afraid to fail, get stuck in code!",
      "Have enough confidence to believe in yourself.",
      "Treat Programming like a new music/beat to your life!",
      "Every bug you fix is a level you just beat — keep playing!",
      "Code with curiosity, debug with patience, and build with passion.",
      "Getting errors means you're learning — embrace the red text!",
      "Small progress every day turns beginners into developers.",
      "You don't need to know everything — you just need to keep going.",
      "Programming is 90% problem solving and 10% 'OMG it finally works!'",
      "The best way to learn to code… is to code. Build something messy!",
      "Don't wait for motivation — open your IDE and create it.",
      "If your code works on the first try… double-check it 😆",
      "Make mistakes, break things, fix them — that's real learning.",
      "Celebrate the tiny wins — they become big wins later.",
      "Thinking like a programmer is a superpower. Train it daily.",
      "Your future self will thank you for not giving up today.",
      "Build the ideas you are scared to build — that's where growth is.",
    ],
    [],
  );

  const { year, month, firstDayIndex, lastDate, today } = useMemo(() => {
    const yearValue = currentDate.getFullYear();
    const monthValue = currentDate.getMonth();
    const firstDayValue = new Date(yearValue, monthValue, 1).getDay();
    const lastDateValue = new Date(yearValue, monthValue + 1, 0).getDate();
    return {
      year: yearValue,
      month: monthValue,
      firstDayIndex: firstDayValue,
      lastDate: lastDateValue,
      today: new Date(),
    };
  }, [currentDate]);

  const monthLabel = useMemo(
    () =>
      new Date(year, month, 1).toLocaleString("default", {
        month: "long",
        year: "numeric",
      }),
    [month, year],
  );

  const calendarDays = Array.from({ length: lastDate }, (_, i) => i + 1);
  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  return (
    <div className="space-y-4 mb-5">
      <div className="bg-white rounded-2xl shadow-md p-7 w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <button
            type="button"
            onClick={() =>
              setCurrentDate(
                (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
              )
            }
            className="text-gray-500 hover:text-gray-700 transition text-xl"
            aria-label="Previous month"
          >
            ❮
          </button>
          <h3 className="text-lg font-semibold text-gray-700">{monthLabel}</h3>
          <button
            type="button"
            onClick={() =>
              setCurrentDate(
                (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
              )
            }
            className="text-gray-500 hover:text-gray-700 transition text-xl"
            aria-label="Next month"
          >
            ❯
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-400 font-medium mb-2 text-sm">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {Array.from({ length: firstDayIndex }, (_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {calendarDays.map((day) => (
            <div
              key={day}
              className={`py-2 rounded-full cursor-pointer flex items-center justify-center transition-all ${
                isToday(day)
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-blue-600 hover:text-yellow-400"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
