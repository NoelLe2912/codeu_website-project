import React from "react";

export default function PracticeExercises() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
              <p className="text-xl mb-6">Master methods and object-oriented programming!</p>
              <div className="bg-white/20 rounded-lg p-6 text-left">
                <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                <ul className="space-y-2">
                  <li>• Convert functions from Chapter 14 to methods</li>
                  <li>• Create a Date class with __init__ and __str__ methods</li>
                  <li>• Write is_after method for Date objects using to_tuple helper</li>
                  <li>• Add __add__ and __sub__ methods to Date class</li>
                  <li>• Implement __eq__ and __lt__ for comparisons</li>
                  <li>• Write is_valid methods for your custom classes</li>
                  <li>• Practice using assert statements for validation</li>
                </ul>
              </div>
            </section>
  );
}
