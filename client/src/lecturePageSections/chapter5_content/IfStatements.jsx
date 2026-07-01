import React from "react";

export default function IfStatements() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">If Statements</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Conditional statements let you execute different code based on whether conditions are true or false. This is how programs make decisions.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic If Statement</h3>
                <p className="text-gray-700 mb-4">
                  The simplest form executes code only if a condition is true:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`x = 10

    if x > 0:
        print('x is positive')
        print('This runs too!')

    # Both lines execute because x > 0 is True`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The else Clause</h3>
                <p className="text-gray-700 mb-4">
                  Use else to specify what happens when the condition is false:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`x = 7

    if x % 2 == 0:
        print('x is even')
    else:
        print('x is odd')

    # Output: x is odd`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Chained Conditionals</h3>
                <p className="text-gray-700 mb-4">
                  Use elif (else if) to check multiple conditions:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`x = 5
    y = 7

    if x < y:
        print('x is less than y')
    elif x > y:
        print('x is greater than y')
    else:
        print('x and y are equal')

    # Output: x is less than y`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">💡 Key Point:</span> Only ONE branch executes. Python checks conditions in order and runs the first one that's true, then skips the rest.
                </p>
              </div>
            </section>
  );
}
