import React from "react";

export default function BooleanExpressions() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Boolean Expressions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A boolean expression is one that evaluates to either True or False. These are fundamental for making decisions in your programs.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comparison Operators</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`x = 5
    y = 7

    x == y    # False (equal to)
    x != y    # True (not equal to)
    x > y     # False (greater than)
    x < y     # True (less than)
    x >= y    # False (greater than or equal)
    x <= y    # True (less than or equal)`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded mb-6">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-red-800">⚠️ Common Mistake:</span> Don't confuse = (assignment) with == (comparison)!
                </p>
                <div className="bg-gray-900 rounded mt-3 p-3">
                  <code className="text-red-400 text-sm">{`x = 5     # Assigns 5 to x`}</code>
                  <br />
                  <code className="text-green-400 text-sm">{`x == 5    # Checks if x equals 5`}</code>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The bool Type</h3>
                <p className="text-gray-700 mb-4">
                  True and False are special values of type bool:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`type(True)   # <class 'bool'>
    type(False)  # <class 'bool'>

    # They're not strings!
    type("True")  # <class 'str'>`}</code>
                  </pre>
                </div>
              </div>
            </section>
  );
}
