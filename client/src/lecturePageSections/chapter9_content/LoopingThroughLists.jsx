import React from "react";

export default function LoopingThroughLists() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Looping Through Lists
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  For loops work beautifully with lists, allowing you to process
                  each element in sequence. This is one of the most common patterns
                  in Python programming.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic List Loop
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Loop through each element in a list:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`cheeses = ['Cheddar', 'Edam', 'Gouda']

    for cheese in cheeses:
        print(cheese)

    # Output:
    # Cheddar
    # Edam
    # Gouda`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Combining split() and for
                  </h3>
                  <p className="text-gray-700 mb-4">Process words from a sentence:</p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`s = 'pining for the fjords'

    for word in s.split():
        print(word)

    # Output:
    # pining
    # for
    # the
    # fjords`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Empty List Behavior
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A for loop over an empty list doesn't execute:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`for x in []:
        print('This never happens.')

    # No output - loop body never runs`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">💡 Pattern:</span> Use
                    for loops to process each element of a list one at a time. This
                    is cleaner and more readable than using indices!
                  </p>
                </div>
              </section>
  );
}
