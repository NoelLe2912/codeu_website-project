import React from "react";

export default function CountingWordFrequencies() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Counting Word Frequencies
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Instead of just tracking unique words, we can count how many times
                  each word appears. This reveals patterns about which words are
                  most important or common.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Building a Word Counter
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Count occurrences using a dictionary:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`text = "the cat in the hat sat on the mat"

    word_counter = {}
    for word in text.split():
        if word not in word_counter:
            word_counter[word] = 1
        else:
            word_counter[word] += 1

    word_counter
    # {'the': 3, 'cat': 1, 'in': 1, 'hat': 1, 'sat': 1, 'on': 1, 'mat': 1}`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Finding Most Common Words
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sort by frequency to find the most common words:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def second_element(t):
        return t[1]

    # Sort items by frequency
    items = sorted(word_counter.items(), 
                   key=second_element, 
                   reverse=True)

    # Print top 3
    for word, freq in items[:3]:
        print(freq, word)

    # Output:
    # 3 the
    # 1 cat
    # 1 in`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">📊 Pattern:</span> This
                    frequency counting pattern is fundamental to text analysis,
                    search engines, and recommendation systems!
                  </p>
                </div>
              </section>
  );
}
