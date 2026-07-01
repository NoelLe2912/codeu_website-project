import React from "react";

export default function ConvertingFunctionsToMethods() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Converting Functions to Methods</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let's convert more functions to methods. The pattern is simple: move inside the class, change the parameter name to self, and adjust attribute references.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Example: time_to_int</h3>
                <p className="text-gray-700 mb-4">
                  Convert time values to seconds:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Time:
        """Represents the time of day."""
    
        def time_to_int(self):
            minutes = self.hour * 60 + self.minute
            seconds = minutes * 60 + self.second
            return seconds

    start = Time()
    start.hour = 9
    start.minute = 40
    start.second = 0

    start.time_to_int()
    # 34800 (seconds since midnight)`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Method vs Function Terminology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-blue-800 mb-2">Functions</p>
                    <p className="text-sm text-gray-700">We <span className="font-bold">call</span> them</p>
                    <p className="text-xs text-gray-600 mt-2">print_time(start)</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-green-800 mb-2">Methods</p>
                    <p className="text-sm text-gray-700">We <span className="font-bold">invoke</span> them</p>
                    <p className="text-xs text-gray-600 mt-2">start.print_time()</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 text-sm">Note: "Call" and "invoke" mean the same thing—just different terminology!</p>
              </div>
            </section>
  );
}
