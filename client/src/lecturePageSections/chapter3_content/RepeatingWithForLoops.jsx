import React from "react";

export default function RepeatingWithForLoops() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Repeating with For Loops
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The for loop lets you repeat actions without writing the same code
                  over and over. It's one of the most useful tools in programming.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic For Loop Structure
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A for loop has a header (ending with a colon) and an indented
                    body:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>for num in range(3):
        print(num)

    # Output:
    # 0
    # 1
    # 2</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How It Works
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <span className="font-bold text-blue-600">Step 1:</span> The
                      range(3) creates a sequence: 0, 1, 2
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 2:</span> Python
                      assigns the first value (0) to num and runs the body
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 3:</span> It loops
                      back, assigns the next value (1) to num, and runs the body
                      again
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 4:</span> This
                      continues until all values are used
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Loops in Functions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can put loops inside functions to repeat actions a specific
                    number of times:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def display_countdown(start):
        for i in range(start):
            print("T-minus", start - i)
        print("Liftoff!")

    display_countdown(5)
    # Output:
    # T-minus 5
    # T-minus 4
    # T-minus 3
    # T-minus 2
    # T-minus 1
    # Liftoff!</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">⚡ Remember:</span>
                    Python counts starting from 0. So range(5) gives you 0, 1, 2, 3,
                    4—that's five numbers total, but the highest is 4.
                  </p>
                </div>
              </section>
  );
}
