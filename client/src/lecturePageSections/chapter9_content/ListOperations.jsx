import React from "react";

export default function ListOperations() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  List Operations
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Lists support several operators and built-in functions that make
                  working with them convenient and powerful.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Concatenation and Repetition
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use + to join lists and * to repeat them:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`t1 = [1, 2]
    t2 = [3, 4]

    # Concatenate with +
    t1 + t2
    # [1, 2, 3, 4]

    # Repeat with *
    ['spam'] * 4
    # ['spam', 'spam', 'spam', 'spam']`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Built-in Functions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Python provides useful functions for working with lists of
                    numbers:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`numbers = [1, 5, 3, 9, 2]

    # Sum all elements
    sum(numbers)
    # 20

    # Find minimum
    min(numbers)
    # 1

    # Find maximum
    max(numbers)
    # 9`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">💡 Limitation:</span>
                    Most mathematical operators (-, /, etc.) don't work with lists.
                    Use sum(), min(), and max() for common calculations.
                  </p>
                </div>
              </section>
  );
}
