import React from "react";

export default function RealWorldSpellingBee() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Real-World Application: Spelling Bee
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The New York Times Spelling Bee is a word puzzle that uses all the
                  concepts you've learned. Players must form words using seven
                  letters, with one letter required.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Rules
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• Words must have at least four letters</p>
                    <p>• Words must use only the seven available letters</p>
                    <p>• Words must include the required letter</p>
                    <p>• Letters can be repeated</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Example Puzzle
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Available letters: A, C, D, L, O, R, T (with R required)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded p-4">
                      <p className="font-bold text-green-800 mb-2">✓ Valid Words</p>
                      <p className="text-gray-700">• "color" (uses R, 5+ letters)</p>
                      <p className="text-gray-700">
                        • "ratatat" (uses R, repeats allowed)
                      </p>
                      <p className="text-gray-700">• "doctor" (uses R, 6 letters)</p>
                    </div>
                    <div className="bg-red-50 rounded p-4">
                      <p className="font-bold text-red-800 mb-2">✗ Invalid Words</p>
                      <p className="text-gray-700">• "told" (no R)</p>
                      <p className="text-gray-700">• "rat" (only 3 letters)</p>
                      <p className="text-gray-700">• "bee" (uses E, not available)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Scoring System
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• Four-letter words: 1 point each</p>
                    <p>• Longer words: 1 point per letter</p>
                    <p>• Pangrams (use all 7 letters): 7 bonus points!</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 mt-4">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Scoring examples
    "card"     → 1 point   (4-letter word)
    "color"    → 5 points  (5 letters)
    "cartload" → 15 points (8 letters + 7 bonus for pangram)`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">🎯 Challenge:</span> In
                    the exercises, you'll write functions to check if words are
                    valid and calculate their scores!
                  </p>
                </div>
              </section>
  );
}
