import React from "react";

export default function UnderstandingDataTypes() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Understanding Data Types
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Every value in Python belongs to a specific category called a type. The
        three fundamental types you'll work with are integers, floating-point
        numbers, and strings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6">
          <div className="text-4xl mb-3 text-center">🔢</div>
          <h4 className="font-bold text-gray-800 mb-2 text-center">int</h4>
          <p className="text-gray-700 text-center mb-3">
            Whole numbers without decimals
          </p>
          <div className="bg-gray-900 rounded p-2 text-center">
            <code className="text-green-400">42, -7, 1000</code>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6">
          <div className="text-4xl mb-3 text-center">🎯</div>
          <h4 className="font-bold text-gray-800 mb-2 text-center">float</h4>
          <p className="text-gray-700 text-center mb-3">
            Numbers with decimal points
          </p>
          <div className="bg-gray-900 rounded p-2 text-center">
            <code className="text-green-400">3.14, -0.5, 42.0</code>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6">
          <div className="text-4xl mb-3 text-center">📝</div>
          <h4 className="font-bold text-gray-800 mb-2 text-center">str</h4>
          <p className="text-gray-700 text-center mb-3">
            Text in quotation marks
          </p>
          <div className="bg-gray-900 rounded p-2 text-center">
            <code className="text-green-400">'Hello', "123"</code>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Checking and Converting Types
        </h3>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2">
            # Use type() to check what type a value is
          </p>
          <pre className="text-green-400 font-mono text-sm mb-4">
            <code>{`type(42)      # Result: <class 'int'>
type(42.0)    # Result: <class 'float'>
type('42')    # Result: <class 'str'>`}</code>
          </pre>

          <p className="text-gray-400 text-sm mb-2"># Convert between types</p>
          <pre className="text-green-400 font-mono text-sm">
            <code>{`int(3.9)      # Result: 3 (rounds down)
float(42)     # Result: 42.0
int('100')    # Result: 100`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
        <p className="text-lg text-gray-700">
          <span className="font-bold text-red-800">⚠️ Watch Out:</span> Numbers
          in quotes are strings, not numbers!
          <code className="bg-gray-900 text-yellow-400 px-2 py-1 rounded">
            '123'
          </code>
          is text, while
          <code className="bg-gray-900 text-green-400 px-2 py-1 rounded">
            123
          </code>
          is a number. You can't do math with strings unless you convert them
          first.
        </p>
      </div>
    </section>
  );
}
