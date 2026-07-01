import React from "react";

export default function ExpressionsVsStatements() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Expressions vs Statements
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Understanding the difference between expressions and statements is
                  fundamental to reading and writing Python code.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div
                    className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Expressions
                    </h3>
                    <p className="text-gray-700 mb-4">
                      An expression is anything that has a value. When Python
                      evaluates an expression, it produces a result.
                    </p>
                    <div className="bg-gray-900 rounded p-4">
                      <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>42
    7 + 5
    math.sqrt(25)
    user_name</code></pre>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Statements
                    </h3>
                    <p className="text-gray-700 mb-4">
                      A statement is a command that does something. When Python
                      executes a statement, it performs an action.
                    </p>
                    <div className="bg-gray-900 rounded p-4">
                      <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>x = 10
    import math
    print(x)</code></pre>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Key Differences
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <span className="font-bold text-blue-600">Expressions</span> have
                      values that can be used in calculations
                    </p>
                    <p>
                      <span className="font-bold text-green-600">Statements</span>
                      perform actions but don't produce values
                    </p>
                    <p>
                      <span className="font-bold text-purple-600">Example:</span> In
                      <code className="bg-gray-900 text-green-400 px-2 py-1 rounded"
                        >total = 15 + 7</code
                      >, the part
                      <code className="bg-gray-900 text-green-400 px-2 py-1 rounded"
                        >15 + 7</code
                      >
                      is an expression (value: 22), and the whole line is a
                      statement (action: assign)
                    </p>
                  </div>
                </div>
              </section>
  );
}
