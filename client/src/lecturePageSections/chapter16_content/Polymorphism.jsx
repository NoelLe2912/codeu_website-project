import React from "react";

export default function Polymorphism() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Polymorphism</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If we give <code>Line</code>, <code>Rectangle</code>, and a custom <code>Circle</code> class their own <code>draw()</code> methods, we can do something powerful:
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`shapes = [line1, line2, box3, box4]

    for shape in shapes:
        shape.draw()`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-blue-800">✨ Polymorphism:</span> The word comes from Greek roots that mean "many shaped". It's the ability of different types to provide the same methods, allowing you to perform operations by invoking the same method on different types of objects. In a sense, <em>each object knows how to draw itself</em>.
                </p>
              </div>
            </section>
  );
}
