import React from "react";

export default function InitMethod() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">The __init__ Method</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The most important special method! __init__ initializes new objects automatically when they're created.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatic Initialization</h3>
                <p className="text-gray-700 mb-4">
                  Set attributes when creating objects:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Time:
        """Represents the time of day."""
    
        def __init__(self, hour=0, minute=0, second=0):
            self.hour = hour
            self.minute = minute
            self.second = second
    
        def __str__(self):
            return f'{self.hour:02d}:{self.minute:02d}:{self.second:02d}'

    # Create and initialize in one step!
    time = Time(9, 40, 0)
    print(time)
    # 09:40:00`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Optional Parameters</h3>
                <p className="text-gray-700 mb-4">
                  Default values make parameters optional:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# No arguments - all defaults
    time = Time()
    print(time)
    # 00:00:00

    # One argument - overrides hour
    time = Time(9)
    print(time)
    # 09:00:00

    # Two arguments - overrides hour and minute
    time = Time(9, 45)
    print(time)
    # 09:45:00

    # Three arguments - overrides all
    time = Time(9, 45, 30)
    print(time)
    # 09:45:30`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">🎯 Best Practice:</span> Always write __init__ and __str__ first when creating a new class. They make objects easier to create and debug!
                </p>
              </div>
            </section>
  );
}
