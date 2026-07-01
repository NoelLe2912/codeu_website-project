import React from "react";

export default function UnderstandingTracebacks() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Understanding Tracebacks
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When an error occurs inside a function, Python shows you a
                  traceback—a report of which functions were running when the error
                  happened.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Reading Tracebacks
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A traceback shows the chain of function calls from your main
                    code down to where the error occurred:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>Traceback (most recent call last):
      File "main.py", line 10, in &lt;module&gt;
        combine_and_display(word1, word2)
      File "main.py", line 5, in combine_and_display
        print(undefined_var)
    NameError: name 'undefined_var' is not defined</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How to Read It
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <span className="font-bold text-yellow-800">Top:</span> Shows
                      where you called the function
                    </p>
                    <p>
                      <span className="font-bold text-yellow-800">Middle:</span> Shows
                      the chain of function calls
                    </p>
                    <p>
                      <span className="font-bold text-yellow-800">Bottom:</span> Shows
                      exactly where the error occurred and what went wrong
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-red-800">🔍 Debugging Tip:</span>
                    Start reading from the bottom of the traceback—that's where the
                    actual error is. The lines above show how you got there.
                  </p>
                </div>
              </section>
  );
}
