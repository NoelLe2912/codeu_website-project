import React from "react";

export default function DebuggingComplexPrograms() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Debugging Complex Programs
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As programs get larger and more complex, debugging becomes more
                  challenging. Here are systematic strategies for tackling difficult
                  bugs.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Five Rs of Debugging
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded p-4">
                      <p className="font-bold text-blue-800 mb-2">📖 Reading</p>
                      <p className="text-gray-700">
                        Examine your code carefully. Does it say what you meant?
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="font-bold text-green-800 mb-2">▶️ Running</p>
                      <p className="text-gray-700">
                        Experiment with changes. Display values at key points.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-4">
                      <p className="font-bold text-purple-800 mb-2">💭 Ruminating</p>
                      <p className="text-gray-700">
                        Think about error types and what could cause them.
                      </p>
                    </div>
                    <div className="bg-yellow-50 rounded p-4">
                      <p className="font-bold text-yellow-800 mb-2">🦆 Rubberducking</p>
                      <p className="text-gray-700">
                        Explain the problem aloud—often you'll find the answer!
                      </p>
                    </div>
                    <div className="bg-red-50 rounded p-4">
                      <p className="font-bold text-red-800 mb-2">⬅️ Retreating</p>
                      <p className="text-gray-700">
                        Back up to working code, then rebuild carefully.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Rubber Duck Debugging
                  </h3>
                  <p className="text-gray-700 mb-4">
                    This is a real technique! Explain your problem step-by-step to
                    an inanimate object (like a rubber duck). Often, the act of
                    explaining reveals the solution.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">💡 Balance:</span> Don't
                    get stuck on one approach. If reading code isn't working, try
                    running experiments. If experiments fail, step back and think.
                  </p>
                </div>
              </section>
  );
}
