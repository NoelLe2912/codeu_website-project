import React from "react";

export default function FunctionsReturnValues() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Functions Return Values
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Built-in functions like abs() and math.sqrt() return values you
                  can use. Now we'll learn to write our own functions that return
                  values, making them more powerful and reusable.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using Built-in Functions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Functions return values you can assign or use in expressions:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`import math

    # Function returns a value
    math.sqrt(42 / math.pi)
    # 3.656366395715726

    # Assign to a variable
    radius = math.sqrt(42 / math.pi)

    # Use in an expression
    radius + math.sqrt(42 / math.pi)
    # 7.312732791431452`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Writing Functions with Return
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use the return statement to send a value back:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def circle_area(radius):
        area = math.pi * radius**2
        return area

    # Call and display result
    circle_area(3.656)
    # 42.00000000000001

    # Assign the result
    a = circle_area(3.656)

    # Use in expression
    circle_area(radius) + 2 * circle_area(radius / 2)
    # 63.000000000000014`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">🔑 Key Point:</span> The
                    return statement ends the function and sends a value back to the
                    caller. Local variables inside the function cannot be accessed
                    from outside!
                  </p>
                </div>
              </section>
  );
}
