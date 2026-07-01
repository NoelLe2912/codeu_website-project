import React from "react";

export default function TextBasedDrawing() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Text-Based Drawing
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Before we dive into interface design, let's start with something
                  simple: drawing shapes using text characters. This will help us
                  understand how to build functions that work together.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Line Drawing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We can create a simple horizontal line by repeating a character:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># Draw a line of asterisks
    print('*' * 10)

    # Output: **********</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating a Simple Function
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Let's wrap this in a function so we can reuse it:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def draw_line(length):
        """Draw a horizontal line of asterisks."""
        print('*' * length)

    # Now we can use it
    draw_line(15)
    draw_line(8)

    # Output:
    # ***************
    # ********</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">💡 Key Concept:</span>
                    By putting code in a function, we can reuse it with different
                    parameters. This is the foundation of good program design!
                  </p>
                </div>
              </section>
  );
}
