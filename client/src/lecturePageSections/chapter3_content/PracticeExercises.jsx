import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">
                  Use the exercises below to master functions!
                </p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                  <ul className="space-y-2">
                    <li>
                      • Create a function called print_border that takes a string
                      and prints it with a line of dashes above and below
                    </li>
                    <li>
                      • Write a function called square that takes a number and
                      returns that number multiplied by itself
                    </li>
                    <li>
                      • Make a function draw_line that takes a character and a
                      number, and prints that character repeated n times
                    </li>
                    <li>
                      • Create a function make_box that uses draw_line to print a
                      rectangular box made of asterisks
                    </li>
                    <li>
                      • Write a function countdown that uses a for loop to count
                      down from a given number to 1, then prints "Done!"
                    </li>
                    <li>
                      • Make a function print_multiplication_table that takes a
                      number and prints its multiplication table from 1 to 10
                    </li>
                  </ul>
                </div>
              </section>
  );
}
