import React from "react";

export default function ListsAndDictionariesTogether() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Lists and Dictionaries Together</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You can use lists as dictionary values, but not as keys. Understanding why requires knowing about hash tables and immutability.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lists as Values: Allowed</h3>
                <p className="text-gray-700 mb-4">
                  You can store lists as dictionary values:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`d = {4: ['r', 'o', 'u', 's']}
    d
    # {4: ['r', 'o', 'u', 's']}`}</code></pre>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lists as Keys: Not Allowed</h3>
                <p className="text-gray-700 mb-4">
                  Attempting to use a list as a key causes a TypeError:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`letters = ['a', 'b', 'c', 'd']
    d[letters] = 4
    # TypeError: unhashable type: 'list'`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Keys Must Be Hashable</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Dictionaries use hash functions to compute integer hash values from keys</p>
                  <p>• These hash values determine where to store items in memory</p>
                  <p>• If a key could change (is mutable), its hash value would change</p>
                  <p>• This would break the dictionary's internal organization</p>
                  <p>• Therefore, keys must be immutable (hashable)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-3 text-xl">✓ Hashable (Can Be Keys)</h4>
                  <p className="text-gray-700">• Strings</p>
                  <p className="text-gray-700">• Numbers (int, float)</p>
                  <p className="text-gray-700">• Tuples (if they contain only hashable items)</p>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-800 mb-3 text-xl">✗ Not Hashable (Cannot Be Keys)</h4>
                  <p className="text-gray-700">• Lists</p>
                  <p className="text-gray-700">• Dictionaries</p>
                  <p className="text-gray-700">• Sets</p>
                </div>
              </div>
            </section>
  );
}
