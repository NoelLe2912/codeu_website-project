import React from "react";

export default function CopyingObjects() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Copying Objects</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To avoid unwanted modifications, we can copy objects. The copy module provides a function that duplicates any object.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Making Copies</h3>
                <p className="text-gray-700 mb-4">
                  Create independent duplicates:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`from copy import copy

    start = make_time(9, 20, 0)
    end = copy(start)

    # Same data
    print_time(start)
    print_time(end)
    # 09:20:00
    # 09:20:00

    # But different objects
    start is end
    # False`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The == Operator Surprise</h3>
                <p className="text-gray-700 mb-4">
                  For custom classes, == checks identity by default:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`start == end
    # False (even though they have the same data!)

    # For custom classes:
    # == behaves like 'is' (checks identity)
    # Not like built-in types (which check equivalence)`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">💡 Remember:</span> Copying creates a new object with the same data. Changes to the copy don't affect the original!
                </p>
              </div>
            </section>
  );
}
