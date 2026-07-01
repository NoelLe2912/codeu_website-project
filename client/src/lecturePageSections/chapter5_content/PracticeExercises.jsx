import React from "react";

export default function PracticeExercises() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
              <p className="text-xl mb-6">Use the exercises below to master conditionals and recursion!</p>
              <div className="bg-white/20 rounded-lg p-6 text-left">
                <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                <ul className="space-y-2">
                  <li>• Write a function is_triangle(a, b, c) that checks if three lengths can form a triangle</li>
                  <li>• Create a function that converts time in seconds to days, hours, minutes, and seconds</li>
                  <li>• Write a recursive function factorial(n) that calculates n! = n × (n-1) × ... × 1</li>
                  <li>• Create a function that checks if a year is a leap year (divisible by 4, except centuries unless divisible by 400)</li>
                  <li>• Write a recursive function sum_digits(n) that adds up all digits in a number</li>
                  <li>• Create a function grade_calculator(score) that returns letter grades (A, B, C, D, F)</li>
                </ul>
              </div>
            </section>
  );
}
