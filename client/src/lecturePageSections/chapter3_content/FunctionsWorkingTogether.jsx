import React from "react";

export default function FunctionsWorkingTogether() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Functions Working Together
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  One of the most powerful features of functions is that they can
                  call other functions. This lets you build complex programs from
                  simple, reusable pieces.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Building Blocks
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Let's create a simple example with multiple functions that work
                    together:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># A function with two parameters
    def echo(word, count):
        print(word * count)

    # A function that uses echo
    def show_pattern():
        echo("*", 5)
        echo("-", 3)
        echo("*", 5)

    # Call the top-level function
    show_pattern()
    # Output:
    # *****
    # ---
    # *****</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Function Call Chain
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you run show_pattern(), it calls echo three times. Each
                    call to echo then calls print. That's a chain of function calls!
                  </p>
                  <div className="flex justify-center">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="text-center space-y-2">
                        <div className="bg-purple-500 text-white px-4 py-2 rounded">
                          show_pattern()
                        </div>
                        <div className="text-2xl">↓</div>
                        <div className="bg-blue-500 text-white px-4 py-2 rounded">
                          echo("*", 5)
                        </div>
                        <div className="text-2xl">↓</div>
                        <div className="bg-green-500 text-white px-4 py-2 rounded">
                          print("*****")
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">✓ Design Tip:</span>
                    Breaking your program into smaller functions makes it easier to
                    understand, test, and fix. Each function should do one clear
                    task.
                  </p>
                </div>
              </section>
  );
}
