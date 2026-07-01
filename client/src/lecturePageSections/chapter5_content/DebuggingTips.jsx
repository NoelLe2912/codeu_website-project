import React from "react";

export default function DebuggingTips() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Debugging Tips</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Conditionals and recursion can introduce subtle bugs. Here's how to catch them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">Common Conditional Errors</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Using = instead of ==</li>
                    <li>• Forgetting the colon after if/elif/else</li>
                    <li>• Wrong indentation in blocks</li>
                    <li>• Checking conditions in wrong order</li>
                    <li>• Forgetting parentheses in complex conditions</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">Common Recursion Errors</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Missing base case</li>
                    <li>• Base case never reached</li>
                    <li>• Not moving toward base case</li>
                    <li>• Forgetting to return value</li>
                    <li>• Too many recursive calls (stack overflow)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Testing Recursive Functions</h3>
                <p className="text-gray-700 mb-4">
                  Always test with:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <span className="font-bold">Base case:</span> Does it work when it should stop?</li>
                  <li>• <span className="font-bold">Small values:</span> Does it work for n=1, n=2?</li>
                  <li>• <span className="font-bold">Edge cases:</span> What about n=0 or negative numbers?</li>
                  <li>• <span className="font-bold">Typical cases:</span> Does it work for normal inputs?</li>
                </ul>
              </div>
            </section>
  );
}
