import React from "react";

export default function DebuggingFileOperations() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Debugging File Operations</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                File operations introduce new debugging challenges—invisible whitespace, platform differences, and permission errors.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Invisible Whitespace Problems</h3>
                <p className="text-gray-700 mb-4">
                  Use repr() to see hidden characters:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`s = '1 2\t 3\n 4'

    # Printing hides whitespace
    print(s)
    # 1 2	 3
    #  4

    # repr() shows everything
    print(repr(s))
    # '1 2\t 3\n 4'`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Common File Issues</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• <span className="font-bold">Line endings:</span> \n (Unix), \r\n (Windows), \r (old Mac)</p>
                  <p>• <span className="font-bold">File encoding:</span> UTF-8, ASCII, Latin-1 incompatibilities</p>
                  <p>• <span className="font-bold">Case sensitivity:</span> Unix is case-sensitive, Windows often isn't</p>
                  <p>• <span className="font-bold">Path separators:</span> / vs \ on different platforms</p>
                  <p>• <span className="font-bold">Permissions:</span> Can't read/write without proper access</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">🔍 Debugging Tip:</span> When file operations fail mysteriously, check the path, permissions, and use repr() to inspect strings for hidden characters!
                </p>
              </div>
            </section>
  );
}
