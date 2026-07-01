import React from "react";

export default function ImportingModules() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Importing Modules
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Python comes with many built-in collections of useful code called
                  modules. To access the functions and values in a module, you need
                  to import it first.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The math Module
                  </h3>
                  <p className="text-gray-700 mb-4">
                    One of the most commonly used modules is math, which provides
                    mathematical functions and constants.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># First, import the module
    import math

    # Now you can access its contents
    math.pi           # Result: 3.141592653589793
    math.sqrt(16)     # Result: 4.0
    math.pow(3, 4)    # Result: 81.0</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Dot Operator
                  </h3>
                  <p className="text-gray-700 mb-4">
                    To use something from a module, write the module name, then a
                    dot (.), then the name of the variable or function. This tells
                    Python exactly where to find what you're looking for.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>math.sqrt(100)    # sqrt function from math module
    math.e            # e constant from math module</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">⚡ Power Tip:</span>
                    When you see code like math.pow(2, 3), read it as "the pow
                    function from the math module." The dot connects the module to
                    its contents.
                  </p>
                </div>
              </section>
  );
}
