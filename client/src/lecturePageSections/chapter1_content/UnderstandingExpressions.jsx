import React from "react";

export default function UnderstandingExpressions() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Understanding Expressions
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        An expression is any combination of numbers and operators that Python
        can calculate. Think of it like a math problem that Python solves for
        you.
      </p>

      <div className="bg-blue-50 rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Order Matters!
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Just like in math class, Python follows specific rules about which
          operations to do first. This is called the order of operations.
        </p>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2"># Exponents happen first</p>
          <pre className="text-green-400 font-mono text-sm mb-4">
            <code>{`5 + 3 ** 2  # 3**2 is calculated first: 5 + 9 = 14`}</code>
          </pre>

          <p className="text-gray-400 text-sm mb-2">
            # Multiplication before addition
          </p>
          <pre className="text-green-400 font-mono text-sm mb-4">
            <code>{`10 + 4 * 3  # 4*3 is calculated first: 10 + 12 = 22`}</code>
          </pre>

          <p className="text-gray-400 text-sm mb-2">
            # Use parentheses to change the order
          </p>
          <pre className="text-green-400 font-mono text-sm">
            <code>{`(10 + 4) * 3  # Parentheses first: 14 * 3 = 42`}</code>
          </pre>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">1️⃣</div>
          <h4 className="font-bold text-gray-800 mb-2">Parentheses First</h4>
          <p className="text-gray-700">
            Calculate anything in ( ) before other operations
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">2️⃣</div>
          <h4 className="font-bold text-gray-800 mb-2">Exponents Second</h4>
          <p className="text-gray-700">Powers and roots come next</p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">3️⃣</div>
          <h4 className="font-bold text-gray-800 mb-2">Then × and ÷</h4>
          <p className="text-gray-700">Finally + and - from left to right</p>
        </div>
      </div>
    </section>
  );
}
