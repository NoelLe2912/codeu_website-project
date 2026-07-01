import React from "react";

export default function SpecialMethodsStr() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Special Methods: __str__</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Special methods have names surrounded by double underscores. They give objects custom behavior with Python's built-in functions and operators.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Converting Objects to Strings</h3>
                <p className="text-gray-700 mb-4">
                  Python calls __str__ when converting objects to strings:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Time:
        """Represents the time of day."""
    
        def __str__(self):
            s = f'{self.hour:02d}:{self.minute:02d}:{self.second:02d}'
            return s

    end = Time()
    end.hour = 11
    end.minute = 12
    end.second = 0

    # Direct call
    end.__str__()
    # '11:12:00'

    # Python calls it automatically
    str(end)
    # '11:12:00'

    # Print calls str() automatically
    print(end)
    # 11:12:00`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">When __str__ is Called</h3>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• When you call <code>str(object)</code></p>
                  <p>• When you <code>print(object)</code></p>
                  <p>• When using objects in f-strings</p>
                  <p>• Anywhere Python needs a string representation</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">✨ Magic:</span> Special methods let your objects work seamlessly with Python's built-in features!
                </p>
              </div>
            </section>
  );
}
