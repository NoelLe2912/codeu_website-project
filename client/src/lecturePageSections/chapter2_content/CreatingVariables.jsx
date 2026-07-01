import React from "react";

export default function CreatingVariables() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Creating Variables
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A variable is like a labeled container that holds a value. You can
                  think of it as giving a name to a piece of data so you can use it
                  later. Creating a variable is called assignment, and it uses the
                  equals sign (=).
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Assignment
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The assignment statement has three parts: the variable name
                    (left), the equals sign (middle), and the value (right).
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-bold text-gray-800 mb-1">Integer Assignment</p>
                      <div className="bg-gray-900 rounded p-3">
                        <code className="text-green-400">count = 25</code>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-bold text-gray-800 mb-1">Float Assignment</p>
                      <div className="bg-gray-900 rounded p-3">
                        <code className="text-green-400">temperature = 98.6</code>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-bold text-gray-800 mb-1">String Assignment</p>
                      <div className="bg-gray-900 rounded p-3">
                        <code className="text-green-400"
                          >greeting = 'Hello, Python!'</code
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using Variables
                  </h3>
                  <p className="text-gray-700 mb-4">
                    After you create a variable, you can use it anywhere you would
                    use a value. The variable acts as a substitute for its contents.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># Create a variable
    age = 21

    # Use it in calculations
    age + 4        # Result: 25

    # Use it with functions
    round(age / 3) # Result: 7</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">💡 Important:</span>
                    When you run an assignment statement, nothing appears on screen.
                    Python creates the variable silently. To see what's stored in a
                    variable, type its name or use the print function.
                  </p>
                </div>
              </section>
  );
}
