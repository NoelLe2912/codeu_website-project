import React from "react";

export default function DifferentWaysToCreateDictionaries() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Different Ways to Create Dictionaries</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Python provides multiple ways to create dictionaries. Choose the method that best fits your needs.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Method 1: All at Once</h3>
                <p className="text-gray-700 mb-4">
                  Create a dictionary with initial items using curly braces:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`numbers = {'zero': 0, 'one': 1, 'two': 2}
    numbers
    # {'zero': 0, 'one': 1, 'two': 2}`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Method 2: Using dict()</h3>
                <p className="text-gray-700 mb-4">
                  The dict() function can create empty dictionaries or copies:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Create empty dictionary
    empty = dict()
    empty
    # {}

    # Make a copy of an existing dictionary
    numbers_copy = dict(numbers)
    numbers_copy
    # {'zero': 0, 'one': 1, 'two': 2}`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">🔄 Best Practice:</span> Create a copy before modifying a dictionary if you want to preserve the original. Changes to a copy don't affect the original.
                </p>
              </div>
            </section>
  );
}
