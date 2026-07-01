import React from "react";

export default function DebuggingWithObjects() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Debugging with Objects</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Python provides built-in functions for inspecting objects and their attributes.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Inspection Functions</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Check object type
    type(start)
    # __main__.Time

    # Check if instance of a class
    isinstance(start, Time)
    # True

    # Check if attribute exists
    hasattr(start, 'hour')
    # True

    # Get all attributes as dictionary
    vars(start)
    # {'hour': 9, 'minute': 20, 'second': 0}`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-blue-800">🔍 Pro Tip:</span> Use vars() to quickly see all attributes and their values when debugging!
                </p>
              </div>
            </section>
  );
}
