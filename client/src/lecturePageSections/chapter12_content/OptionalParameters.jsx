import React from "react";

export default function OptionalParameters() {
  return (
    <section
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Functions with Optional Parameters
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Optional parameters let you provide default values while allowing
                  users to override them when needed. This makes functions more
                  flexible and easier to use.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Defining Optional Parameters
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use = in the parameter list to set default values:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def print_most_common(word_counter, num=5):
        items = sorted(word_counter.items(), 
                       key=lambda t: t[1], 
                       reverse=True)
    
        for word, freq in items[:num]:
            print(freq, word)

    # Use default (5)
    print_most_common(word_counter)

    # Override with 3
    print_most_common(word_counter, 3)`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Rules for Optional Parameters
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• Required parameters must come first</p>
                    <p>• Optional parameters follow required ones</p>
                    <p>• Default values are assigned during function definition</p>
                    <p>• Callers can override defaults by providing arguments</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">✨ Best Practice:</span>
                    Use optional parameters to make common use cases simple while
                    keeping flexibility for advanced users.
                  </p>
                </div>
              </section>
  );
}
