import React from "react";

export default function IntroToRegex() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Introduction to Regular Expressions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Regular expressions (regex) are powerful patterns that let you
                  search for complex text patterns. They go far beyond simple
                  substring matching.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Pattern Matching
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Import the re module and use search to find patterns:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`import re

    text = "I am Dracula; and I bid you welcome, Mr. Harker."
    pattern = 'Dracula'

    result = re.search(pattern, text)
    result
    # &lt;re.Match object; span=(5, 12), match='Dracula'&gt;`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Working with Match Objects
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When search finds a match, it returns a Match object with useful
                    information:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Get the matched text
    result.group()
    # 'Dracula'

    # Get the position (start, end)
    result.span()
    # (5, 12)

    # Get the original string
    result.string
    # 'I am Dracula; and I bid you welcome, Mr. Harker.'`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Handling No Match
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If the pattern isn't found, search returns None:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`result = re.search('Count', text)
    print(result)
    # None

    # Check before using the result
    if result != None:
        print(result.group())
    else:
        print('Pattern not found')`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800"
                      >💡 Starting Simple:</span
                    >
                    For now, we're using regex just like the in operator. The real
                    power comes with special characters that let you match complex
                    patterns!
                  </p>
                </div>
              </section>
  );
}
