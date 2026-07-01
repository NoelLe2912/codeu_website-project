import React from "react";

export default function DebuggingFunctions() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Debugging Functions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Debugging is like being a detective—you gather clues, form
                  hypotheses, and test them. It's a crucial skill that gets easier
                  with practice.
                </p>

                <div
                  className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-6 mb-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Debugging Mindset
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-blue-600 mb-2">🔍 Detective Work</p>
                      <p className="text-gray-700">
                        Look at the clues (error messages, unexpected output) and
                        figure out what caused them
                      </p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-green-600 mb-2">
                        🧪 Experimentation
                      </p>
                      <p className="text-gray-700">
                        Make a hypothesis about what's wrong, change your code, and
                        test if you're right
                      </p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-purple-600 mb-2">🪜 Small Steps</p>
                      <p className="text-gray-700">
                        Write a little code, test it, then write more. Don't write
                        100 lines before testing!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Common Function Errors
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-bold text-gray-800">
                        Forgetting to call the function
                      </p>
                      <div className="bg-gray-900 rounded p-2 mt-2">
                        <code className="text-red-400 text-sm"
                          >greet_user # Missing parentheses!</code
                        >
                      </div>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="font-bold text-gray-800">
                        Wrong number of arguments
                      </p>
                      <div className="bg-gray-900 rounded p-2 mt-2">
                        <code className="text-yellow-400 text-sm"
                          >echo("Hi") # echo needs 2 arguments!</code
                        >
                      </div>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <p className="font-bold text-gray-800">Incorrect indentation</p>
                      <div className="bg-gray-900 rounded p-2 mt-2">
                        <code className="text-orange-400 text-sm"
                          >def test():<br />print("No indent!") #
                          IndentationError</code
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">💪 Pro Tip:</span> If
                    debugging takes a long time, you're probably writing too much
                    code before testing. Test small pieces frequently to catch
                    errors early!
                  </p>
                </div>
              </section>
  );
}
