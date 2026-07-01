import React from "react";

export default function BuildingAWordList() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Building a Word List
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Reading a file once and storing words in a list is much more
                  efficient than reading the file multiple times. Here are two
                  approaches.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Method 1: Loop and Append
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Build the list one word at a time:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`word_list = []

    for line in open('words.txt'):
        word = line.strip()
        word_list.append(word)

    len(word_list)
    # 113783`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Method 2: Read and Split
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Read the entire file and split it in one step:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Read entire file into a string
    string = open('words.txt').read()

    # Split into list of words
    word_list = string.split()

    len(word_list)
    # 113783`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using the Word List
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Now searching is fast with the in operator:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`'demotic' in word_list
    # True

    'contrafibularities' in word_list
    # False`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800">⚡ Efficiency:</span>
                    Loading the word list once lets you search it many times without
                    re-reading the file. Much faster!
                  </p>
                </div>
              </section>
  );
}
