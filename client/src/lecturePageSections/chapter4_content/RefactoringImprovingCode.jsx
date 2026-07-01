import React from "react";

export default function RefactoringImprovingCode() {
  return (
    <section
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Refactoring: Improving Your Code
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Refactoring means reorganizing your code to make it better without
                  changing what it does. It's like cleaning and organizing your
                  room—everything still works, but it's neater and easier to find
                  things.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    When to Refactor
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 rounded p-4">
                      <p className="font-bold text-yellow-800 mb-2">
                        🔍 Signs You Need Refactoring
                      </p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Duplicated code in multiple places</li>
                        <li>• Functions that are too long</li>
                        <li>• Confusing variable or function names</li>
                        <li>• Hard to understand logic</li>
                        <li>• Functions doing multiple things</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded p-4">
                      <p className="font-bold text-green-800 mb-2">
                        ✓ Benefits of Refactoring
                      </p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Easier to understand</li>
                        <li>• Easier to modify and extend</li>
                        <li>• Fewer bugs</li>
                        <li>• Better reusability</li>
                        <li>• More professional code</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Refactoring Example
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Here's how refactoring improves code:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded p-4">
                      <p className="font-bold text-red-800 mb-2">Before: Repetitive</p>
                      <div className="bg-gray-900 rounded p-3">
                        <pre
                          className="text-red-400 font-mono text-xs"
                        ><code># Calculate areas
    width1 = 10
    height1 = 5
    area1 = width1 * height1
    print("Area:", area1)

    width2 = 8
    height2 = 6
    area2 = width2 * height2
    print("Area:", area2)

    width3 = 12
    height3 = 4
    area3 = width3 * height3
    print("Area:", area3)</code></pre>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded p-4">
                      <p className="font-bold text-green-800 mb-2">After: Refactored</p>
                      <div className="bg-gray-900 rounded p-3">
                        <pre className="text-green-400 font-mono text-xs">
                          <code>{`def calculate_area(width, height):
        """Calculate rectangle area."""
        return width * height

    def display_area(width, height):
        """Calculate and display area."""
        area = calculate_area(width, height)
        print(f"Area: {area}")

    display_area(10, 5)
    display_area(8, 6)
    display_area(12, 4)`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  );
}
