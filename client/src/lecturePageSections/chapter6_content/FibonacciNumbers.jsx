import React from "react";

export default function FibonacciNumbers() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Fibonacci Numbers
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Fibonacci sequence is a classic recursive example: each number
                  is the sum of the previous two.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Recursive Definition
                  </h3>
                  <div className="space-y-2 text-gray-700 ml-4 mb-4">
                    <p>• fibonacci(0) = 0</p>
                    <p>• fibonacci(1) = 1</p>
                    <p>• fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def fibonacci(n):
        if n == 0:
            return 0
        elif n == 1:
            return 1
        else:
            return fibonacci(n-1) + fibonacci(n-2)

    fibonacci(5)
    # 5 (sequence: 0, 1, 1, 2, 3, 5)

    fibonacci(7)
    # 13 (sequence: 0, 1, 1, 2, 3, 5, 8, 13)`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Warning: Inefficient!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    This implementation is very slow for large n because it
                    recalculates values repeatedly. We'll see a better approach in
                    Chapter 10 using memoization!
                  </p>
                </div>
              </section>
  );
}
