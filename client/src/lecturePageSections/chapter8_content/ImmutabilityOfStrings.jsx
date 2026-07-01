import React from "react";

export default function ImmutabilityOfStrings() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Immutability of Strings
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Strings are immutable, which means you cannot change individual
                  characters. Once a string is created, it cannot be modified—you
                  can only create new strings.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    What Happens When You Try to Modify?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Attempting to change a character causes a TypeError:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`greeting = 'Hello, world!'
    greeting[0] = 'J'
    # TypeError: 'str' object does not support item assignment`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating Modified Copies
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Instead of modifying, create a new string using concatenation
                    and slicing:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`greeting = 'Hello, world!'

    # Create a new string with different first letter
    new_greeting = 'J' + greeting[1:]
    new_greeting
    # 'Jello, world!'

    # Original string is unchanged
    greeting
    # 'Hello, world!'`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">💡 Key Concept:</span>
                    Immutability means strings are safe to share and use in multiple
                    places. You never have to worry about one part of your program
                    changing a string that another part is using.
                  </p>
                </div>
              </section>
  );
}
