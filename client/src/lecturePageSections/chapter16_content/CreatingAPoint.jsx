import React from "react";

export default function CreatingAPoint() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Creating a Point</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In computer graphics, a location on the screen is often represented using a pair of coordinates in an x-y plane. 
                By convention, the point <code>(0, 0)</code> usually represents the upper-left corner of the screen, and 
                <code>(x, y)</code> represents the point <code>x</code> units to the right and <code>y</code> units down from the origin.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Defining the Point Class</h3>
                <p className="text-gray-700 mb-4">
                  In object-oriented programming, it is most idiomatic to create a new type to represent points as objects.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Point:
        """Represents a point in 2-D space."""

        def __init__(self, x, y):
            self.x = x
            self.y = y
        
        def __str__(self):
            return f'Point({self.x}, {self.y})'

    # Instantiate and display a Point object
    start = Point(0, 0)
    print(start)
    # Output: Point(0, 0)`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Translating a Point</h3>
                <p className="text-gray-700 mb-4">
                  We can write a method like <code>translate</code> that modifies an existing point, or a method like <code>translated</code> that creates a new one.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Inside class Point...
        def translate(self, dx, dy):
            self.x += dx
            self.y += dy

        def translated(self, dx=0, dy=0):
            from copy import copy
            point = copy(self)
            point.translate(dx, dy)
            return point

    end2 = start.translated(0, 150)
    print(end2)
    # Output: Point(0, 150)`}</code></pre>
                </div>
              </div>
            </section>
  );
}
