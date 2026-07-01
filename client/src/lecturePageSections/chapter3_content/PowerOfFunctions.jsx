import React from "react";

export default function PowerOfFunctions() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  The Power of Functions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You might wonder why you should bother creating functions when you
                  could just write the code directly. Here are the compelling
                  reasons:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div
                    className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6"
                  >
                    <div className="text-4xl mb-3">📛</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">
                      Organization
                    </h4>
                    <p className="text-gray-700">
                      Give meaningful names to blocks of code, making programs
                      easier to read and understand
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6"
                  >
                    <div className="text-4xl mb-3">🔄</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">
                      Reusability
                    </h4>
                    <p className="text-gray-700">
                      Write code once, use it many times. No need to copy and paste
                      the same code
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6"
                  >
                    <div className="text-4xl mb-3">🔧</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">
                      Maintainability
                    </h4>
                    <p className="text-gray-700">
                      Fix bugs or make improvements in one place, and the changes
                      apply everywhere
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-6"
                  >
                    <div className="text-4xl mb-3">🧩</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">Modularity</h4>
                    <p className="text-gray-700">
                      Break complex problems into smaller, manageable pieces you can
                      test independently
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Example: Without vs With Functions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded p-4">
                      <p className="font-bold text-red-800 mb-2">
                        Without Functions (Repetitive)
                      </p>
                      <div className="bg-gray-900 rounded p-3">
                        <pre
                          className="text-red-400 font-mono text-xs"
                        ><code>print("="*20)
    print("Menu")
    print("="*20)
    # ... 50 more lines ...
    print("="*20)
    print("Settings")
    print("="*20)</code></pre>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="font-bold text-green-800 mb-2">
                        With Functions (Reusable)
                      </p>
                      <div className="bg-gray-900 rounded p-3">
                        <pre
                          className="text-green-400 font-mono text-xs"
                        ><code>def print_header(title):
        print("="*20)
        print(title)
        print("="*20)

    print_header("Menu")
    print_header("Settings")</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  );
}
