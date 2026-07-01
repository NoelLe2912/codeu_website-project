import React from "react";

export default function DisplayingOutput() {
  return (
    <section
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Displaying Output with print
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The print function is how you show information to users. Unlike
                  just typing an expression (which only shows the last result),
                  print can display multiple values.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Why Use print?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you type expressions in Python, only the last one gets
                    displayed:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6 mb-4">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># Only the second value appears
    count + 5
    count + 10    # Only this shows</code></pre>
                  </div>
                  <p className="text-gray-700 mb-4">
                    But with print, you can show as many values as you want:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>print(count + 5)
    print(count + 10)  # Both appear now!</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Multiple Arguments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can pass multiple values to print separated by commas.
                    Python will display them all with spaces in between.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>name = 'Alice'
    score = 95

    print('Student:', name, 'Score:', score)
    # Output: Student: Alice Score: 95</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">✓ Pro Tip:</span> print
                    automatically adds spaces between values and moves to a new line
                    after printing. This makes it perfect for displaying formatted
                    output!
                  </p>
                </div>
              </section>
  );
}
