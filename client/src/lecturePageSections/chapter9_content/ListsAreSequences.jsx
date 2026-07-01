import React from "react";

export default function ListsAreSequences() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Lists Are Sequences
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Like strings, lists are sequences of values. But unlike strings,
                  where values must be characters, lists can contain any type of
                  value—numbers, strings, or even other lists!
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating Lists
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use square brackets to create a list with elements:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# List of integers
    numbers = [42, 123]

    # List of strings
    cheeses = ['Cheddar', 'Edam', 'Gouda']

    # Mixed types
    t = ['spam', 2.0, 5, [10, 20]]

    # Empty list
    empty = []`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    List Properties
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• Elements can be any type—and can be mixed</p>
                    <p>• Lists can contain other lists (nested lists)</p>
                    <p>• Use len() to get the number of elements</p>
                    <p>• Empty lists have length 0</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 mt-4">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`len(cheeses)
    # 3

    len(empty)
    # 0

    len(t)
    # 4 (nested list counts as one element)`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Nested Lists
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A list within another list is called a nested list:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`t = ['spam', 2.0, 5, [10, 20]]

    # The nested list is a single element
    len(t)
    # 4

    # 10 is inside the nested list, not in t
    10 in t
    # False

    # But the nested list itself is in t
    [10, 20] in t
    # True`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800"
                      >💡 Key Difference:</span
                    >
                    Strings can only contain characters. Lists can contain
                    anything—including other lists!
                  </p>
                </div>
              </section>
  );
}
