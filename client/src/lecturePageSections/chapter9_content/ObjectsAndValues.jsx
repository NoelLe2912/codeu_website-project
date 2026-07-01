import React from "react";

export default function ObjectsAndValues() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Objects and Values
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Understanding the difference between objects and values is crucial
                  for working with lists. Two variables can refer to the same object
                  or to different objects with the same value.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Same Object vs Same Value
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Check if variables refer to the same object with the is
                    operator:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Strings: Python optimizes by reusing objects
    a = 'banana'
    b = 'banana'
    a is b
    # True (same object!)

    # Lists: Each assignment creates a new object
    a = [1, 2, 3]
    b = [1, 2, 3]
    a is b
    # False (different objects)`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Equivalent vs Identical
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <span className="font-bold text-blue-600">Equivalent:</span>
                      Objects have the same value (use ==)
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Identical:</span>
                      Variables refer to the same object (use is)
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 mt-4">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`a = [1, 2, 3]
    b = [1, 2, 3]

    # Equivalent (same values)
    a == b
    # True

    # Not identical (different objects)
    a is b
    # False`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">📊 Remember:</span> If
                    two objects are identical, they are also equivalent. But if they
                    are equivalent, they are not necessarily identical!
                  </p>
                </div>
              </section>
  );
}
