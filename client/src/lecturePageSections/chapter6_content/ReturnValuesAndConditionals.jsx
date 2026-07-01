import React from "react";

export default function ReturnValuesAndConditionals() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Return Values and Conditionals
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When using return statements inside conditionals, ensure every
                  possible path through the function hits a return statement—or
                  you'll get None!
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Correct: All Paths Return
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Every branch has a return statement:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def absolute_value(x):
        if x < 0:
            return -x
        else:
            return x

    absolute_value(-5)
    # 5

    absolute_value(10)
    # 10`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Bug: Missing Return Path
                  </h3>
                  <p className="text-gray-700 mb-4">What happens when x is 0?</p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def absolute_value_wrong(x):
        if x < 0:
            return -x
        if x > 0:
            return x
        # No return when x == 0!

    absolute_value_wrong(0)
    # (returns None - displays nothing)`}</code></pre>
                  </div>
                  <p className="text-gray-700 mt-4">
                    When x is 0, neither condition is true, so the function ends
                    without returning anything—the result is None!
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Dead Code Warning
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Code after a return statement never runs:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def absolute_value_extra_return(x):
        if x < 0:
            return -x
        else:
            return x
    
        return 'This is dead code'
        # ^^^ This line can never execute!`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">⚠️ Rule:</span> Dead
                    code doesn't hurt, but it indicates a misunderstanding. Make
                    sure every path returns something!
                  </p>
                </div>
              </section>
  );
}
