import React from "react";

export default function FunctionArguments() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Understanding Function Arguments
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you call a function, the values you put in the parentheses
                  are called arguments. Different functions accept different numbers
                  and types of arguments.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Required Arguments
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-bold text-gray-800 mb-1">One Argument</p>
                      <div className="bg-gray-900 rounded p-3 mb-2">
                        <code className="text-green-400">abs(-42) # Result: 42</code>
                      </div>
                      <p className="text-gray-600 text-sm">
                        The abs function needs exactly one number
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-bold text-gray-800 mb-1">Two Arguments</p>
                      <div className="bg-gray-900 rounded p-3 mb-2">
                        <code className="text-green-400"
                          >math.pow(4, 3) # Result: 64.0</code
                        >
                      </div>
                      <p className="text-gray-600 text-sm">
                        The pow function requires a base and an exponent
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-bold text-gray-800 mb-1">Variable Arguments</p>
                      <div className="bg-gray-900 rounded p-3 mb-2">
                        <code className="text-green-400"
                          >print('Any', 'number', 'of', 'values')</code
                        >
                      </div>
                      <p className="text-gray-600 text-sm">
                        The print function accepts any number of arguments
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Optional Arguments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Some functions have optional arguments that provide additional
                    control:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># round with one argument
    round(3.7)           # Result: 4

    # round with optional second argument (decimal places)
    round(3.14159, 2)    # Result: 3.14

    # int with optional base argument
    int('1010', 2)       # Result: 10 (binary to decimal)</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                  <p className="text-lg text-gray-700 mb-3">
                    <span className="font-bold text-red-800">⚠️ Common Errors:</span>
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      • Too many arguments:
                      <code className="bg-gray-900 text-red-400 px-2 py-1 rounded"
                        >abs(5, 2)</code
                      >
                      ← TypeError
                    </p>
                    <p>
                      • Too few arguments:
                      <code className="bg-gray-900 text-red-400 px-2 py-1 rounded"
                        >math.pow(4)</code
                      >
                      ← TypeError
                    </p>
                    <p>
                      • Wrong type:
                      <code className="bg-gray-900 text-red-400 px-2 py-1 rounded"
                        >math.sqrt('nine')</code
                      >
                      ← TypeError
                    </p>
                  </div>
                </div>
              </section>
  );
}
