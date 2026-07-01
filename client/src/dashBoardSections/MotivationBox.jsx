import React, { useState, useEffect } from "react";

function MotivationBox() {
  const [quote, setQuote] = useState("");

  const quotes = [
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
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-blue-600 to-blue-800 text-white rounded-2xl shadow-md p-7 text-sm leading-relaxed w-full max-w-md mx-auto">
      {quote}
    </div>
  );
}

export default MotivationBox;
