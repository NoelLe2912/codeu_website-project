import React from "react";

export default function LoopingThroughDictionaries() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Looping Through Dictionaries</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you use a for loop with a dictionary, it automatically loops through the keys. You can also loop through values or key-value pairs.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Looping Through Keys</h3>
                <p className="text-gray-700 mb-4">
                  By default, for loops iterate over keys:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`counter = value_counts('banana')
    counter
    # {'b': 1, 'a': 3, 'n': 2}

    for key in counter:
        print(key)

    # Output:
    # b
    # a
    # n`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Looping Through Values</h3>
                <p className="text-gray-700 mb-4">
                  Use the values() method to loop through values:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`for value in counter.values():
        print(value)

    # Output:
    # 1
    # 3
    # 2`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Looping Through Keys and Values</h3>
                <p className="text-gray-700 mb-4">
                  Loop through keys and look up each value:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`for key in counter:
        value = counter[key]
        print(key, value)

    # Output:
    # b 1
    # a 3
    # n 2`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">💡 Note:</span> There's an even more concise way to loop through both keys and values using items()—you'll learn this in future chapters!
                </p>
              </div>
            </section>
  );
}
