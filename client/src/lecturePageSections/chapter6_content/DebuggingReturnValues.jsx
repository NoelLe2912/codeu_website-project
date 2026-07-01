import React from "react";

export default function DebuggingReturnValues() {
  return (
    <section
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Debugging Return Values
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When functions don't work, check three things: arguments
                  (preconditions), function logic (postconditions), and how return
                  values are used.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Three Debugging Checkpoints
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded p-4">
                      <p className="font-bold text-blue-800 mb-2">1. Check Arguments</p>
                      <p className="text-gray-700">
                        Add print statements at function start to display parameter
                        values
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="font-bold text-green-800 mb-2">
                        2. Check Return Values
                      </p>
                      <p className="text-gray-700">
                        Print before each return statement to verify the value
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-4">
                      <p className="font-bold text-purple-800 mb-2">3. Check Usage</p>
                      <p className="text-gray-700">
                        Verify the return value is being used correctly (or at all!)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Tracing Recursion
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Add indented output to visualize recursive calls:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def factorial(n):
        space = ' ' * (4 * n)
        print(space, 'factorial', n)
        if n == 0:
            print(space, 'returning 1')
            return 1
        else:
            recurse = factorial(n-1)
            result = n * recurse
            print(space, 'returning', result)
            return result

    factorial(3)
    #              factorial 3
    #          factorial 2
    #      factorial 1
    #  factorial 0
    #  returning 1
    #      returning 1
    #          returning 2
    #              returning 6`}</code></pre>
                  </div>
                </div>
              </section>
  );
}
