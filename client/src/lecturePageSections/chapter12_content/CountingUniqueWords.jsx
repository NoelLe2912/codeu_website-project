import React from "react";

export default function CountingUniqueWords() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Counting Unique Words
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Text analysis begins with understanding what words appear in a
                  text and how often. We'll use dictionaries to track unique words
                  and their frequencies—the foundation of natural language
                  processing.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Word Counting
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use a dictionary to track unique words:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`text = "the quick brown fox jumps over the lazy dog"

    unique_words = {}
    for word in text.split():
        unique_words[word] = 1

    len(unique_words)
    # 8 (unique words)

    # The words are the keys
    list(unique_words.keys())
    # ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Finding Longest Words
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sort words by length using a key function:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Sort by length
    sorted(unique_words, key=len)
    # ['the', 'fox', 'dog', 'over', 'lazy', 'quick', 'brown', 'jumps']

    # Get the 3 longest words
    sorted(unique_words, key=len)[-3:]
    # ['quick', 'brown', 'jumps']`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">💡 Key Insight:</span>
                    Using dictionary keys to store unique items is a common pattern.
                    The values don't matter—we're just using the dictionary to track
                    what we've seen.
                  </p>
                </div>
              </section>
  );
}
