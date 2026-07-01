import React from "react";

export default function PreconditionsAndPostconditions() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Preconditions and Postconditions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Functions are like contracts. The caller and the function each
                  have responsibilities. Understanding these helps prevent bugs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Preconditions
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Requirements that must be true BEFORE the function runs. These
                      are the caller's responsibility.
                    </p>
                    <div className="bg-gray-900 rounded p-4">
                      <pre
                        className="text-yellow-400 font-mono text-xs"
                      ><code>def calculate_average(numbers):
        """Calculate the average of numbers.
    
        Preconditions:
        - numbers must be a list
        - numbers must not be empty
        - all items must be numbers
        """
        return sum(numbers) / len(numbers)</code></pre>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Postconditions
                    </h3>
                    <p className="text-gray-700 mb-4">
                      What must be true AFTER the function runs. These are the
                      function's responsibility.
                    </p>
                    <div className="bg-gray-900 rounded p-4">
                      <pre
                        className="text-green-400 font-mono text-xs"
                      ><code>def sort_list(items):
        """Sort a list of items.
    
        Postconditions:
        - Returns a new sorted list
        - Original list is unchanged
        - All items from input are
          in output
        """
        return sorted(items)</code></pre>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-blue-800">🐛 Debugging Tip:</span>
                    If preconditions are met but postconditions aren't, the bug is
                    in the function. If preconditions aren't met, the bug is in the
                    calling code.
                  </p>
                </div>
              </section>
  );
}
