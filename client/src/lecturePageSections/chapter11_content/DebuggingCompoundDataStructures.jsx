import React from "react";

export default function DebuggingCompoundDataStructures() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Debugging Compound Data Structures
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As data structures get more complex—lists of tuples, dictionaries
                  with tuple keys and list values—debugging becomes harder. The
                  structshape module helps visualize complex structures.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using structshape
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The structshape function summarizes data structure types:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`from structshape import structshape

    # Simple list
    t = [1, 2, 3]
    structshape(t)
    # 'list of 3 int'

    # List of lists
    t2 = [[1,2], [3,4], [5,6]]
    structshape(t2)
    # 'list of 3 list of 2 int'

    # Mixed types
    t3 = [1, 2, 3, 4.0, '5', '6', [7], [8], 9]
    structshape(t3)
    # 'list of (3 int, float, 2 str, 2 list of int, int)'`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Complex Structures
                  </h3>
                  <p className="text-gray-700 mb-4">
                    structshape handles tuples, dictionaries, and nested
                    combinations:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# List of tuples
    s = 'abc'
    lt = list(zip([1, 2, 3], s))
    structshape(lt)
    # 'list of 3 tuple of (int, str)'

    # Dictionary
    d = dict(lt)
    structshape(d)
    # 'dict of 3 int->str'`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">🔧 Debugging Tip:</span>
                    When working with complex nested structures, use structshape to
                    quickly verify that your data has the expected structure and
                    types.
                  </p>
                </div>
              </section>
  );
}
