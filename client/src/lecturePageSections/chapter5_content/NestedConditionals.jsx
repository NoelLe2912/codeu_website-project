import React from "react";

export default function NestedConditionals() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Nested Conditionals</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You can put if statements inside other if statements, but this can get confusing. There are usually better alternatives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-800 mb-3 text-xl">❌ Nested (Harder to Read)</h4>
                  <div className="bg-gray-900 rounded p-4">
                    <pre className="text-red-400 font-mono text-xs whitespace-pre-wrap break-words">
                      <code>{`if x == y:
        print('equal')
    else:
        if x < y:
            print('less')
        else:
            print('greater')`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-3 text-xl">✓ Chained (Easier to Read)</h4>
                  <div className="bg-gray-900 rounded p-4">
                    <pre className="text-green-400 font-mono text-xs whitespace-pre-wrap break-words">
                      <code>{`if x == y:
        print('equal')
    elif x < y:
        print('less')
    else:
        print('greater')`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Using Logical Operators</h3>
                <p className="text-gray-700 mb-4">
                  You can often simplify nested conditionals with logical operators:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded p-4">
                    <p className="font-bold text-red-800 mb-2">Nested:</p>
                    <div className="bg-gray-900 rounded p-3">
                      <pre className="text-red-400 font-mono text-xs whitespace-pre-wrap break-words">
                        <code>{`if 0 < x:
        if x < 10:
            print('single digit')`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <p className="font-bold text-green-800 mb-2">Better:</p>
                    <div className="bg-gray-900 rounded p-3">
                      <pre className="text-green-400 font-mono text-xs whitespace-pre-wrap break-words">
                        <code>{`if 0 < x < 10:
        print('single digit')`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  );
}
