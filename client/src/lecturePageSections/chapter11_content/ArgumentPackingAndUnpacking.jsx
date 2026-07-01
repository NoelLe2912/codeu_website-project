import React from "react";

export default function ArgumentPackingAndUnpacking() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Argument Packing and Unpacking
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The * operator lets you write functions that accept any number of
                  arguments, and it lets you pass sequences as separate arguments.
                  This creates flexible, powerful functions.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Packing: Variable Arguments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use *args to accept any number of arguments:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def mean(*args):
        return sum(args) / len(args)

    # Call with any number of arguments
    mean(1, 2, 3)
    # 2.0

    mean(1, 2, 3, 4, 5)
    # 3.0`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Unpacking: Sequence to Arguments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use * to unpack a sequence into separate arguments:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`t = (7, 3)

    # Without unpacking - error!
    divmod(t)
    # TypeError: divmod expected 2 arguments, got 1

    # With unpacking - works!
    divmod(*t)
    # (2, 1)`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Practical Example: Trimmed Mean
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Combine packing and unpacking for flexible functions:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def trimmed_mean(*args):
        # Find min and max
        low, high = min(args), max(args)
    
        # Remove them
        trimmed = list(args)
        trimmed.remove(low)
        trimmed.remove(high)
    
        # Compute mean (unpack trimmed list)
        return mean(*trimmed)

    mean(1, 2, 3, 10)
    # 4.0

    trimmed_mean(1, 2, 3, 10)
    # 2.5  (removes 1 and 10, averages 2 and 3)`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800"
                      >💡 Real-World Use:</span
                    >
                    Trimmed means are used in sports like diving and gymnastics to
                    reduce the impact of outlier scores from individual judges.
                  </p>
                </div>
              </section>
  );
}
