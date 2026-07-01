import React from "react";

export default function LoopingThroughStrings() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Looping Through Strings
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In Chapter 3, you learned to use for loops with the range
                  function. Now you'll discover that you can loop through the
                  characters in a string just as easily! This opens up powerful
                  possibilities for text processing.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic String Loop
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can use a for loop to access each character in a string, one
                    at a time:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`for letter in 'Gadsby':
        print(letter, end=' ')

    # Output: G a d s b y`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Loop Variable
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The variable defined in a for loop (like letter above) is called
                    the loop variable. It's good practice to give it a descriptive
                    name that makes your code easier to understand.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Less clear
    for i in 'Python':
        print(i)

    # More clear
    for character in 'Python':
        print(character)`}</code></pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Checking for Specific Letters
                  </h3>
                  <p className="text-gray-700 mb-4">
                    By combining loops with if statements, you can search for
                    specific characters:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`for letter in "Gadsby":
        if letter == 'E' or letter == 'e':
            print('This word has an "e"')`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">💡 Fun Fact:</span> In
                    1939, Ernest Vincent Wright published a 50,000-word novel called
                    "Gadsby" without using the letter "e" even once—quite a
                    challenge since "e" is the most common letter in English!
                  </p>
                </div>
              </section>
  );
}
