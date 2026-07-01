import React from "react";

export default function InterfaceDesign() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Interface Design
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The interface of a function is how other code interacts with
                  it—the function's name, its parameters, and what it does. Good
                  interface design makes functions easy to use and understand.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    What Makes a Good Interface?
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-bold text-gray-800 mb-2">Clear Purpose</p>
                      <p className="text-gray-700">
                        The function should do one thing well. If you can't describe
                        what it does in one sentence, it might be doing too much.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-bold text-gray-800 mb-2">Meaningful Name</p>
                      <p className="text-gray-700">
                        The name should clearly indicate what the function does. Use
                        verbs for actions: draw_line, calculate_area, print_report.
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-bold text-gray-800 mb-2">
                        Appropriate Parameters
                      </p>
                      <p className="text-gray-700">
                        Include parameters for values that change, but don't add
                        unnecessary complexity. Find the right balance.
                      </p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="font-bold text-gray-800 mb-2">
                        Predictable Behavior
                      </p>
                      <p className="text-gray-700">
                        The function should behave consistently and do what users
                        expect based on its name and parameters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Example: Keyword Arguments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When functions have multiple parameters, keyword arguments make
                    the interface clearer:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># Hard to understand
    draw_rectangle(10, 5)

    # Clear and explicit
    draw_rectangle(width=10, height=5)

    # You can also mix positional and keyword arguments
    draw_rectangle(10, height=5)</code></pre>
                  </div>
                </div>
              </section>
  );
}
