import React from "react";

export default function ListsAreMutable() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Lists Are Mutable
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Unlike strings (which are immutable), lists are mutable—you can
                  change their elements. This is one of the most important
                  differences between lists and strings.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Accessing Elements
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use the bracket operator to read elements (just like strings):
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`cheeses = ['Cheddar', 'Edam', 'Gouda']

    # First element (index 0)
    cheeses[0]
    # 'Cheddar'

    # Last element (negative index)
    cheeses[-1]
    # 'Gouda'`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Modifying Elements
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use the bracket operator on the left side to change elements:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`numbers = [42, 123]

    # Change the second element
    numbers[1] = 17

    numbers
    # [42, 17]`}</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 text-xl">
                      Strings: Immutable
                    </h4>
                    <div className="bg-gray-900 rounded p-3">
                      <pre className="text-red-400 text-sm"><code>{`s = 'hello'
    s[0] = 'H'
    # TypeError!`}</code></pre>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      Cannot change characters
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      Lists: Mutable
                    </h4>
                    <div className="bg-gray-900 rounded p-3">
                      <pre
                        className="text-green-400 text-sm"
                      ><code>{`lst = ['h', 'e', 'l', 'l', 'o']
    lst[0] = 'H'
    # Works!`}</code></pre>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      Can change elements freely
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The in Operator
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Check if an element exists in a list:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`cheeses = ['Cheddar', 'Edam', 'Gouda']

    'Edam' in cheeses
    # True

    'Wensleydale' in cheeses
    # False`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-blue-800"
                      >🔑 Critical Concept:</span
                    >
                    Mutability means you can modify lists in place. This has
                    important implications for how lists behave when passed to
                    functions or assigned to multiple variables!
                  </p>
                </div>
              </section>
  );
}
