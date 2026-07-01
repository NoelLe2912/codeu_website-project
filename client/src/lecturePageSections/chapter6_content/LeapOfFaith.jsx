import React from "react";

export default function LeapOfFaith() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  The Leap of Faith
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Understanding recursion requires a mental shift: don't trace every
                  call. Instead, assume the function works and verify the logic is
                  correct.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How to Think Recursively
                  </h3>
                  <p className="text-gray-700 mb-4">Instead of tracing execution:</p>
                  <div className="space-y-3 text-gray-700 ml-4">
                    <p>
                      • <span className="font-bold text-blue-600">Assume</span> the
                      recursive call works correctly
                    </p>
                    <p>
                      • <span className="font-bold text-blue-600">Ask:</span> "Given
                      that factorial(n-1) works, does factorial(n) work?"
                    </p>
                    <p>
                      • <span className="font-bold text-blue-600">Verify:</span> The
                      base case stops recursion
                    </p>
                    <p>
                      • <span className="font-bold text-blue-600">Trust:</span> The
                      pattern holds for all cases
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    You Already Do This!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you call abs() or math.sqrt(), you don't examine their
                    code—you trust they work. Apply the same trust to your recursive
                    functions!
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">🚀 Pro Tip:</span> It's
                    strange to assume a function works before finishing it—that's
                    why it's called a "leap of faith"!
                  </p>
                </div>
              </section>
  );
}
