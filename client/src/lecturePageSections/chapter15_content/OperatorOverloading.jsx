import React from "react";

export default function OperatorOverloading() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Operator Overloading</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Define special methods to make operators like + work with your custom types. This makes code more intuitive and Pythonic!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The __add__ Method</h3>
                <p className="text-gray-700 mb-4">
                  Make the + operator work with Time objects:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Time:
        def __add__(self, other):
            seconds = self.time_to_int() + other.time_to_int()
            return Time.int_to_time(seconds)

    start = Time(9, 40)
    duration = Time(1, 32)

    # Use + operator!
    end = start + duration
    print(end)
    # 11:12:00`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Happens Behind the Scenes</h3>
                <p className="text-gray-700 mb-4">
                  When you write <code>start + duration</code>:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>1. Python calls <code>start.__add__(duration)</code></p>
                  <p>2. __add__ converts both times to seconds</p>
                  <p>3. Adds the seconds together</p>
                  <p>4. Converts back to a Time object</p>
                  <p>5. Returns the new Time</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Common Special Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-blue-800 mb-2">Arithmetic</p>
                    <p className="text-sm text-gray-700">__add__ (+)</p>
                    <p className="text-sm text-gray-700">__sub__ (-)</p>
                    <p className="text-sm text-gray-700">__mul__ (*)</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-green-800 mb-2">Comparison</p>
                    <p className="text-sm text-gray-700">__eq__ (==)</p>
                      <p className="text-sm text-gray-700">__lt__ (&lt;)</p>
                      <p className="text-sm text-gray-700">__gt__ (&gt;)</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">🎭 Operator Overloading:</span> Changing operator behavior for custom types makes your objects feel like built-in Python types!
                </p>
              </div>
            </section>
  );
}
