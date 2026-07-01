import React from "react";

export default function TestingWithDoctest() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Testing with Doctest
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Docstrings can do more than document your functions—they can also
                  test them! This helps ensure your code works correctly.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Writing Doctests
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Include test examples in your docstring using >>> prompts:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def uses_any(word, letters):
        """Checks if a word uses any of a list of letters.
    
        >>> uses_any('banana', 'aeiou')
        True
        >>> uses_any('apple', 'xyz')
        False
        """
        for letter in word.lower():
            if letter in letters.lower():
                return True
        return False`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Running Doctests
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use this helper function to run the tests in a docstring:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`from doctest import run_docstring_examples

    def run_doctests(func):
        run_docstring_examples(func, globals(), name=func.__name__)

    # Test the function
    run_doctests(uses_any)
    # If all tests pass, no output appears`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    When Tests Fail
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If a test fails, you'll see detailed output showing what went
                    wrong:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`**********************************************************************
    File "__main__", line 4, in uses_any_incorrect
    Failed example:
        uses_any_incorrect('banana', 'aeiou')
    Expected:
        True
    Got:
        False`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">✅ Best Practice:</span>
                    Write doctests for every function. They serve as both
                    documentation and automated tests!
                  </p>
                </div>
              </section>
  );
}
