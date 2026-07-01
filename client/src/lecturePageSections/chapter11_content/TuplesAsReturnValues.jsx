import React from "react";

export default function TuplesAsReturnValues() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Tuples as Return Values
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Functions can only return one value—but if that value is a tuple,
                  you can effectively return multiple values. This is a powerful and
                  common pattern.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Built-in Example: divmod()
                  </h3>
                  <p className="text-gray-700 mb-4">
                    divmod() returns both quotient and remainder as a tuple:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`divmod(7, 3)
    # (2, 1)

    # Use tuple assignment to unpack
    quotient, remainder = divmod(7, 3)
    quotient
    # 2
    remainder
    # 1`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Custom Function Example
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Return multiple values from your own functions:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def min_max(t):
        return min(t), max(t)

    # Returns a tuple
    min_max([2, 4, 1, 3])
    # (1, 4)

    # Unpack the results
    low, high = min_max([2, 4, 1, 3])
    low, high
    # (1, 4)`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">🎯 Use Case:</span>
                    Returning tuples is perfect when you need to compute multiple
                    related values together—like coordinates, statistics, or results
                    from complex calculations.
                  </p>
                </div>
              </section>
  );
}
