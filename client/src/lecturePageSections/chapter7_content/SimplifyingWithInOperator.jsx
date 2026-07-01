import React from "react";

export default function SimplifyingWithInOperator() {
  return (
    <section
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Simplifying with the in Operator
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Python provides a powerful in operator that checks whether a
                  character (or substring) appears in a string. This can greatly
                  simplify our code.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic in Operator Usage
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The in operator returns True if the character is found, False
                    otherwise:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`word = 'Gadsby'
    'e' in word
    # False

    'a' in word
    # True`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Simplifying has_e
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We can rewrite has_e using the in operator:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Version 1: Using in operator
    def has_e(word):
        if 'E' in word or 'e' in word:
            return True
        else:
            return False

    # Version 2: Even simpler!
    def has_e(word):
        return 'E' in word or 'e' in word`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using the lower Method
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The lower method converts all letters to lowercase, making our
                    function even cleaner:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`word = 'Gadsby'
    word.lower()
    # 'gadsby'

    # Simplest version of has_e
    def has_e(word):
        return 'e' in word.lower()

    has_e('Gadsby')  # False
    has_e('Emma')    # True`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">⚡ Important:</span> The
                    lower method creates a new string—it doesn't modify the
                    original. The value of word remains 'Gadsby', not 'gadsby'.
                  </p>
                </div>
              </section>
  );
}
