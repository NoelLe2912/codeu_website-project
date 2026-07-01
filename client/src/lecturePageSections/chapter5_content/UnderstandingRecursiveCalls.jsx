import React from "react";

export default function UnderstandingRecursiveCalls() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Understanding Recursive Calls</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Each time a function is called, Python creates a new frame on the stack. With recursion, you get multiple frames for the same function with different parameter values.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stack Diagram for countdown(3)</h3>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
                  <div className="bg-white rounded-lg p-6 space-y-4">
                    <div className="border-4 border-green-500 rounded p-4">
                      <p className="font-bold text-green-700 mb-2">countdown</p>
                      <p className="text-sm">n → 0 (BASE CASE)</p>
                    </div>
                    <div className="border-4 border-blue-500 rounded p-4">
                      <p className="font-bold text-blue-700 mb-2">countdown</p>
                      <p className="text-sm">n → 1</p>
                    </div>
                    <div className="border-4 border-purple-500 rounded p-4">
                      <p className="font-bold text-purple-700 mb-2">countdown</p>
                      <p className="text-sm">n → 2</p>
                    </div>
                    <div className="border-4 border-pink-500 rounded p-4">
                      <p className="font-bold text-pink-700 mb-2">countdown</p>
                      <p className="text-sm">n → 3</p>
                    </div>
                    <div className="border-4 border-gray-500 rounded p-4">
                      <p className="font-bold text-gray-700 mb-2">__main__</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Base Case</h3>
                <p className="text-gray-700 mb-4">
                  The bottom frame where n=0 is the base case. It doesn't make another recursive call, so the stack stops growing and functions start returning.
                </p>
              </div>
            </section>
  );
}
