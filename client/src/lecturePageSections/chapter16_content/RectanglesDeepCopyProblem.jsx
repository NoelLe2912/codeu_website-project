import React from "react";

export default function RectanglesDeepCopyProblem() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Rectangles & The Deep Copy Problem</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let's define a <code>Rectangle</code> specified by its width, height, and the location of its upper-left corner (a Point).
              </p>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Rectangle:
        def __init__(self, width, height, corner):
            self.width = width
            self.height = height
            self.corner = corner
        
        def __str__(self):
            return f'Rectangle({self.width}, {self.height}, {self.corner})'

        def translate(self, dx, dy):
            self.corner.translate(dx, dy)`}</code></pre>
              </div>

              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Aliasing Bug</h3>
                <p className="text-gray-700 mb-4">
                  When we use standard <code>copy()</code> to duplicate a rectangle, it copies the Rectangle object but <strong>not</strong> the nested Point object. They end up sharing the same corner!
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`from copy import copy

    box1 = Rectangle(100, 50, Point(30, 20))
    box2 = copy(box1)

    box1 is box2
    # False (they are different rectangles)

    box1.corner is box2.corner
    # True! (they share the SAME corner object)

    box2.translate(30, 20) 
    # Wait, this just moved box1's corner too!`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Fix: deepcopy</h3>
                <p className="text-gray-700 mb-4">
                  The <code>copy</code> module provides <code>deepcopy</code>, which copies not only the object but also the objects it refers to.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`from copy import deepcopy

    box3 = Rectangle(100, 50, Point(20, 20))
    box4 = deepcopy(box3)

    box3.corner is box4.corner
    # False (Now they are completely separate!)`}</code></pre>
                </div>
              </div>
            </section>
  );
}
