import React from "react";

export default function PureFunctions() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Pure Functions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pure functions don't modify their parameters—they create and return new objects instead. This makes code easier to understand and debug.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pure Function Example</h3>
                <p className="text-gray-700 mb-4">
                  Use copy to avoid modifying the original:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def add_time(time, hours, minutes, seconds):
        total = copy(time)
        increment_time(total, hours, minutes, seconds)
        return total

    start = make_time(9, 20, 0)
    end = add_time(start, 1, 32, 0)

    print_time(end)
    # 10:52:00

    print_time(start)
    # 09:20:00  (unchanged!)`}</code></pre>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-800 mb-3 text-xl">Impure Functions</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>• Modify parameters</p>
                    <p>• Have side effects</p>
                    <p>• Can be more efficient</p>
                    <p>• Harder to debug</p>
                    <p>• Can cause confusion</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-3 text-xl">Pure Functions</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>• Don't modify parameters</p>
                    <p>• No side effects</p>
                    <p>• Easier to understand</p>
                    <p>• Easier to test</p>
                    <p>• More predictable</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">📚 Functional Style:</span> Write pure functions when reasonable. Use impure functions only when there's a compelling advantage.
                </p>
              </div>
            </section>
  );
}
