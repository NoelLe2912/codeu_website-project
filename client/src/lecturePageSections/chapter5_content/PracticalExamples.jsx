import React from "react";

export default function PracticalExamples() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Practical Examples</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let's look at some practical applications of conditionals and recursion.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Example: Factorial Function</h3>
                <p className="text-gray-700 mb-4">
                  The factorial of n (written n!) is n × (n-1) × (n-2) × ... × 1. This is perfect for recursion:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`def factorial(n):
        """Calculate n! recursively."""
        if n <= 1:
            return 1
        else:
            return n * factorial(n - 1)

    # Test it
    print(factorial(5))  # 5 × 4 × 3 × 2 × 1 = 120
    print(factorial(3))  # 3 × 2 × 1 = 6`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Example: Grade Calculator</h3>
                <p className="text-gray-700 mb-4">
                  A practical use of chained conditionals:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`def get_grade(score):
        """Convert numeric score to letter grade."""
        if score >= 90:
            return 'A'
        elif score >= 80:
            return 'B'
        elif score >= 70:
            return 'C'
        elif score >= 60:
            return 'D'
        else:
            return 'F'

    print(get_grade(85))  # B
    print(get_grade(92))  # A`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Example: Fibonacci Numbers</h3>
                <p className="text-gray-700 mb-4">
                  The Fibonacci sequence: each number is the sum of the previous two:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`def fibonacci(n):
        """Return the nth Fibonacci number."""
        if n <= 1:
            return n
        else:
            return fibonacci(n - 1) + fibonacci(n - 2)

    # First 8 Fibonacci numbers
    for i in range(8):
        print(fibonacci(i), end=' ')
    # Output: 0 1 1 2 3 5 8 13`}</code>
                  </pre>
                </div>
              </div>
            </section>
  );
}
