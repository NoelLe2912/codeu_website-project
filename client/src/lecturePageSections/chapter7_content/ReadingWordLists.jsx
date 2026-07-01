import React from "react";

export default function ReadingWordLists() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Reading Word Lists from Files
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To analyze many words, we need to read them from a file. Python
                  makes this easy with file objects and methods.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Opening Files
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use the built-in open function to create a file object:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`file_object = open('words.txt')

    # Read one line
    file_object.readline()
    # Returns: 'aa\n'`}</code></pre>
                  </div>
                  <p className="text-gray-700 mt-4">
                    The \n represents a newline character that separates words in
                    the file.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Methods vs Functions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    readline is a method—a function associated with an object. You
                    call it using the dot operator:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`# Method syntax: object.method()
    line = file_object.readline()

    # Function syntax: function(argument)
    length = len(line)`}</code></pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Cleaning Up Lines
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use the strip method to remove whitespace (spaces, tabs,
                    newlines):
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`line = file_object.readline()
    word = line.strip()

    # Before strip: 'aah\n'
    # After strip:  'aah'`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Looping Through All Lines
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You can use a file object directly in a for loop to process
                    every line:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`for line in open('words.txt'):
        word = line.strip()
        print(word)`}</code></pre>
                  </div>
                </div>
              </section>
  );
}
