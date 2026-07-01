import React from "react";

export default function PowerfulRegexPatterns() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Powerful Regex Patterns
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Regular expressions use special characters to create flexible
                  patterns. These let you search for variations and alternatives
                  that would be tedious with basic string methods.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The OR Operator (|)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use | to match either one pattern or another:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`import re

    # Match either "Mina" or "Murray"
    pattern = 'Mina|Murray'
    text = 'CHAPTER V. Letters—Lucy and Mina'

    result = re.search(pattern, text)
    result.group()
    # 'Mina'`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Anchors: Start (^) and End ($)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use ^ to match the beginning and $ to match the end of a line:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Match lines starting with "Chapter"
    pattern = '^Chapter'
    result = re.search(pattern, 'Chapter 1. Introduction')
    result.group()
    # 'Chapter'

    # Match lines ending with "END"
    pattern = 'END$'
    result = re.search(pattern, 'THE END')
    result.group()
    # 'END'`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Grouping with Parentheses
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use parentheses to group parts of a pattern:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Match "center" or "centre" (British spelling)
    pattern = 'cent(er|re)'

    text = 'the centre of the room'
    result = re.search(pattern, text)
    result.group()
    # 'centre'`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Optional Characters (?)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use ? to make the previous character optional:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Match "color" or "colour"
    pattern = 'colou?r'

    # Matches with 'u'
    re.search(pattern, 'colour').group()
    # 'colour'

    # Matches without 'u'
    re.search(pattern, 'color').group()
    # 'color'`}</code></pre>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Common Regex Special Characters
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white rounded p-4">
                      <code className="text-blue-600 font-bold">|</code>
                      <p className="text-sm text-gray-700 mt-2">
                        OR - match either pattern
                      </p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <code className="text-blue-600 font-bold">^</code>
                      <p className="text-sm text-gray-700 mt-2">Start of string</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <code className="text-blue-600 font-bold">$</code>
                      <p className="text-sm text-gray-700 mt-2">End of string</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <code className="text-blue-600 font-bold">?</code>
                      <p className="text-sm text-gray-700 mt-2">
                        Optional (0 or 1 times)
                      </p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <code className="text-blue-600 font-bold">()</code>
                      <p className="text-sm text-gray-700 mt-2">Grouping</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <code className="text-blue-600 font-bold">.</code>
                      <p className="text-sm text-gray-700 mt-2">Any character</p>
                    </div>
                  </div>
                </div>
              </section>
  );
}
