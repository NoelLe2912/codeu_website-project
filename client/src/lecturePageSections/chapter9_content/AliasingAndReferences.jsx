import React from "react";

export default function AliasingAndReferences() {
  return (
    <section
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Aliasing and References
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When multiple variables refer to the same object, they are
                  aliases. Changes made through one alias affect all others—this can
                  cause surprising behavior if you're not careful!
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating Aliases
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you assign one variable to another, both refer to the same
                    object:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`a = [1, 2, 3]
    b = a

    # They are identical (same object)
    b is a
    # True`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Aliasing Effects
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Changes through one alias affect the other:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`a = [1, 2, 3]
    b = a

    # Modify through b
    b[0] = 5

    # a "sees" the change!
    a
    # [5, 2, 3]`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Avoiding Aliasing Problems
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a copy if you want independent lists:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`a = [1, 2, 3]
    b = a[:]  # Create a copy

    # Now they're different objects
    b is a
    # False

    # Changes to b don't affect a
    b[0] = 5
    a
    # [1, 2, 3]`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Immutable Objects and Aliasing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    With immutable objects like strings, aliasing isn't a problem:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`a = 'banana'
    b = a

    # You can't change a string anyway
    # So it doesn't matter if they're the same object`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">⚠️ Danger Zone:</span>
                    Aliasing with mutable objects is error-prone. When working with
                    lists, be careful about creating copies versus creating
                    references!
                  </p>
                </div>
              </section>
  );
}
