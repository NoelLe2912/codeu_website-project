import React from "react";

export default function DebuggingListCode() {
  return (
    <section
                className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Debugging List Code
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  List methods behave differently than string methods. Understanding
                  these differences helps avoid common bugs.
                </p>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Common Mistake: Assigning Method Results
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Most list methods modify the list and return None:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# WRONG! remove returns None
    t = [1, 2, 3]
    t = t.remove(3)

    # Now t is None
    print(t)
    # None

    # Next operation fails
    t.remove(2)
    # AttributeError: 'NoneType' object has no attribute 'remove'`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Correct Pattern
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Don't assign the result—just call the method:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# CORRECT: Just call the method
    t = [1, 2, 3]
    t.remove(3)

    # t is still a list
    print(t)
    # [1, 2]`}</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-blue-800 mb-3 text-xl">
                      String Methods
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Return new string, original unchanged
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-blue-400 text-sm">s = s.strip()</code>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-bold text-purple-800 mb-3 text-xl">
                      List Methods
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Modify list in place, return None
                    </p>
                    <div className="bg-gray-900 rounded p-3">
                      <code className="text-purple-400 text-sm">lst.append(x)</code>
                    </div>
                  </div>
                </div>
              </section>
  );
}
