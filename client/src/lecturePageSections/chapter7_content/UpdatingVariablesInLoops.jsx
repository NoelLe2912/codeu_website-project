import React from "react";

export default function UpdatingVariablesInLoops() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Updating Variables in Loops
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Variables can be reassigned to new values. This is especially
                  useful for keeping track of information as you loop through data.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Variable Updates
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can assign a new value to a variable that already exists:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`x = 5
    x
    # 5

    x = 7
    x
    # 7

    x = x + 1
    x
    # 8`}</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">
                      Initialize First
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Before updating, create the variable:
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-green-400 text-sm"
                        >z = 0<br />z = z + 1</code
                      >
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 text-xl">
                      Common Error
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Don't update before initializing:
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-red-400 text-sm"
                        >z = z + 1<br /># NameError!</code
                      >
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Augmented Assignment Operators
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Python provides shortcuts for common update operations:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`z = 0
    z += 1    # Same as: z = z + 1
    z += 2    # Same as: z = z + 2
    z -= 1    # Same as: z = z - 1
    z *= 3    # Same as: z = z * 3`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">📊 Terminology:</span>
                    Increasing a variable's value is called an increment. Decreasing
                    it is called a decrement.
                  </p>
                </div>
              </section>
  );
}
