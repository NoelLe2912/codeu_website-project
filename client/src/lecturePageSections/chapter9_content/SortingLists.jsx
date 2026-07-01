import React from "react";

export default function SortingLists() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">Sorting Lists</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Python's sorted() function makes it easy to arrange list elements
                  in order. It works with numbers, strings, and more.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Sorting Without Modifying
                  </h3>
                  <p className="text-gray-700 mb-4">
                    sorted() returns a new sorted list, leaving the original
                    unchanged:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`scramble = ['c', 'a', 'b']

    # Get sorted version
    sorted(scramble)
    # ['a', 'b', 'c']

    # Original is unchanged
    scramble
    # ['c', 'a', 'b']`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Sorting Strings
                  </h3>
                  <p className="text-gray-700 mb-4">
                    sorted() works on any sequence, including strings:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Sort letters in a word
    sorted('letters')
    # ['e', 'e', 'l', 'r', 's', 't', 't']

    # Convert back to string with join
    ''.join(sorted('letters'))
    # 'eelrstt'`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">🎯 Use Case:</span>
                    Sorting letters is useful for finding anagrams—two words are
                    anagrams if their sorted letters are identical!
                  </p>
                </div>
              </section>
  );
}
