import React from "react";

export default function ArithmeticOperators() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Working with Numbers: Arithmetic Operators
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Python uses special symbols called operators to perform calculations.
        Think of these as the mathematical tools in your programming toolbox.
        Each operator tells Python what kind of calculation to perform.
      </p>

      <div className="bg-white rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Basic Mathematical Operations
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="font-bold text-gray-800 mb-1">Addition (+)</p>
            <p className="text-gray-600 mb-2">Combines two numbers together</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400">25 + 17 # Result: 42</code>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-bold text-gray-800 mb-1">Subtraction (-)</p>
            <p className="text-gray-600 mb-2">
              Finds the difference between numbers
            </p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400">50 - 8 # Result: 42</code>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <p className="font-bold text-gray-800 mb-1">Multiplication (*)</p>
            <p className="text-gray-600 mb-2">Multiplies numbers together</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400">6 * 7 # Result: 42</code>
            </div>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="font-bold text-gray-800 mb-1">Division (/)</p>
            <p className="text-gray-600 mb-2">Divides one number by another</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400">84 / 2 # Result: 42.0</code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6">
        <p className="text-lg text-gray-700">
          <span className="font-bold text-yellow-800">⚡ Key Insight:</span>
          Notice that division always gives you a decimal number (42.0), even
          when dividing evenly. This is called a floating-point number in
          Python!
        </p>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Advanced Operators
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-bold text-gray-800 mb-1">Integer Division (//)</p>
            <p className="text-gray-600 mb-2">
              Divides and rounds down to a whole number
            </p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400">
                85 // 2 # Result: 42 (not 42.5!)
              </code>
            </div>
          </div>

          <div className="border-l-4 border-pink-500 pl-4">
            <p className="font-bold text-gray-800 mb-1">Exponentiation (**)</p>
            <p className="text-gray-600 mb-2">Raises a number to a power</p>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400">2 ** 8 # Result: 256</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
