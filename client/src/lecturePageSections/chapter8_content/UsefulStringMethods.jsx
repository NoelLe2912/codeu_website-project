import React from "react";

export default function UsefulStringMethods() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Useful String Methods
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Strings come with many built-in methods that perform common
                  operations. Methods are functions associated with objects, called
                  using the dot operator.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Case Conversion Methods
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Convert between uppercase and lowercase:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`word = 'banana'

    # Convert to uppercase
    new_word = word.upper()
    new_word
    # 'BANANA'

    # Convert to lowercase
    mixed = 'BaNaNa'
    mixed.lower()
    # 'banana'`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Testing String Content
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Check what a string starts or ends with:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`line = '*** START OF BOOK ***'

    # Check if it starts with a pattern
    line.startswith('***')
    # True

    line.startswith('Chapter')
    # False

    # Check if it ends with a pattern
    filename = 'document.txt'
    filename.endswith('.txt')
    # True`}</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">
                      Method Syntax
                    </h4>
                    <p className="text-gray-700 mb-3">Methods use the dot operator:</p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-green-400 text-sm">string.method()</code>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">
                      Function Syntax
                    </h4>
                    <p className="text-gray-700 mb-3">Functions use parentheses:</p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-purple-400 text-sm">function(string)</code>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">📚 Terminology:</span>
                    When you call a method on an object (like word.upper()), this is
                    called an invocation. You are "invoking" the upper method on
                    word.
                  </p>
                </div>
              </section>
  );
}
