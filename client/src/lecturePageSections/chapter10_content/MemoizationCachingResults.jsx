import React from "react";

export default function MemoizationCachingResults() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Memoization: Caching Results</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Memoization uses a dictionary to store previously computed values, avoiding redundant calculations. This can make recursive functions dramatically faster.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Problem: Slow Fibonacci</h3>
                <p className="text-gray-700 mb-4">
                  The standard recursive Fibonacci is very slow:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def fibonacci(n):
        if n == 0:
            return 0
        if n == 1:
            return 1
        return fibonacci(n-1) + fibonacci(n-2)

    # fibonacci(40) takes ~30 seconds!`}</code></pre>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why It's Slow</h3>
                <p className="text-gray-700 mb-4">
                  The function recalculates the same values over and over:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• fibonacci(4) calls fibonacci(3) and fibonacci(2)</p>
                  <p>• fibonacci(3) calls fibonacci(2) and fibonacci(1)</p>
                  <p>• fibonacci(2) is computed multiple times!</p>
                  <p>• The redundancy grows exponentially</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Solution: Memoization</h3>
                <p className="text-gray-700 mb-4">
                  Store computed values in a dictionary:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`known = {0: 0, 1: 1}

    def fibonacci_memo(n):
        if n in known:
            return known[n]
    
        res = fibonacci_memo(n-1) + fibonacci_memo(n-2)
        known[n] = res
        return res

    # fibonacci_memo(40) takes ~0.00003 seconds!
    # That's 1,000,000 times faster!`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">How Memoization Works</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-blue-600">Step 1:</span> Check if result is already in the dictionary</p>
                  <p><span className="font-bold text-blue-600">Step 2:</span> If yes, return it immediately</p>
                  <p><span className="font-bold text-blue-600">Step 3:</span> If no, compute the result</p>
                  <p><span className="font-bold text-blue-600">Step 4:</span> Store the result in the dictionary</p>
                  <p><span className="font-bold text-blue-600">Step 5:</span> Return the result</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">⚡ Amazing Speed Boost:</span> Memoization can turn algorithms from impossibly slow to instant. It's one of the most powerful optimization techniques!
                </p>
              </div>
            </section>
  );
}
