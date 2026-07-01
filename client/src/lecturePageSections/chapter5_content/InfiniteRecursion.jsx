import React from "react";

export default function InfiniteRecursion() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Infinite Recursion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If a recursive function never reaches its base case, it will keep calling itself forever until Python runs out of stack space. This is called infinite recursion.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Example of Infinite Recursion</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"><code>def recurse():
        recurse()  # No base case!

    # This will crash:
    # recurse()
    # RecursionError: maximum recursion depth exceeded</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Common Mistake: Wrong Base Case</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-yellow-400 font-mono text-sm whitespace-pre-wrap break-words"><code># This looks OK but has a bug!
    def countdown_by_two(n):
        if n == 0:
            print('Blastoff!')
        else:
            print(n)
            countdown_by_two(n - 2)

    # Works fine:
    countdown_by_two(6)  # 6, 4, 2, Blastoff!

    # But this causes infinite recursion:
    # countdown_by_two(5)  # 5, 3, 1, -1, -3, ...</code></pre>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                <p className="text-lg text-gray-700 mb-3">
                  <span className="font-bold text-red-800">🐛 Debugging Tip:</span> Always check:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Does your function have a base case?</li>
                  <li>• Does the base case actually stop the recursion?</li>
                  <li>• Will you always reach the base case?</li>
                </ul>
              </div>
            </section>
  );
}
