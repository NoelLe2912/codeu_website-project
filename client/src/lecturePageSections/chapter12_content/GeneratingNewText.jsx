import React from "react";

export default function GeneratingNewText() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Generating New Text
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Using the successor map, we can generate new text that follows the
                  same patterns as the original. This is a simple version of how
                  predictive text and AI language models work!
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Generation Algorithm
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Start with a word, then repeatedly choose successors:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`import random

    # Start with a word
    word = 'the'
    result = [word]

    # Generate 10 more words
    for i in range(10):
        if word in successor_map:
            # Get possible successors
            successors = successor_map[word]
            # Choose one randomly
            word = random.choice(successors)
            result.append(word)
        else:
            break

    print(' '.join(result))
    # Example output: "the cat sat on the mat the cat ran"`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Why It Works
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <span className="font-bold text-blue-600">Step 1:</span> Start
                      with any word from the original text
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 2:</span> Look up
                      which words can follow it
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 3:</span> Choose
                      one randomly (common successors chosen more often)
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 4:</span> Repeat
                      with the chosen word
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Improving Results
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Better results with bigrams as keys (trigram analysis):
                  </p>
                  <div className="space-y-2 text-gray-700 ml-4">
                    <p>• Instead of mapping single words to successors</p>
                    <p>• Map word pairs (bigrams) to their successors</p>
                    <p>• This preserves more context and generates better text</p>
                    <p>• Example: ("the", "cat") → ["sat", "ran"]</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800"
                      >🤖 Real-World Connection:</span
                    >
                    This is essentially how early chatbots worked! Modern LLMs use
                    the same core idea but with billions of parameters and much more
                    context.
                  </p>
                </div>
              </section>
  );
}
