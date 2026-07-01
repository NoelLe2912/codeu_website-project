import React from "react";

export default function RecursionFunctionsCallingThemselves() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Recursion: Functions Calling Themselves</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A function can call itself! This is called recursion, and it's one of the most powerful ideas in programming. It might seem strange at first, but it's incredibly useful for certain problems.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Simple Example: Countdown</h3>
                <p className="text-gray-700 mb-4">
                  Here's a function that counts down from n to 0:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`def countdown(n):
        if n <= 0:
            print('Blastoff!')
        else:
            print(n)
            countdown(n - 1)  # Function calls itself!

    countdown(3)
    # Output:
    # 3
    # 2
    # 1
    # Blastoff!`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-blue-600">Step 1:</span> countdown(3) prints 3, then calls countdown(2)</p>
                  <p><span className="font-bold text-blue-600">Step 2:</span> countdown(2) prints 2, then calls countdown(1)</p>
                  <p><span className="font-bold text-blue-600">Step 3:</span> countdown(1) prints 1, then calls countdown(0)</p>
                  <p><span className="font-bold text-blue-600">Step 4:</span> countdown(0) prints "Blastoff!" and returns</p>
                  <p><span className="font-bold text-blue-600">Step 5:</span> Each function returns in reverse order</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Another Example: Print N Times</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`def print_n_times(message, n):
        if n > 0:
            print(message)
            print_n_times(message, n - 1)

    print_n_times('Hello!', 4)
    # Output:
    # Hello!
    # Hello!
    # Hello!
    # Hello!`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">🔑 Key Concept:</span> Every recursive function needs a BASE CASE (a condition that stops the recursion). Without it, the function will call itself forever!
                </p>
              </div>
            </section>
  );
}
