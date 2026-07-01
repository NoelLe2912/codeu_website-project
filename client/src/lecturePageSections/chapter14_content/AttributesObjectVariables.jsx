import React from "react";

export default function AttributesObjectVariables() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Attributes: Object Variables</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Attributes are variables that belong to an object. They store the object's data and define its state. Use dot notation to create and access attributes.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Creating Attributes</h3>
                <p className="text-gray-700 mb-4">
                  Add data to an object using the dot operator:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`lunch = Time()

    # Create attributes
    lunch.hour = 11
    lunch.minute = 59
    lunch.second = 1

    # Access attributes
    lunch.hour
    # 11

    # Use in expressions
    total_minutes = lunch.hour * 60 + lunch.minute
    total_minutes
    # 719`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Formatting with F-Strings</h3>
                <p className="text-gray-700 mb-4">
                  Display time with proper formatting using format specifiers:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Without formatting
    f'{lunch.hour}:{lunch.minute}:{lunch.second}'
    # '11:59:1'  (wrong!)

    # With format specifiers (02d = 2 digits, leading zero)
    f'{lunch.hour:02d}:{lunch.minute:02d}:{lunch.second:02d}'
    # '11:59:01'  (correct!)`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Functions with Objects</h3>
                <p className="text-gray-700 mb-4">
                  Pass objects as function arguments:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def print_time(time):
        s = f'{time.hour:02d}:{time.minute:02d}:{time.second:02d}'
        print(s)

    print_time(lunch)
    # 11:59:01`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">📝 Pronunciation:</span> AT-trib-ute (emphasis on first syllable), not a-TRIB-ute!
                </p>
              </div>
            </section>
  );
}
