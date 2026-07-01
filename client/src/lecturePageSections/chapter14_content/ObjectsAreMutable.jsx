import React from "react";

export default function ObjectsAreMutable() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Objects Are Mutable</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Unlike strings and tuples, objects created from custom classes are mutable—you can change their attributes after creation. This power requires care!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modifying Objects</h3>
                <p className="text-gray-700 mb-4">
                  Change attributes directly:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`start = make_time(9, 20, 0)
    print_time(start)
    # 09:20:00

    # Modify the object
    start.hour += 1
    start.minute += 32

    print_time(start)
    # 10:52:00`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Impure Functions</h3>
                <p className="text-gray-700 mb-4">
                  Functions that modify their parameters:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def increment_time(time, hours, minutes, seconds):
        time.hour += hours
        time.minute += minutes
        time.second += seconds

    start = make_time(9, 20, 0)
    increment_time(start, 1, 32, 0)
    print_time(start)
    # 10:52:00  (start was modified!)`}</code></pre>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Aliasing Problem</h3>
                <p className="text-gray-700 mb-4">
                  Inside the function, the parameter is an alias for the argument:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• <code>time</code> and <code>start</code> refer to the same object</p>
                  <p>• Changes to <code>time</code> affect <code>start</code></p>
                  <p>• The variable name <code>start</code> becomes misleading (it's now the end time!)</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">⚠️ Side Effects:</span> Functions that modify objects create side effects that can be confusing. Use with care!
                </p>
              </div>
            </section>
  );
}
