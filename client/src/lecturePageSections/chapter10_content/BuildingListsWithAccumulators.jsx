import React from "react";

export default function BuildingListsWithAccumulators() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Building Lists with Accumulators</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A common pattern is to loop through one collection while building another. The variable that collects items is called an accumulator.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Counting Palindromes</h3>
                <p className="text-gray-700 mb-4">
                  First, let's count how many palindromes exist:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def is_palindrome(word):
        return reverse_word(word) == word

    count = 0
    for word in word_dict:
        if is_palindrome(word):
            count += 1

    count
    # 91`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collecting Palindromes</h3>
                <p className="text-gray-700 mb-4">
                  Now let's build a list of palindromes using an accumulator:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`palindromes = []

    for word in word_dict:
        if is_palindrome(word):
            palindromes.append(word)

    palindromes[:10]
    # ['aa', 'aba', 'aga', 'aha', 'ala', 'alula', 'ama', 'ana', 'anna', 'ava']`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filtering Long Palindromes</h3>
                <p className="text-gray-700 mb-4">
                  Loop through the list again to select only long palindromes:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`long_palindromes = []

    for word in palindromes:
        if len(word) >= 7:
            long_palindromes.append(word)

    long_palindromes
    # ['deified', 'halalah', 'reifier', 'repaper', 'reviver', 
    #  'rotator', 'sememes']`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">🎯 Pattern Name:</span> Looping through a collection and selecting some elements while omitting others is called filtering.
                </p>
              </div>
            </section>
  );
}
