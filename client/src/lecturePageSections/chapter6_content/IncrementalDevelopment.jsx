import React from "react";

export default function IncrementalDevelopment() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Incremental Development
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Build functions step by step, testing after each small change.
                  This approach saves huge amounts of debugging time!
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Example: Distance Function
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Goal: Calculate distance between two points using the
                    Pythagorean theorem:
                  </p>
                  <p className="text-center text-gray-700 font-mono mb-4">
                    distance = √((x₂-x₁)² + (y₂-y₁)²)
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Step 1: Skeleton
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Start with a function that always returns 0:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def distance(x1, y1, x2, y2):
        return 0.0

    distance(1, 2, 4, 6)
    # 0.0 (We know the answer should be 5)`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Step 2: Calculate Differences
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Add variables for dx and dy, print to verify:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def distance(x1, y1, x2, y2):
        dx = x2 - x1
        dy = y2 - y1
        print('dx is', dx)
        print('dy is', dy)
        return 0.0

    distance(1, 2, 4, 6)
    # dx is 3
    # dy is 4
    # 0.0`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Step 3: Sum of Squares
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def distance(x1, y1, x2, y2):
        dx = x2 - x1
        dy = y2 - y1
        dsquared = dx**2 + dy**2
        print('dsquared is:', dsquared)
        return 0.0

    distance(1, 2, 4, 6)
    # dsquared is: 25
    # 0.0`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Step 4: Calculate Result
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`import math

    def distance(x1, y1, x2, y2):
        dx = x2 - x1
        dy = y2 - y1
        dsquared = dx**2 + dy**2
        result = math.sqrt(dsquared)
        return result

    distance(1, 2, 4, 6)
    # 5.0 (Correct!)`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <p className="text-lg text-gray-700 mb-3">
                    <span className="font-bold text-blue-800">🏗️ Scaffolding:</span> The
                    print statements are scaffolding—helpful during development but
                    removed in the final version.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Key aspects:</span> Start with working
                    code, make small changes, test after every change, use variables
                    for intermediate values, remove scaffolding when done.
                  </p>
                </div>
              </section>
  );
}
