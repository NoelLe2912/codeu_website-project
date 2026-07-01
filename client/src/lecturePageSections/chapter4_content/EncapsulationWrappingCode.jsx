import React from "react";

export default function EncapsulationWrappingCode() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Encapsulation: Wrapping Code in Functions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Encapsulation means taking a piece of code and putting it inside a
                  function. This gives the code a name and makes it reusable.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Example: Drawing a Square
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Here's code that draws a square using text:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6 mb-4">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># Without encapsulation (repetitive)
    print('*' * 5)
    print('*   *')
    print('*   *')
    print('*   *')
    print('*' * 5)</code></pre>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Now let's encapsulate it in a function:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def draw_square():
        """Draw a 5x5 square."""
        print('*' * 5)
        print('*   *')
        print('*   *')
        print('*   *')
        print('*' * 5)

    draw_square()</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      ✓ Benefits of Encapsulation
                    </h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Gives the code a meaningful name</li>
                      <li>• Makes code reusable</li>
                      <li>• Easier to understand and maintain</li>
                      <li>• Can be tested independently</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-blue-800 mb-3 text-xl">
                      📋 When to Encapsulate
                    </h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Code that does a specific task</li>
                      <li>• Code you'll use more than once</li>
                      <li>• Code that's logically separate</li>
                      <li>• Code that's getting too complex</li>
                    </ul>
                  </div>
                </div>
              </section>
  );
}
