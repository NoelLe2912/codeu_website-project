import React from "react";

export default function ReadyToPractice() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Ready to Practice?</h2>
      <p className="text-xl mb-6">
        Use the exercises below to try out the concepts you've learned!
      </p>
      <div className="bg-white/20 rounded-lg p-6 text-left">
        <p className="font-bold mb-3">Try These Exercises:</p>
        <ul className="space-y-2">
          <li>• Calculate how many seconds are in one week</li>
          <li>• Create a string with your name and print its length</li>
          <li>
            • Convert the string '456' to an integer and multiply it by 2
          </li>
          <li>• Use round() to round 8.7 to the nearest integer</li>
          <li>• Combine multiple strings using the + operator</li>
        </ul>
      </div>
    </section>
  );
}
