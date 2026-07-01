import React from "react";

export default function StackDiagrams() {
  return (
    <section
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Visualizing Function Calls: Stack Diagrams
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Stack diagrams help you understand which variables belong to which
                  function. They're especially useful when functions call other
                  functions.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    What Are Frames?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Each function call creates a frame—a box containing that
                    function's parameters and local variables. Frames stack on top
                    of each other.
                  </p>
                  <div
                    className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8"
                  >
                    <div className="bg-white rounded-lg p-6 space-y-4">
                      <div className="border-4 border-green-500 rounded p-4">
                        <p className="font-bold text-green-700 mb-2">print()</p>
                        <p className="text-sm text-gray-600">Built-in function</p>
                      </div>
                      <div className="border-4 border-blue-500 rounded p-4">
                        <p className="font-bold text-blue-700 mb-2">
                          display_message()
                        </p>
                        <p className="text-sm">text → "Hello"</p>
                      </div>
                      <div className="border-4 border-purple-500 rounded p-4">
                        <p className="font-bold text-purple-700 mb-2">__main__</p>
                        <p className="text-sm">message → "Hello"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Reading Stack Diagrams
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• The bottom frame is __main__ (your main program)</p>
                    <p>• Each function call adds a new frame on top</p>
                    <p>• When a function finishes, its frame is removed</p>
                    <p>• Variables in each frame are separate from other frames</p>
                  </div>
                </div>
              </section>
  );
}
