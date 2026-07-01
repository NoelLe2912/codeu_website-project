import React from "react";

export default function CleaningTextData() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Cleaning Text Data
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Real text contains punctuation, capitalization, and other noise.
                  We need to clean it before analysis to get accurate results.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Removing Punctuation
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use strip() to remove punctuation from word boundaries:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`punctuation = '.!?,;:\'"'

    def clean_word(word):
        return word.strip(punctuation).lower()

    # Test it
    clean_word('"Hello!"')
    # 'hello'

    clean_word('world.')
    # 'world'`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Processing Complete Text
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Apply cleaning to all words in a text:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`text = "Hello, world! How are you? I'm fine, thanks."

    unique_words = {}
    for word in text.split():
        word = clean_word(word)
        if word:  # Skip empty strings
            unique_words[word] = 1

    list(unique_words.keys())
    # ['hello', 'world', 'how', 'are', 'you', "i'm", 'fine', 'thanks']`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">🧹 Important:</span>
                    Always clean and normalize text before analysis. Convert to
                    lowercase and remove punctuation for consistent results.
                  </p>
                </div>
              </section>
  );
}
