import React from "react";

export default function MarkovChainAnalysis() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Markov Chain Analysis
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Markov analysis tracks which words can follow each word. This
                  creates a map of possible word sequences that we can use to
                  generate new, similar text.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Building a Successor Map
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Map each word to the words that can follow it:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`text = "the cat sat on the mat the cat ran"
    words = text.split()

    successor_map = {}
    window = []

    for word in words:
        window.append(word)
    
        if len(window) == 2:
            first, second = window
        
            if first not in successor_map:
                successor_map[first] = [second]
            else:
                successor_map[first].append(second)
        
            window.pop(0)

    successor_map
    # {'the': ['cat', 'mat', 'cat'], 
    #  'cat': ['sat', 'ran'], 
    #  'sat': ['on'], 
    #  'on': ['the'], 
    #  'mat': ['the']}`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Understanding the Map
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Each word points to its possible successors:
                  </p>
                  <div className="space-y-2 text-gray-700 ml-4">
                    <p>
                      • "the" can be followed by "cat" (appears twice) or "mat"
                      (once)
                    </p>
                    <p>• "cat" can be followed by "sat" or "ran"</p>
                    <p>• Words appearing multiple times have higher probability</p>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">🔗 Key Idea:</span>
                    Duplicates in the successor list represent probability—"cat"
                    appears twice after "the", so it's twice as likely to be chosen.
                  </p>
                </div>
              </section>
  );
}
