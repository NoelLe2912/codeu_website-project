import React from "react";

export default function ThreeTypesOfErrors() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Three Types of Errors
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Every programmer encounters errors. Knowing what type of error
                  you're dealing with helps you fix it faster.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div
                    className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-6"
                  >
                    <div className="text-4xl mb-3 text-center">🔴</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-center text-xl">
                      Syntax Error
                    </h4>
                    <p className="text-gray-700 text-center mb-3">
                      Python can't understand your code
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-red-400 text-xs">million! = 100</code>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 text-center">
                      Invalid punctuation
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-6"
                  >
                    <div className="text-4xl mb-3 text-center">🟡</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-center text-xl">
                      Runtime Error
                    </h4>
                    <p className="text-gray-700 text-center mb-3">
                      Code runs but crashes
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-yellow-400 text-xs">'100' / 5</code>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 text-center">
                      Can't divide string
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6"
                  >
                    <div className="text-4xl mb-3 text-center">🟣</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-center text-xl">
                      Semantic Error
                    </h4>
                    <p className="text-gray-700 text-center mb-3">
                      Code runs but wrong result
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-purple-400 text-xs">1 + 5 / 2</code>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 text-center">
                      Wrong order of ops
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Detailed Examples
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-red-600 mb-2">
                        Syntax Error: Breaks structure rules
                      </p>
                      <div className="bg-gray-900 rounded p-3 mb-2">
                        <code className="text-red-400"
                          >student count = 30 # spaces not allowed</code
                        >
                      </div>
                      <p className="text-gray-600 text-sm">
                        Python refuses to run the program
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-yellow-600 mb-2">
                        Runtime Error (Exception): Type mismatch
                      </p>
                      <div className="bg-gray-900 rounded p-3 mb-2">
                        <code className="text-yellow-400"
                          >'hello' - 5 # can't subtract from string</code
                        >
                      </div>
                      <p className="text-gray-600 text-sm">
                        Program starts but crashes during execution
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-purple-600 mb-2">
                        Semantic Error: Logic mistake
                      </p>
                      <div className="bg-gray-900 rounded p-3 mb-2">
                        <code className="text-purple-400"
                          >average = 10 + 20 / 2 # Result: 20, not 15!</code
                        >
                      </div>
                      <p className="text-gray-600 text-sm">
                        Need parentheses: (10 + 20) / 2
                      </p>
                    </div>
                  </div>
                </div>
              </section>
  );
}
