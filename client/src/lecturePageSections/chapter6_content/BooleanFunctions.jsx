import React from "react";

export default function BooleanFunctions() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Boolean Functions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Functions can return boolean values (True or False), which is
                  perfect for encapsulating complex tests into reusable functions.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Boolean Function
                  </h3>
                  <p className="text-gray-700 mb-4">Check if x is divisible by y:</p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def is_divisible(x, y):
        if x % y == 0:
            return True
        else:
            return False

    is_divisible(6, 4)
    # False

    is_divisible(6, 3)
    # True`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Concise Version
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The == operator already returns a boolean:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def is_divisible(x, y):
        return x % y == 0

    # Same result, cleaner code!
    is_divisible(10, 2)
    # True`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using in Conditionals
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Good
    if is_divisible(6, 2):
        print('divisible')

    # Redundant (don't do this)
    if is_divisible(6, 2) == True:
        print('divisible')
    # The == True comparison is unnecessary!`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">💡 Style Tip:</span>
                    Don't compare boolean functions to True or False—just use them
                    directly in conditions!
                  </p>
                </div>
              </section>
  );
}
