import React from "react";

export default function EquivalenceAndIdentity() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Equivalence and Identity</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Suppose we create two points with the exact same coordinates. Are they the same object?
              </p>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`p1 = Point(200, 100)
    p2 = Point(200, 100)

    p1 == p2
    # False (by default, == checks if they are the exact same object)

    p1 is p2
    # False`}</code></pre>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Overriding the == Operator</h3>
                <p className="text-gray-700 mb-4">
                  If we want to change that behavior, we can provide a special method called <code>__eq__</code> that defines what it means for two Point objects to be "equal".
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Inside class Point...
        def __eq__(self, other):
            return (self.x == other.x) and (self.y == other.y)

    # Now it checks equivalence!
    p1 == p2
    # True`}</code></pre>
                </div>
              </div>
          
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">⚠️ Remember:</span> It's not possible to override the <code>is</code> operator—it always checks whether the objects are identical in memory. But for your types, you can override <code>==</code> to check equivalence.
                </p>
              </div>
            </section>
  );
}
