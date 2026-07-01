import React from "react";

export default function NamingVariables() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Naming Your Variables
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Variable names aren't completely freeform. Python has specific
                  rules about what makes a valid name, and following conventions
                  makes your code easier to read.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    The Rules
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <span className="font-bold text-green-600">✓</span> Can contain
                      letters, numbers, and underscores (_)
                    </p>
                    <p>
                      <span className="font-bold text-green-600">✓</span> Must start
                      with a letter or underscore
                    </p>
                    <p>
                      <span className="font-bold text-green-600">✓</span> Can be any
                      length
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">→</span> Uppercase is
                      allowed but lowercase is conventional
                    </p>
                    <p>
                      <span className="font-bold text-red-600">✗</span> Cannot start
                      with a number
                    </p>
                    <p>
                      <span className="font-bold text-red-600">✗</span> Cannot contain
                      spaces or punctuation (except underscore)
                    </p>
                    <p>
                      <span className="font-bold text-red-600">✗</span> Cannot be a
                      Python keyword
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-xl">
                      ✓ Valid Names
                    </h4>
                    <div className="bg-gray-900 rounded p-4">
                      <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>user_name
    total_count
    item2
    _private_var
    averageScore</code></pre>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-800 mb-3 text-xl">
                      ✗ Invalid Names
                    </h4>
                    <div className="bg-gray-900 rounded p-4">
                      <pre
                        className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"
                      ><code>2fast        # starts with number
    user-name    # contains dash
    my var       # contains space
    class        # keyword
    item!        # contains punctuation</code></pre>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Python Keywords
                  </h3>
                  <p className="text-gray-700 mb-4">
                    These special words are reserved by Python and cannot be used as
                    variable names:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre
                      className="text-yellow-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>False    None     True     and      as       assert   async    await
    break    class    continue def      del      elif     else     except
    finally  for      from     global   if       import   in       is
    lambda   nonlocal not      or       pass     raise    return   try
    while    with     yield</code></pre>
                  </div>
                </div>
              </section>
  );
}
