import React from "react";

export default function StringSubstitutionWithRegex() {
  return (
    <section
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  String Substitution with Regex
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The re.sub function performs find-and-replace operations using
                  regex patterns, making it more powerful than the basic replace
                  method.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Substitution
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use re.sub to replace patterns with new text:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`import re

    pattern = 'colou?r'
    text = 'The colour of the coloured fabric'

    # Replace all matches
    result = re.sub(pattern, 'color', text)
    result
    # 'The color of the colored fabric'`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Processing Entire Files
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Combine regex substitution with file processing:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`import re

    # Convert British to American spelling
    pattern = 'colou?r'
    writer = open('output.txt', 'w')

    for line in open('input.txt'):
        line = re.sub(pattern, 'color', line)
        writer.write(line)

    writer.close()`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">🎯 Practical Use:</span>
                    Regex substitution is perfect for standardizing text, fixing
                    formatting issues, or converting between variations (like
                    British vs American spelling).
                  </p>
                </div>
              </section>
  );
}
