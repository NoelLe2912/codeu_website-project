import React from "react";

export default function ComparingTimeObjects() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Comparing Time Objects</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Methods that compare objects use self for the first object and another parameter (often called other) for the second.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The is_after Method</h3>
                <p className="text-gray-700 mb-4">
                  Check if one time comes after another:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Time:
        """Represents the time of day."""
    
        def is_after(self, other):
            return self.time_to_int() > other.time_to_int()

    start = Time()
    start.hour = 9
    start.minute = 40
    start.second = 0

    end = Time()
    end.hour = 11
    end.minute = 12
    end.second = 0

    end.is_after(start)
    # True

    # Reads like English: "end is after start?"`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Elegant Syntax</h3>
                <p className="text-gray-700 mb-4">
                  Method syntax makes comparisons read naturally:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• <code>end.is_after(start)</code> reads like "end is after start?"</p>
                  <p>• Much clearer than <code>is_after(end, start)</code></p>
                  <p>• Object-oriented code can be more intuitive!</p>
                </div>
              </div>
            </section>
  );
}
