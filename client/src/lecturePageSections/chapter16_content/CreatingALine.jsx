import React from "react";

export default function CreatingALine() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Creating a Line</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Now let's define a class that represents the line segment between two points. As usual, we'll start with an 
                <code>__init__</code> method and a <code>__str__</code> method.
              </p>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Line:
        def __init__(self, p1, p2):
            self.p1 = p1
            self.p2 = p2
        
        def __str__(self):
            return f'Line({self.p1}, {self.p2})'

    # Instantiate using Point objects
    end1 = Point(300, 0)
    line1 = Line(start, end1)
    print(line1)
    # Output: Line(Point(0, 0), Point(300, 0))`}</code></pre>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">💡 Nested Objects:</span> Notice how the f-string in <code>__str__</code> evaluates <code>self.p1</code>. Because the result is a Point object, it automatically invokes the <code>__str__</code> method from the Point class!
                </p>
              </div>
            </section>
  );
}
