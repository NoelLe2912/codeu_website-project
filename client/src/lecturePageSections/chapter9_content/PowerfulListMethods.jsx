import React from "react";

export default function PowerfulListMethods() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Powerful List Methods
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Lists come with many built-in methods that modify the list in
                  place. Understanding these methods is crucial for effective list
                  manipulation.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Adding Elements
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use append to add one element, or extend to add multiple:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`letters = ['a', 'b', 'c', 'd']

    # Add single element
    letters.append('e')
    letters
    # ['a', 'b', 'c', 'd', 'e']

    # Add multiple elements
    letters.extend(['f', 'g'])
    letters
    # ['a', 'b', 'c', 'd', 'e', 'f', 'g']`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Removing Elements
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Two ways to remove elements: by index (pop) or by value
                    (remove):
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`t = ['a', 'b', 'c']

    # Remove by index (returns the element)
    t.pop(1)
    # 'b'

    t
    # ['a', 'c']

    # Remove by value (returns None)
    t = ['a', 'b', 'c']
    t.remove('b')
    # None (no return value shown)

    t
    # ['a', 'c']`}</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-bold text-purple-800 mb-3 text-xl">
                      pop(index)
                    </h4>
                    <p className="text-gray-700 mb-3">• Removes element at index</p>
                    <p className="text-gray-700 mb-3">• Returns the removed element</p>
                    <p className="text-gray-700">• Use when you know position</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      remove(value)
                    </h4>
                    <p className="text-gray-700 mb-3">
                      • Removes first matching element
                    </p>
                    <p className="text-gray-700 mb-3">• Returns None</p>
                    <p className="text-gray-700">• Use when you know value</p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Error: Element Not Found
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Trying to remove a non-existent element causes a ValueError:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`t = ['a', 'b', 'c']
    t.remove('d')
    # ValueError: list.remove(x): x not in list`}</code></pre>
                  </div>
                </div>
              </section>
  );
}
