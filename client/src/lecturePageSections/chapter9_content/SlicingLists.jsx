import React from "react";

export default function SlicingLists() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">Slicing Lists</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The slice operator works exactly the same way for lists as it does
                  for strings. You can extract portions of a list or create copies.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Slicing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use [n:m] to get elements from index n up to (but not including)
                    m:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`letters = ['a', 'b', 'c', 'd']

    # Get second and third elements
    letters[1:3]
    # ['b', 'c']

    # From beginning to index 2
    letters[:2]
    # ['a', 'b']

    # From index 2 to end
    letters[2:]
    # ['c', 'd']`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Copying Lists
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Two ways to create a copy of a list:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`letters = ['a', 'b', 'c', 'd']

    # Method 1: Full slice
    copy1 = letters[:]

    # Method 2: list() function
    copy2 = list(letters)

    copy1
    # ['a', 'b', 'c', 'd']

    copy2
    # ['a', 'b', 'c', 'd']`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">⚠️ Note:</span> Avoid
                    using "list" as a variable name—it's the name of a built-in
                    function. If you assign to it, you'll lose access to the
                    function!
                  </p>
                </div>
              </section>
  );
}
