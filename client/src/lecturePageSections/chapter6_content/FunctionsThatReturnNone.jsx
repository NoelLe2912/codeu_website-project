import React from "react";

export default function FunctionsThatReturnNone() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Functions That Return None
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If a function doesn't have a return statement, it automatically
                  returns None—a special value indicating "no result."
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Functions Without Return
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Functions that print but don't return:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def repeat(word, n):
        print(word * n)

    # Prints but returns None
    repeat('Finland, ', 3)
    # Finland, Finland, Finland, 

    # Assign result
    result = repeat('Finland, ', 3)
    # Finland, Finland, Finland, 

    # Check the value
    print(result)
    # None`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Pure Functions: Return Instead of Print
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Pure functions return values without side effects:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def repeat_string(word, n):
        return word * n

    # No output when called
    line = repeat_string('Spam, ', 4)

    # Display later
    print(line)
    # 'Spam, Spam, Spam, Spam, '`}</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 text-xl">
                      Functions with Print
                    </h4>
                    <p className="text-gray-700 mb-2">• Display output immediately</p>
                    <p className="text-gray-700 mb-2">• Return None</p>
                    <p className="text-gray-700">• Can't use result in expressions</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      Pure Functions
                    </h4>
                    <p className="text-gray-700 mb-2">• Return useful values</p>
                    <p className="text-gray-700 mb-2">• No side effects</p>
                    <p className="text-gray-700">• More flexible and reusable</p>
                  </div>
                </div>
              </section>
  );
}
