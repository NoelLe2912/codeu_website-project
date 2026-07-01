import React from "react";

export default function WritingComments() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Writing Comments
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Comments are notes to yourself and other programmers. They explain
                  what your code does in plain English, making it easier to
                  understand and maintain.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How to Write Comments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Any text after a # symbol is ignored by Python. Comments can
                    appear on their own line or at the end of a code line.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># Calculate total minutes in a day
    minutes = 24 * 60

    hours = 8      # typical work day length</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      ✓ Good Comments
                    </h4>
                    <div className="bg-gray-900 rounded p-4">
                      <pre
                        className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                      ><code># velocity in meters/second
    v = 15

    # convert temperature to Celsius
    celsius = (fahr - 32) * 5/9</code></pre>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 text-xl">
                      ✗ Useless Comments
                    </h4>
                    <div className="bg-gray-900 rounded p-4">
                      <pre
                        className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                      ><code># assign 15 to v
    v = 15

    # add two numbers
    result = x + y</code></pre>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-blue-800"
                      >📝 Comment Best Practices:</span
                    >
                    Explain why you're doing something, not what the code obviously
                    does. Assume readers can read Python—help them understand your
                    reasoning and intent.
                  </p>
                </div>
              </section>
  );
}
