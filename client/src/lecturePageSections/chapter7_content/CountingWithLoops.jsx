import React from "react";

export default function CountingWithLoops() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Counting with Loops
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A counter is a variable used to count how many times something
                  happens. Counters are essential for analyzing data in loops.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Counting All Words
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Let's count how many words are in our word list:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`total = 0

    for line in open('words.txt'):
        word = line.strip()
        total += 1

    total
    # 113783`}</code></pre>
                  </div>
                  <p className="text-gray-700 mt-4">
                    The variable total is a counter that starts at 0 and increases
                    by 1 for each word.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Counting Words with "e"
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We can use multiple counters to track different things:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`total = 0
    count = 0

    for line in open('words.txt'):
        word = line.strip()
        total = total + 1
        if has_e(word):
            count += 1

    # How many words have "e"?
    count
    # 76162

    # As a percentage
    count / total * 100
    # 66.94%`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800">📈 Insight:</span> About
                    two-thirds of English words contain the letter "e"—no wonder it
                    was so hard to write a novel without it!
                  </p>
                </div>
              </section>
  );
}
