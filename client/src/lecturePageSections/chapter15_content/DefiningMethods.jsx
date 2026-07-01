import React from "react";

export default function DefiningMethods() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Defining Methods</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Methods are functions defined inside a class. They make the connection between code and data explicit, creating more organized and intuitive programs.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">From Function to Method</h3>
                <p className="text-gray-700 mb-4">
                  Move the function inside the class and change the parameter name to self:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Before: External function
    def print_time(time):
        s = f'{time.hour:02d}:{time.minute:02d}:{time.second:02d}'
        print(s)

    # After: Method inside class
    class Time:
        """Represents the time of day."""
    
        def print_time(self):
            s = f'{self.hour:02d}:{self.minute:02d}:{self.second:02d}'
            print(s)`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Two Ways to Call Methods</h3>
                <p className="text-gray-700 mb-4">
                  Function syntax vs. method syntax:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`start = Time()
    start.hour = 9
    start.minute = 40
    start.second = 0

    # Function syntax (uncommon)
    Time.print_time(start)
    # 09:40:00

    # Method syntax (idiomatic!)
    start.print_time()
    # 09:40:00`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Receiver</h3>
                <p className="text-gray-700 mb-4">
                  The object a method is invoked on is called the receiver:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• In <code>start.print_time()</code>, <code>start</code> is the receiver</p>
                  <p>• Inside the method, <code>self</code> refers to the receiver</p>
                  <p>• Think of it as "sending a message" to an object</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">📌 Convention:</span> Always name the first parameter of a method <code>self</code>. It's not required, but it's universal Python style!
                </p>
              </div>
            </section>
  );
}
