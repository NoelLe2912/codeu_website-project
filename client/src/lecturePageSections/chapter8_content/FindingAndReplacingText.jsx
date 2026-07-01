import React from "react";

export default function FindingAndReplacingText() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Finding and Replacing Text
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  String methods make it easy to search for patterns and replace
                  them with new text. These operations are fundamental to text
                  processing.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using the in Operator
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Check if a substring appears anywhere in a string:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`line = "Jonathan Harker's Journal"

    if 'Jonathan' in line:
        print('Found Jonathan!')

    # Output: Found Jonathan!`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Counting Occurrences
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use the count method to find how many times a substring appears:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`text = "banana"
    text.count('a')
    # 3

    text.count('na')
    # 2

    # Count across entire file
    total = 0
    for line in open('book.txt'):
        total += line.count('Jonathan')

    print(f'Found {total} occurrences')`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The replace Method
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Replace all occurrences of a substring with another:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`line = "Hello Jonathan, how are you Jonathan?"

    # Replace all occurrences
    new_line = line.replace('Jonathan', 'Thomas')
    new_line
    # "Hello Thomas, how are you Thomas?"

    # Process entire file
    writer = open('output.txt', 'w')
    for line in open('input.txt'):
        line = line.replace('Jonathan', 'Thomas')
        writer.write(line)
    writer.close()`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">🔍 Remember:</span>
                    String methods like replace create new strings—they don't modify
                    the original. This is because strings are immutable!
                  </p>
                </div>
              </section>
  );
}
