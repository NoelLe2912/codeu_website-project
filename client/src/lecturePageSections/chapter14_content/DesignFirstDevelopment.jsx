import React from "react";

export default function DesignFirstDevelopment() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Design-First Development</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Think deeply about the problem before coding. A good insight can make everything simpler and more elegant.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Key Insight</h3>
                <p className="text-gray-700 mb-4">
                  Time is like a three-digit number in base 60:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• <span className="font-bold">Second:</span> "ones column" (0-59)</p>
                  <p>• <span className="font-bold">Minute:</span> "sixties column" (0-59)</p>
                  <p>• <span className="font-bold">Hour:</span> "thirty-six hundreds column" (0-23)</p>
                  <p>• <span className="font-bold">Solution:</span> Convert to integers, use arithmetic, convert back!</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conversion Functions</h3>
                <p className="text-gray-700 mb-4">
                  Convert between Time objects and integers:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def time_to_int(time):
        minutes = time.hour * 60 + time.minute
        seconds = minutes * 60 + time.second
        return seconds

    def int_to_time(seconds):
        minute, second = divmod(seconds, 60)
        hour, minute = divmod(minute, 60)
        return make_time(hour, minute, second)

    # Test it
    time = make_time(1, 1, 1)
    time_to_int(time)
    # 3661 seconds since midnight`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Elegant add_time</h3>
                <p className="text-gray-700 mb-4">
                  Much simpler with conversions:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def add_time(time, hours, minutes, seconds):
        duration = make_time(hours, minutes, seconds)
        seconds = time_to_int(time) + time_to_int(duration)
        return int_to_time(seconds)

    start = make_time(9, 40, 0)
    end = add_time(start, 1, 32, 0)
    print_time(end)
    # 11:12:00  (Works perfectly!)`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">✨ Paradox:</span> Sometimes making a problem more general (or harder) makes the solution easier! Fewer special cases = fewer bugs.
                </p>
              </div>
            </section>
  );
}
