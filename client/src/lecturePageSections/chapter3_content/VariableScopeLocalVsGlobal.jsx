import React from "react";

export default function VariableScopeLocalVsGlobal() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Variable Scope: Local vs Global
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Variables created inside a function are local—they only exist
                  while that function is running. Once the function finishes, those
                  variables disappear.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Local Variables Example
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def combine_and_display(first, second):
        combined = first + second  # Local variable
        print(combined)
        print(combined)

    word1 = "Hello "
    word2 = "World"
    combine_and_display(word1, word2)
    # Output:
    # Hello World
    # Hello World

    # But this causes an error:
    print(combined)  # NameError: combined doesn't exist here!</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      Inside the Function
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Variables and parameters are accessible and usable
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-green-400 text-sm"
                        >combined ✓<br />first ✓<br />second ✓</code
                      >
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 text-xl">
                      Outside the Function
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Local variables and parameters don't exist
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-red-400 text-sm"
                        >combined ✗<br />first ✗<br />second ✗</code
                      >
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-blue-800"
                      >📚 Why This Matters:</span
                    >
                    Local variables let different functions use the same variable
                    names without conflicts. Each function has its own separate
                    workspace.
                  </p>
                </div>
              </section>
  );
}
