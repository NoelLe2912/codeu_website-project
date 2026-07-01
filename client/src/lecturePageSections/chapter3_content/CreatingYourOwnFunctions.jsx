import React from "react";

export default function CreatingYourOwnFunctions() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Creating Your Own Functions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  So far, you've been using functions that Python provides, like
                  print and len. Now you'll learn to write your own! A function
                  definition tells Python how to perform a specific task that you
                  can use over and over.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Anatomy of a Function
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A function definition starts with the keyword def, followed by
                    the function name, parentheses, and a colon. The code inside
                    (the body) must be indented.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def greet_user():
        print("Welcome to Python!")
        print("Let's learn about functions.")</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div
                    className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6"
                  >
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">Header</h4>
                    <p className="text-gray-700 mb-3">
                      The first line with def, the name, and the colon
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-yellow-400 text-sm">def greet_user():</code>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6"
                  >
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">Body</h4>
                    <p className="text-gray-700 mb-3">
                      The indented statements that run when called
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-green-400 text-sm"> print("Welcome!")</code>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Calling Your Function
                  </h3>
                  <p className="text-gray-700 mb-4">
                    After you define a function, you can run it by writing its name
                    followed by parentheses:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># Call the function
    greet_user()

    # Output:
    # Welcome to Python!
    # Let's learn about functions.</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">💡 Key Point:</span>
                    Defining a function doesn't run it—it just creates it. You must
                    call the function to execute the code inside.
                  </p>
                </div>
              </section>
  );
}
