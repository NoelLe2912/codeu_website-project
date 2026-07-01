import React from "react";

export default function ComparingStrings() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Comparing Strings
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Relational operators work with strings to check equality and
                  alphabetical order. This is useful for sorting and searching
                  operations.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Equality Testing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use == to check if two strings are identical:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`word = 'banana'

    if word == 'banana':
        print('All right, banana.')

    # Output: All right, banana.`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Alphabetical Ordering
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use &lt; and &gt; to compare strings alphabetically:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def compare_word(word):
        if word < 'banana':
            print(word, 'comes before banana.')
        elif word > 'banana':
            print(word, 'comes after banana.')
        else:
            print('All right, banana.')

    compare_word('apple')
    # apple comes before banana.

    compare_word('cherry')
    # cherry comes after banana.`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Case Sensitivity Warning
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Python treats uppercase and lowercase differently—all uppercase
                    letters come before lowercase:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`compare_word('Pineapple')
    # Pineapple comes before banana.

    # To fix this, convert to lowercase first
    def compare_word_fixed(word):
        word_lower = word.lower()
        if word_lower < 'banana':
            print(word, 'comes before banana.')
        elif word_lower > 'banana':
            print(word, 'comes after banana.')
        else:
            print('All right, banana.')`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">🔤 Pro Tip:</span> When
                    comparing strings for ordering, always convert them to a
                    standard format (usually lowercase) to avoid unexpected results
                    from case differences.
                  </p>
                </div>
              </section>
  );
}
