import React from "react";

export default function TupleAssignment() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Tuple Assignment
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Python allows you to assign multiple values to multiple variables
                  in a single statement. This elegant feature makes many operations
                  simpler and more readable.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Tuple Assignment
                  </h3>
                  <p className="text-gray-700 mb-4">Assign multiple values at once:</p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`a, b = 1, 2

    # Values are assigned left to right
    a, b
    # (1, 2)`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Works with Any Sequence
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The right side can be any sequence—list, tuple, or string:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Split an email address
    email = 'monty@python.org'
    username, domain = email.split('@')

    username, domain
    # ('monty', 'python.org')`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Must Match Length
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The number of variables must equal the number of values:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`a, b = 1, 2, 3
    # ValueError: too many values to unpack (expected 2)`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Swapping Values
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Swap variables without a temporary variable:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Traditional way with temp variable
    temp = a
    a = b
    b = temp

    # Elegant way with tuple assignment
    a, b = b, a`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Tuple Assignment in Loops
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use with items() to loop through dictionaries elegantly:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`d = {'one': 1, 'two': 2}

    # Concise version
    for key, value in d.items():
        print(key, '->', value)

    # Output:
    # one -> 1
    # two -> 2`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800"
                      >⚡ Elegant Pattern:</span
                    >
                    Tuple assignment makes code cleaner and more Pythonic. Use it
                    whenever you're unpacking sequences!
                  </p>
                </div>
              </section>
  );
}
