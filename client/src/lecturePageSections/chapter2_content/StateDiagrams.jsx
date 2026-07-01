import React from "react";

export default function StateDiagrams() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Visualizing Variables: State Diagrams
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A state diagram is a visual representation showing what values
                  your variables hold at a specific moment. It's like taking a
                  snapshot of your program's memory.
                </p>

                <div
                  className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 mb-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    State Diagram Example
                  </h3>
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="flex flex-col gap-4 items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-blue-600">count</span>
                        <span className="text-2xl">→</span>
                        <span
                          className="bg-blue-500 text-white px-6 py-2 rounded-lg text-xl"
                          >25</span
                        >
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-green-600"
                          >temperature</span
                        >
                        <span className="text-2xl">→</span>
                        <span
                          className="bg-green-500 text-white px-6 py-2 rounded-lg text-xl"
                          >98.6</span
                        >
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-purple-600"
                          >greeting</span
                        >
                        <span className="text-2xl">→</span>
                        <span
                          className="bg-purple-500 text-white px-6 py-2 rounded-lg text-xl"
                          >'Hello, Python!'</span
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-blue-800"
                      >📊 Why State Diagrams Matter:</span
                    >
                    They help you track what your variables contain as your program
                    runs. This becomes especially useful when debugging or
                    understanding complex programs.
                  </p>
                </div>
              </section>
  );
}
