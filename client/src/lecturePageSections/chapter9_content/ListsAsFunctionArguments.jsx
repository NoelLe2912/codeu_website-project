import React from "react";

export default function ListsAsFunctionArguments() {
  return (
    <section
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Lists as Function Arguments
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you pass a list to a function, the function receives a
                  reference to the original list—not a copy. This means functions
                  can modify the caller's list!
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Functions Modify Lists
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Changes made inside a function persist after the function
                    returns:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def pop_first(lst):
        return lst.pop(0)

    letters = ['a', 'b', 'c']

    # Call the function
    result = pop_first(letters)
    result
    # 'a'

    # The original list is modified!
    letters
    # ['b', 'c']`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Understanding the Reference
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The parameter and the argument are aliases for the same list:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Inside the function:
    # lst and letters refer to the same object
    # So modifications through lst affect letters`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-red-800">🚨 Important:</span> This
                    is different from strings and numbers! When you pass a string or
                    number to a function, the function can't change the caller's
                    variable. But with lists, it can!
                  </p>
                </div>
              </section>
  );
}
