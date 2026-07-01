import React from "react";

export default function DictionarySubtraction() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Dictionary Subtraction
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sometimes you need to find elements in one set that aren't in
                  another. Dictionary subtraction lets you compare two dictionaries
                  and find the differences.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Subtract Function
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Find keys in d1 that are not in d2:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def subtract(d1, d2):
        res = {}
        for key in d1:
            if key not in d2:
                res[key] = d1[key]
        return res

    # Example: spell checking
    book_words = {'the': 100, 'cat': 5, 'happyness': 1}
    valid_words = {'the': 1, 'cat': 1, 'happiness': 1}

    misspelled = subtract(book_words, valid_words)
    misspelled
    # {'happyness': 1}`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Finding Rare Words
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Filter words that appear only once:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`singletons = []
    for word, freq in word_counter.items():
        if freq == 1:
            singletons.append(word)

    print(singletons)
    # ['cat', 'in', 'hat', 'sat', 'on', 'mat']`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">🎯 Use Case:</span>
                    Dictionary subtraction is perfect for spell-checking, finding
                    unique items, or comparing datasets.
                  </p>
                </div>
              </section>
  );
}
