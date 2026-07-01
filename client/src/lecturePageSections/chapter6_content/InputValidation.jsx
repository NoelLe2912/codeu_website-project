import React from "react";

export default function InputValidation() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Input Validation
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Check function parameters to prevent errors and infinite
                  recursion. Use isinstance() to verify types before processing.
                </p>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Problem
                  </h3>
                  <p className="text-gray-700 mb-4">What happens with bad input?</p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`factorial(1.5)
    # RecursionError: maximum recursion depth exceeded

    # Why? 1.5 → 0.5 → -0.5 → -1.5 → ...
    # Never reaches base case!`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Solution: Check Types
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def factorial(n):
        if not isinstance(n, int):
            print('factorial is only defined for integers.')
            return None
        elif n < 0:
            print('factorial is not defined for negative numbers.')
            return None
        elif n == 0:
            return 1
        else:
            return n * factorial(n-1)

    factorial('hello')
    # factorial is only defined for integers.

    factorial(-5)
    # factorial is not defined for negative numbers.`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-blue-800">✅ Best Practice:</span>
                    Always validate inputs to ensure preconditions are met. This is
                    called input validation.
                  </p>
                </div>
              </section>
  );
}
