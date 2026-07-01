import React from "react";

export default function LogicalOperators() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Logical Operators</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Logical operators (and, or, not) let you combine boolean expressions to create more complex conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-blue-800 mb-3 text-xl text-center">and</h4>
                  <p className="text-gray-700 mb-3 text-center">Both conditions must be True</p>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-400 text-sm">{`x > 0 and x < 10`}</code>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 text-center">True only if x is between 0 and 10</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-3 text-xl text-center">or</h4>
                  <p className="text-gray-700 mb-3 text-center">At least one must be True</p>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-400 text-sm">x % 2 == 0 or x % 3 == 0</code>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 text-center">True if divisible by 2 or 3</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-purple-800 mb-3 text-xl text-center">not</h4>
                  <p className="text-gray-700 mb-3 text-center">Negates the condition</p>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-400 text-sm">not x > y</code>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 text-center">True if x is NOT greater than y</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Combining Conditions</h3>
                  <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`# Check if a number is in a range
    age = 25
    if age >= 18 and age < 65:
        print("Working age")

    # Check multiple conditions
    score = 85
    if score >= 90 or score < 60:
        print("Extreme score")

    # Negate a condition
    is_raining = False
    if not is_raining:
        print("Let's go outside!")`}</code>
                  </pre>
                </div>
              </div>
            </section>
  );
}
