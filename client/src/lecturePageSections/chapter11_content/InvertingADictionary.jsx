import React from "react";

export default function InvertingADictionary() {
  return (
    <section
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Inverting a Dictionary
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sometimes you need to flip a dictionary—making values into keys
                  and keys into values. Since values don't have to be unique, the
                  inverted dictionary uses lists to handle duplicates.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Problem
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Dictionary values can repeat, but keys cannot:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`d = {'p': 1, 'a': 1, 'r': 2, 'o': 1, 't': 1}

    # If we invert this:
    # Multiple letters have count 1
    # Need: {1: ['p', 'a', 'o', 't'], 2: ['r']}`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Solution
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Map each value to a list of keys with that value:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def invert_dict(d):
        new = {}
        for key, value in d.items():
            if value not in new:
                new[value] = [key]
            else:
                new[value].append(key)
        return new

    d = {'p': 1, 'a': 1, 'r': 2, 'o': 1, 't': 1}
    invert_dict(d)
    # {1: ['p', 'a', 'o', 't'], 2: ['r']}`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">🎯 Pattern:</span> This
                    is the first example where dictionary values are lists—a
                    powerful compound data structure you'll use often!
                  </p>
                </div>
              </section>
  );
}
