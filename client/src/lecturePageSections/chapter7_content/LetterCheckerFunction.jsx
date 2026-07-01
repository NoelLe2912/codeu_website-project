import React from "react";

export default function LetterCheckerFunction() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Creating a Letter Checker Function
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Let's turn our letter-checking code into a reusable function.
                  We'll start simple and gradually improve it.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Step 1: Basic Function
                  </h3>
                  <p className="text-gray-700 mb-4">
                    First, let's encapsulate the loop in a function:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def has_e():
        for letter in "Gadsby":
            if letter == 'E' or letter == 'e':
                print('This word has an "e"')`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Step 2: Return a Value
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Let's make it a pure function that returns True or False:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def has_e():
        for letter in "Gadsby":
            if letter == 'E' or letter == 'e':
                return True
        return False`}</code></pre>
                  </div>
                  <p className="text-gray-700 mt-4">
                    Notice the two return statements: one inside the loop (when we
                    find an "e") and one outside (when we don't find any).
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Step 3: Add a Parameter
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Now let's make it work with any word by adding a parameter:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def has_e(word):
        for letter in word:
            if letter == 'E' or letter == 'e':
                return True
        return False

    # Test it
    has_e('Gadsby')  # Returns: False
    has_e('Emma')    # Returns: True`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">🎯 Key Pattern:</span>
                    When searching for something in a sequence, return True as soon
                    as you find it. Only return False after checking everything.
                  </p>
                </div>
              </section>
  );
}
