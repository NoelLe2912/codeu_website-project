import React from "react";

export default function TuplesAreImmutable() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  But Tuples Are Immutable
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The critical difference between tuples and lists: you cannot
                  modify tuple elements. This immutability makes tuples hashable and
                  safe to use as dictionary keys.
                </p>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Cannot Modify Elements
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Attempting to change a tuple causes a TypeError:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`t = ('l', 'u', 'p', 'i', 'n')
    t[0] = 'L'
    # TypeError: 'tuple' object does not support item assignment`}</code></pre>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    No Modifying Methods
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tuples don't have methods like append() or remove():
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`t.remove('l')
    # AttributeError: 'tuple' object has no attribute 'remove'`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Tuples as Dictionary Keys
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Because tuples are immutable, they're hashable and can be used
                    as dictionary keys:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`d = {}
    d[1, 2] = 3
    d[3, 4] = 7

    # Look up using a tuple
    d[1, 2]
    # 3

    # Or use a variable
    t = (3, 4)
    d[t]
    # 7`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Tuples as Dictionary Values
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tuples can also be values in dictionaries:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`t = tuple('abc')
    d = {'key': t}
    d
    # {'key': ('a', 'b', 'c')}`}</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      ✓ Lists: Mutable
                    </h4>
                    <p className="text-gray-700 mb-2">• Can change elements</p>
                    <p className="text-gray-700 mb-2">• Not hashable</p>
                    <p className="text-gray-700">• Cannot be dict keys</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-blue-800 mb-3 text-xl">
                      ✓ Tuples: Immutable
                    </h4>
                    <p className="text-gray-700 mb-2">• Cannot change elements</p>
                    <p className="text-gray-700 mb-2">• Hashable</p>
                    <p className="text-gray-700">• Can be dict keys</p>
                  </div>
                </div>
              </section>
  );
}
