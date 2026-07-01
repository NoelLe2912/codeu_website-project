import React from "react";

export default function DebuggingInvariants() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Debugging: Invariants</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Invariants are conditions that should always be true. Writing methods to check invariants helps catch bugs early!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Time Invariants</h3>
                <p className="text-gray-700 mb-4">
                  What makes a valid Time object?
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• Hour must be non-negative integer</p>
                  <p>• Minute must be 0-59 (integer)</p>
                  <p>• Second must be 0-59 (can have fractions)</p>
                  <p>• These conditions should ALWAYS be true</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Validation Method</h3>
                <p className="text-gray-700 mb-4">
                  Check if a Time object is valid:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Time:
        def is_valid(self):
            if self.hour < 0 or self.minute < 0 or self.second < 0:
                return False
            if self.minute >= 60 or self.second >= 60:
                return False
            if not isinstance(self.hour, int):
                return False
            if not isinstance(self.minute, int):
                return False
            return True

    time = Time(25, 70, -5)
    time.is_valid()
    # False`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Using Assertions</h3>
                <p className="text-gray-700 mb-4">
                  Add checks at the start of methods:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def is_after(self, other):
        assert self.is_valid(), 'self is not valid'
        assert other.is_valid(), 'other is not valid'
        return self.time_to_int() > other.time_to_int()

    # Invalid time
    bad_time = Time(0, 132, 0)
    good_time = Time(9, 40, 0)

    good_time.is_after(bad_time)
    # AssertionError: other is not valid`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">🔍 Debugging Tip:</span> Assertions help distinguish normal code from error-checking code. They fail fast when something goes wrong!
                </p>
              </div>
            </section>
  );
}
