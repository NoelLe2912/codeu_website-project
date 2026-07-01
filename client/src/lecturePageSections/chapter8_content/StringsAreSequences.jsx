import React from "react";

export default function StringsAreSequences() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Strings Are Sequences
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Unlike integers or booleans, strings are sequences—collections of
                  individual characters in a specific order. This means you can
                  access each character separately using its position.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Accessing Characters with Indexing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use the bracket operator [] with an index to select individual
                    characters:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`fruit = 'banana'
    letter = fruit[1]
    letter
    # 'a'

    # The first character has index 0
    fruit[0]
    # 'b'`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Zero-Based Indexing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Python counts from 0, not 1! The index is an offset from the
                    beginning:
                  </p>
                  <div className="flex justify-center my-4">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex gap-2 text-center">
                        <div className="flex flex-col">
                          <div
                            className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                          >
                            b
                          </div>
                          <div className="text-sm mt-2 text-gray-600">index 0</div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                          >
                            a
                          </div>
                          <div className="text-sm mt-2 text-gray-600">index 1</div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                          >
                            n
                          </div>
                          <div className="text-sm mt-2 text-gray-600">index 2</div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                          >
                            a
                          </div>
                          <div className="text-sm mt-2 text-gray-600">index 3</div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                          >
                            n
                          </div>
                          <div className="text-sm mt-2 text-gray-600">index 4</div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                          >
                            a
                          </div>
                          <div className="text-sm mt-2 text-gray-600">index 5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using Variables and Expressions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Indices can be variables or expressions:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`i = 1
    fruit[i]
    # 'a'

    fruit[i + 1]
    # 'n'

    # But indices must be integers
    fruit[1.5]
    # TypeError: string indices must be integers`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Negative Indices
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use negative indices to count backward from the end:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`fruit = 'banana'

    # Get the last character
    fruit[-1]
    # 'a'

    # Second to last
    fruit[-2]
    # 'n'

    # This avoids out-of-range errors
    n = len(fruit)
    fruit[n-1]  # Works, but more complicated
    fruit[-1]   # Easier!`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-red-800">⚠️ Common Error:</span>
                    Don't forget that indices start at 0! If a string has 6
                    characters, valid indices are 0-5, not 1-6. Using fruit[6]
                    causes an IndexError.
                  </p>
                </div>
              </section>
  );
}
