import React from "react";

export default function ExtractingStringSlices() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Extracting String Slices
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A slice is a segment of a string. You can extract slices using the
                  [n:m] operator, which returns characters from position n up to
                  (but not including) position m.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Basic Slicing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The slice [n:m] includes the character at index n but excludes
                    the character at index m:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`fruit = 'banana'
    fruit[0:3]
    # 'ban'

    fruit[3:6]
    # 'ana'`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Understanding Slice Boundaries
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Think of indices as pointing between characters, not at them:
                  </p>
                  <div className="flex justify-center my-4">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex gap-1 text-center">
                        <div className="text-xs text-gray-500">0</div>
                        <div
                          className="bg-blue-500 text-white px-3 py-2 rounded font-bold"
                        >
                          b
                        </div>
                        <div className="text-xs text-gray-500">1</div>
                        <div
                          className="bg-blue-500 text-white px-3 py-2 rounded font-bold"
                        >
                          a
                        </div>
                        <div className="text-xs text-gray-500">2</div>
                        <div
                          className="bg-blue-500 text-white px-3 py-2 rounded font-bold"
                        >
                          n
                        </div>
                        <div className="text-xs text-gray-500">3</div>
                        <div
                          className="bg-blue-500 text-white px-3 py-2 rounded font-bold"
                        >
                          a
                        </div>
                        <div className="text-xs text-gray-500">4</div>
                        <div
                          className="bg-blue-500 text-white px-3 py-2 rounded font-bold"
                        >
                          n
                        </div>
                        <div className="text-xs text-gray-500">5</div>
                        <div
                          className="bg-blue-500 text-white px-3 py-2 rounded font-bold"
                        >
                          a
                        </div>
                        <div className="text-xs text-gray-500">6</div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        fruit[0:3] selects 'ban' (positions 0, 1, 2)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Omitting Indices
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can omit the start or end index for convenient shortcuts:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`fruit = 'banana'

    # Omit first index: start from beginning
    fruit[:3]
    # 'ban'

    # Omit second index: go to the end
    fruit[3:]
    # 'ana'

    # What does fruit[:] mean?
    fruit[:]
    # 'banana' (entire string!)`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Empty Slices
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If the first index is greater than or equal to the second, you
                    get an empty string:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`fruit[3:3]
    # ''

    len(fruit[3:3])
    # 0`}</code></pre>
                  </div>
                </div>
              </section>
  );
}
