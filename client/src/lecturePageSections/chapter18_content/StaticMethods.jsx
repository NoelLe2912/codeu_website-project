import React from "react";

export default function StaticMethods() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Static Methods</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Some methods don't need an instance to work. Static methods are invoked on the class itself, not on objects. They're perfect for factory functions!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Chicken-and-Egg Problem</h3>
                <p className="text-gray-700 mb-4">
                  How do we create a Time object using a method if we need a Time object to call the method?
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Time:
        """Represents the time of day."""
    
        @staticmethod
        def int_to_time(seconds):
            minute, second = divmod(seconds, 60)
            hour, minute = divmod(minute, 60)
            time = Time()
            time.hour = hour
            time.minute = minute
            time.second = second
            return time

    # Call on the class, not an instance!
    start = Time.int_to_time(34800)
    print(f'{start.hour}:{start.minute}:{start.second}')
    # 9:40:0`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Static vs Instance Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-red-800 mb-2">Instance Method</p>
                    <p className="text-sm text-gray-700 mb-2">• Has <code>self</code> parameter</p>
                    <p className="text-sm text-gray-700 mb-2">• Invoked on objects</p>
                    <p className="text-xs text-gray-600 mt-2">obj.method()</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-green-800 mb-2">Static Method</p>
                    <p className="text-sm text-gray-700 mb-2">• No <code>self</code> parameter</p>
                    <p className="text-sm text-gray-700 mb-2">• Invoked on class</p>
                    <p className="text-xs text-gray-600 mt-2">Class.method()</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">🏭 Use Case:</span> Static methods are perfect for factory functions that create and return new instances!
                </p>
              </div>
            </section>
  );
}
