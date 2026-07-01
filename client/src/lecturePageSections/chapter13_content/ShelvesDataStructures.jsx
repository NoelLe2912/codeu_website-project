import React from "react";

export default function ShelvesDataStructures() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Storing Data Structures in Shelves</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Shelves can store complex data structures like lists and dictionaries as values. However, there's a tricky gotcha when updating mutable values!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lists as Values</h3>
                <p className="text-gray-700 mb-4">
                  Store lists of related items:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Example: anagram database
    # def sort_word(word):
    #     return ''.join(sorted(word))

    # db = shelve.open('anagrams', 'n')

    # Store a list
    # key = sort_word('pots')  # 'opst'
    # db[key] = ['pots']
    # db[key]
    # ['pots']`}</code></pre>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Update Gotcha!</h3>
                <p className="text-gray-700 mb-4">
                  You can't modify shelf values in place:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# WRONG - doesn't update the shelf!
    # db[key].append('tops')
    # db[key]
    # ['pots']  # Still only one word!

    # The problem: Getting the value creates a copy
    # Modifying the copy doesn't affect the shelf`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Correct Way</h3>
                <p className="text-gray-700 mb-4">
                  Read, modify, write back:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# CORRECT - read, modify, write
    # anagram_list = db[key]      # Read
    # anagram_list.append('tops')  # Modify
    # db[key] = anagram_list       # Write back

    # db[key]
    # ['pots', 'tops']  # Now it works!`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">🔑 Remember:</span> Always use the three-step pattern: read the value, modify it, write it back. Direct modification doesn't work!
                </p>
              </div>
            </section>
  );
}
