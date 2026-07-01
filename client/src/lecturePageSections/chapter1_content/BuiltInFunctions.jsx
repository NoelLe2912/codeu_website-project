import React from "react";

export default function BuiltInFunctions() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Python's Built-in Functions
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Functions are pre-written pieces of code that perform specific tasks.
        You call a function by writing its name followed by parentheses
        containing the value you want to work with.
      </p>

      <div className="bg-white rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Common Number Functions
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-900 rounded p-4">
            <p className="text-gray-400 text-sm mb-2">
              # Round to the nearest whole number
            </p>
            <code className="text-green-400">round(7.8) # Result: 8</code>
            <br />
            <code className="text-green-400">round(7.2) # Result: 7</code>
          </div>

          <div className="bg-gray-900 rounded p-4">
            <p className="text-gray-400 text-sm mb-2">
              # Get the absolute value (distance from zero)
            </p>
            <code className="text-green-400">abs(-15) # Result: 15</code>
            <br />
            <code className="text-green-400">abs(15) # Result: 15</code>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
        <p className="text-lg text-gray-700">
          <span className="font-bold text-red-800">⚠️ Common Mistake:</span>
          Function calls MUST include parentheses. Writing
          <code className="bg-gray-900 text-red-400 px-2 py-1 rounded">
            abs 15
          </code>
          will cause a syntax error. Always use
          <code className="bg-gray-900 text-green-400 px-2 py-1 rounded">
            abs(15)
          </code>
          instead!
        </p>
      </div>
    </section>
  );
}
