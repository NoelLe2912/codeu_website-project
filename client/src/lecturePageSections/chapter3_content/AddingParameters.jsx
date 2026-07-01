import React from "react";

export default function AddingParameters() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Adding Parameters
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Parameters make functions flexible by allowing you to pass
                  different values each time you call them. A parameter is like a
                  placeholder that gets filled in when the function runs.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Functions with One Parameter
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The parameter name goes inside the parentheses in the function
                    header:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def display_message(text):
        print(text)
        print(text)

    # Call it with different arguments
    display_message("Hello!")
    display_message("Python is fun")</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How Parameters Work
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you call a function with an argument, Python assigns that
                    value to the parameter. It's like creating a temporary variable
                    inside the function.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># These two are equivalent:
    display_message("Hi there")

    # Is the same as:
    text = "Hi there"
    print(text)
    print(text)</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using Variables as Arguments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can pass variables to functions, not just literal values:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>message = "Good morning!"
    display_message(message)

    # The value of message gets assigned to text</code></pre>
                  </div>
                </div>
              </section>
  );
}
