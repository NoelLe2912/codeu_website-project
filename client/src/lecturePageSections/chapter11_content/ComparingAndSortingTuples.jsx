import React from "react";

export default function ComparingAndSortingTuples() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Comparing and Sorting Tuples
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Tuples can be compared and sorted. Python compares element by
                  element from left to right, making this useful for custom sorting
                  strategies.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Tuple Comparison
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tuples are compared element by element:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`(0, 1, 2) < (0, 3, 4)
    # True (1 < 3, so first tuple is smaller)

    # Later elements don't matter if earlier ones differ
    (0, 1, 2000000) < (0, 3, 4)
    # True`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Sorting with Default Behavior
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sort tuples by first element, then second to break ties:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`counter = {'b': 1, 'a': 3, 'n': 2}
    items = counter.items()

    sorted(items)
    # [('a', 3), ('b', 1), ('n', 2)]`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Custom Sort Keys
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use a key function to sort by specific criteria:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def second_element(t):
        return t[1]

    # Sort by count (second element)
    sorted_items = sorted(items, key=second_element)
    sorted_items
    # [('b', 1), ('n', 2), ('a', 3)]

    # Get most common letter
    sorted_items[-1]
    # ('a', 3)`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using max() with Key
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Find maximum without sorting the entire list:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# More efficient - no sorting needed
    max(items, key=second_element)
    # ('a', 3)`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800"
                      >⚡ Performance Tip:</span
                    >
                    Use max() or min() with a key function when you only need the
                    extreme value—it's faster than sorting the entire collection.
                  </p>
                </div>
              </section>
  );
}
