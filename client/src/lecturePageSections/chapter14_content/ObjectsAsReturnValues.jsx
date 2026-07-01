import React from "react";

export default function ObjectsAsReturnValues() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Objects as Return Values</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Functions can create and return objects, making it easy to build new instances with specific values.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Factory Function Pattern</h3>
                <p className="text-gray-700 mb-4">
                  Create a function that builds and returns objects:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def make_time(hour, minute, second):
        time = Time()
        time.hour = hour
        time.minute = minute
        time.second = second
        return time

    # Use it to create objects
    time = make_time(11, 59, 1)
    print_time(time)
    # 11:59:01`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why This Pattern?</h3>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• Cleaner than creating objects manually</p>
                  <p>• Ensures all attributes are initialized</p>
                  <p>• Parameters can have the same names as attributes (common pattern)</p>
                  <p>• Makes code more readable and maintainable</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">🏭 Factory Pattern:</span> This is like a factory that builds objects to your specifications!
                </p>
              </div>
            </section>
  );
}
