import React from "react";

export default function ConvertingBetweenListsAndStrings() {
  return (
    <section
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Converting Between Lists and Strings
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Lists and strings are closely related. Python provides powerful
                  methods to convert between them—essential for text processing.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    String to List of Characters
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use list() to break a string into individual characters:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`s = 'spam'
    t = list(s)
    t
    # ['s', 'p', 'a', 'm']`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    String to List of Words
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use split() to break a string into words:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`s = 'pining for the fjords'
    t = s.split()
    t
    # ['pining', 'for', 'the', 'fjords']

    # Split with custom delimiter
    s = 'ex-parrot'
    t = s.split('-')
    t
    # ['ex', 'parrot']`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    List to String
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use join() to combine list elements into a string:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`t = ['pining', 'for', 'the', 'fjords']

    # Join with spaces
    delimiter = ' '
    s = delimiter.join(t)
    s
    # 'pining for the fjords'

    # Join with no spaces
    ''.join(t)
    # 'piningforthefjords'

    # Join with custom delimiter
    '-'.join(t)
    # 'pining-for-the-fjords'`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">🔤 Important:</span>
                    join() is a string method, not a list method! Call it on the
                    delimiter string and pass the list as an argument.
                  </p>
                </div>
              </section>
  );
}
