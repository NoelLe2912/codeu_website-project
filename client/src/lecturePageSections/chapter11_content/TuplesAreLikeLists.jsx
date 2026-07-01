import React from "react";

export default function TuplesAreLikeLists() {
  return (
    <section
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Tuples Are Like Lists
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A tuple is a sequence of values, just like a list. Values can be
                  any type and are indexed by integers. The key difference? Tuples
                  are immutable—once created, they cannot be changed.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating Tuples
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use commas to create tuples (parentheses are optional but
                    common):
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Without parentheses
    t = 'l', 'u', 'p', 'i', 'n'
    type(t)
    # tuple

    # With parentheses (more common)
    t = ('l', 'u', 'p', 'i', 'n')
    type(t)
    # tuple`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Single-Element Tuples
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You must include a trailing comma for single-element tuples:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# With comma - this is a tuple
    t1 = 'p',
    type(t1)
    # tuple

    # Without comma - this is just a string
    t2 = ('p')
    type(t2)
    # str`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using the tuple() Function
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Convert sequences to tuples or create empty tuples:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Empty tuple
    t = tuple()
    t
    # ()

    # Convert string to tuple
    t = tuple('lupin')
    t
    # ('l', 'u', 'p', 'i', 'n')`}</code></pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    List Operations Work on Tuples
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Most list operators work with tuples too:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`t = ('l', 'u', 'p', 'i', 'n')

    # Indexing
    t[0]
    # 'l'

    # Slicing
    t[1:3]
    # ('u', 'p')

    # Concatenation
    tuple('lup') + ('i', 'n')
    # ('l', 'u', 'p', 'i', 'n')

    # Repetition
    tuple('spam') * 2
    # ('s', 'p', 'a', 'm', 's', 'p', 'a', 'm')`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">📝 Note:</span> Avoid
                    using "tuple" as a variable name—it's the name of a built-in
                    function!
                  </p>
                </div>
              </section>
  );
}
