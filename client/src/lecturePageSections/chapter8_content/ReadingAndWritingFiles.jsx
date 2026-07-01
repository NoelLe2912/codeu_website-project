import React from "react";

export default function ReadingAndWritingFiles() {
  return (
    <section
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Reading and Writing Files
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  String methods are essential when working with text files. Let's
                  learn how to read from files, process the text, and write modified
                  versions.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Opening Files for Reading
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Use the open function to create a file object:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`reader = open('book.txt')

    # Loop through lines
    for line in reader:
        print(line.strip())`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Opening Files for Writing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Add 'w' mode to open a file for writing:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`reader = open('input.txt')
    writer = open('output.txt', 'w')

    # Process and write lines
    for line in reader:
        # Modify the line somehow
        writer.write(line)

    # Always close files when done
    reader.close()
    writer.close()`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Using the break Statement
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Exit a loop early when you find what you're looking for:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def is_special_line(line):
        return line.startswith('*** ')

    # Find the first special line
    for line in reader:
        if is_special_line(line):
            break  # Exit the loop immediately

    # 'line' now contains the special line we found`}</code></pre>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-yellow-800">⚠️ Important:</span>
                    Opening a file with 'w' mode will erase any existing content! If
                    the file exists, it will be overwritten. Always be careful when
                    writing files.
                  </p>
                </div>
              </section>
  );
}
