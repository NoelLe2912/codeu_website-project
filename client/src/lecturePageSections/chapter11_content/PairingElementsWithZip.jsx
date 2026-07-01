import React from "react";

export default function PairingElementsWithZip() {
  return (
    <section
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Pairing Elements with zip()
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The zip() function pairs up elements from multiple sequences,
                  making it easy to process corresponding items together—like the
                  teeth of a zipper coming together.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Zipping
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Loop through two sequences simultaneously:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`scores1 = [1, 2, 4, 5, 1, 5, 2]
    scores2 = [5, 5, 2, 2, 5, 2, 3]

    for pair in zip(scores1, scores2):
        print(pair)

    # Output:
    # (1, 5)
    # (2, 5)
    # (4, 2)
    # (5, 2)
    # (1, 5)
    # (5, 2)
    # (2, 3)`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Unpacking Pairs
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use tuple assignment to work with paired values:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`wins = 0
    for team1, team2 in zip(scores1, scores2):
        if team1 > team2:
            wins += 1

    wins
    # 3`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating Lists of Tuples
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Convert a zip object to a list of tuples:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`t = list(zip(scores1, scores2))
    t
    # [(1, 5), (2, 5), (4, 2), (5, 2), (1, 5), (5, 2), (2, 3)]

    # Get the last game result
    t[-1]
    # (2, 3)`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating Dictionaries from Pairs
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Combine zip() and dict() to map letters to positions:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`letters = 'abcdefghijklmnopqrstuvwxyz'
    numbers = range(len(letters))
    letter_map = dict(zip(letters, numbers))

    letter_map['a'], letter_map['z']
    # (0, 25)`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Enumerate for Indices
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use enumerate() when you need both indices and elements:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`for index, element in enumerate('abc'):
        print(index, element)

    # Output:
    # 0 a
    # 1 b
    # 2 c`}</code></pre>
                  </div>
                </div>
              </section>
  );
}
