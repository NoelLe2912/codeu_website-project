import React from "react";

export default function LinearSearchPattern() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  The Linear Search Pattern
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Linear search is a fundamental programming pattern. It loops
                  through a sequence and checks each element until it finds what
                  it's looking for—or reaches the end.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating a General Search Function
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Let's create uses_any, which checks if a word uses any of a
                    given set of letters:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def uses_any(word, letters):
        for letter in word.lower():
            if letter in letters.lower():
                return True
        return False

    uses_any('banana', 'aeiou')  # True
    uses_any('apple', 'xyz')     # False
    uses_any('Banana', 'AEIOU')  # True (case-insensitive)`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How Linear Search Works
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <span className="font-bold text-blue-600">Step 1:</span> Loop
                      through each element in the sequence
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 2:</span> Check if
                      the current element matches what you're looking for
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 3:</span> If it
                      matches, return True immediately
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Step 4:</span> If you
                      finish the loop without finding it, return False
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-100 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      ✓ Correct Pattern
                    </h4>
                    <div className="bg-gray-900 rounded p-3">
                      <pre
                        className="text-green-400 text-sm"
                      ><code>{`for item in sequence:
        if condition:
            return True
    return False`}</code></pre>
                    </div>
                  </div>

                  <div className="bg-red-100 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 text-xl">
                      ✗ Common Mistake
                    </h4>
                    <div className="bg-gray-900 rounded p-3">
                      <pre className="text-red-400 text-sm"><code>{`for item in sequence:
        if condition:
            return True
        else:
            return False`}</code></pre>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">⚠️ Warning:</span> Don't
                    put both return statements inside the loop! The second return
                    should only happen after checking all elements.
                  </p>
                </div>
              </section>
  );
}
