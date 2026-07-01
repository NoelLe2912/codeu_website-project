import React from "react";

export default function CollectionOfCounters() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">A Collection of Counters</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dictionaries are perfect for counting how many times things appear. This pattern—using a dictionary to count occurrences—is extremely common in data analysis.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Counting Pattern</h3>
                <p className="text-gray-700 mb-4">
                  For each item, if it's new, set count to 1. If it exists, increment the count:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def value_counts(string):
        counter = {}
        for letter in string:
            if letter not in counter:
                counter[letter] = 1
            else:
                counter[letter] += 1
        return counter

    counter = value_counts('brontosaurus')
    counter
    # {'b': 1, 'r': 2, 'o': 2, 'n': 1, 't': 1, 's': 2, 'a': 1, 'u': 2}`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-blue-600">Step 1:</span> Start with an empty dictionary</p>
                  <p><span className="font-bold text-blue-600">Step 2:</span> Loop through each letter</p>
                  <p><span className="font-bold text-blue-600">Step 3:</span> If letter is new, add it with count 1</p>
                  <p><span className="font-bold text-blue-600">Step 4:</span> If letter exists, increment its count</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">📊 Common Pattern:</span> This counting technique works for anything—letters, words, items, events. It's one of the most useful dictionary patterns!
                </p>
              </div>
            </section>
  );
}
