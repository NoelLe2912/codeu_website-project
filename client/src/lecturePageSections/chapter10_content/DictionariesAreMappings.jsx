import React from "react";

export default function DictionariesAreMappings() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Dictionaries Are Mappings</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A dictionary is like a list, but more powerful. Instead of using only integers as indices, dictionaries can use almost any type as a key. This makes them perfect for creating associations between related data.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Limitation of Lists</h3>
                <p className="text-gray-700 mb-4">
                  With a list, you can only look up values by integer index:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`lst = ['zero', 'one', 'two']

    # Look up by integer index
    lst[1]
    # 'one'

    # But can't look up by word!
    # How do we find which number "one" represents?`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Creating a Dictionary</h3>
                <p className="text-gray-700 mb-4">
                  Use curly braces {} to create an empty dictionary, then add items:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Create empty dictionary
    numbers = {}

    # Add key-value pairs
    numbers['zero'] = 0
    numbers['one'] = 1
    numbers['two'] = 2

    numbers
    # {'zero': 0, 'one': 1, 'two': 2}`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Looking Up Values</h3>
                <p className="text-gray-700 mb-4">
                  Use the bracket operator with a key to get the corresponding value:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`numbers['two']
    # 2

    # If key doesn't exist, you get an error
    numbers['three']
    # KeyError: 'three'`}</code></pre>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dictionary Properties</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Each item contains a key and a value, separated by a colon (:)</p>
                  <p>• Keys must be unique (no duplicates allowed)</p>
                  <p>• Use len() to count the number of items</p>
                  <p>• Keys can be almost any type (strings, numbers, tuples)</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 mt-4">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`len(numbers)
    # 3`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">💡 Key Concept:</span> A dictionary represents a mapping from keys to values. Each key "maps to" its associated value, creating a powerful lookup system.
                </p>
              </div>
            </section>
  );
}
