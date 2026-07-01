import React from "react";

export default function RealWorldWordle() {
  return (
    <section
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Real-World Application: Wordle
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Wordle is a popular word game where you guess a five-letter word
                  in six attempts. After each guess, you learn which letters are in
                  the word and which are in the correct position.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How Wordle Works
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• You have six attempts to guess a five-letter word</p>
                    <p>• Each guess must be a valid English word</p>
                    <p>• After each guess, letters are colored:</p>
                    <div className="ml-6 space-y-2">
                      <p>
                        <span
                          className="bg-green-500 text-white px-2 py-1 rounded font-bold"
                          >Green</span
                        >
                        - Letter is correct and in the right position
                      </p>
                      <p>
                        <span
                          className="bg-yellow-500 text-white px-2 py-1 rounded font-bold"
                          >Yellow</span
                        >
                        - Letter is in the word but wrong position
                      </p>
                      <p>
                        <span
                          className="bg-gray-500 text-white px-2 py-1 rounded font-bold"
                          >Gray</span
                        >
                        - Letter is not in the word
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Example Game
                  </h3>
                  <p className="text-gray-700 mb-4">Target word: MOWER</p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold mb-2">Guess 1: TRIED</p>
                    <div className="flex gap-2">
                      <div
                        className="bg-gray-500 text-white px-4 py-2 rounded font-bold"
                      >
                        T
                      </div>
                      <div
                        className="bg-gray-500 text-white px-4 py-2 rounded font-bold"
                      >
                        R
                      </div>
                      <div
                        className="bg-gray-500 text-white px-4 py-2 rounded font-bold"
                      >
                        I
                      </div>
                      <div
                        className="bg-green-500 text-white px-4 py-2 rounded font-bold"
                      >
                        E
                      </div>
                      <div
                        className="bg-gray-500 text-white px-4 py-2 rounded font-bold"
                      >
                        D
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      E is in position 5! R is in the word but wrong spot.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using String Methods to Solve Wordle
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can write functions to check which words are still possible:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def check_word(word):
        # Example: After guessing SPADE and CLERK
        # We know: E is in word but not positions 4 or 5
        #          S, P, A, D, C, L, R, K not in word
    
        forbidden = 'spadclrk'
        if uses_any(word, forbidden):
            return False
    
        if 'e' not in word:
            return False
    
        if word[3] == 'e' or word[4] == 'e':
            return False
    
        return True

    # Count valid words
    count = 0
    for line in open('words.txt'):
        word = line.strip()
        if len(word) == 5 and check_word(word):
            count += 1

    print(f'{count} words possible')`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">🎮 Challenge:</span> In
                    the exercises, you'll write functions to solve Wordle puzzles
                    using all the string techniques you've learned!
                  </p>
                </div>
              </section>
  );
}
