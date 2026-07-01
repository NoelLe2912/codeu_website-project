import React from "react";

export default function RecursionWithReturnValues() {
  return (
    <section
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Recursion with Return Values
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Combining recursion with return values unlocks incredible
                  power—our Python subset is now Turing complete, meaning it can
                  perform any computation!
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Factorial: Recursive Definition
                  </h3>
                  <p className="text-gray-700 mb-4">Mathematical definition:</p>
                  <div className="space-y-2 text-gray-700 ml-4 mb-4">
                    <p>• factorial(0) = 1</p>
                    <p>• factorial(n) = n × factorial(n-1)</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def factorial(n):
        if n == 0:
            return 1
        else:
            recurse = factorial(n-1)
            return n * recurse

    factorial(3)
    # 6 (3 × 2 × 1)

    factorial(5)
    # 120 (5 × 4 × 3 × 2 × 1)`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How It Works
                  </h3>
                  <p className="text-gray-700 mb-4">For factorial(3):</p>
                  <div className="space-y-2 text-gray-700 ml-4">
                    <p>1. factorial(3) calls factorial(2)</p>
                    <p>2. factorial(2) calls factorial(1)</p>
                    <p>3. factorial(1) calls factorial(0)</p>
                    <p>4. factorial(0) returns 1</p>
                    <p>5. factorial(1) returns 1 × 1 = 1</p>
                    <p>6. factorial(2) returns 2 × 1 = 2</p>
                    <p>7. factorial(3) returns 3 × 2 = 6</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800"
                      >🎓 Turing Complete:</span
                    >
                    With recursion and return values, we can now compute anything
                    that any computer can compute!
                  </p>
                </div>
              </section>
  );
}
