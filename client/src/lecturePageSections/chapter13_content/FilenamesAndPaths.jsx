import React from "react";

export default function FilenamesAndPaths() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Filenames and Paths</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Before working with files, you need to locate them. Files are organized in directories (folders), and paths specify where files live in the filesystem hierarchy.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Paths</h3>
                <p className="text-gray-700 mb-4">
                  Paths identify the location of files and directories:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Conceptual example (won't run in browser terminal)
    # import os

    # Get current directory
    # os.getcwd()
    # '/home/username'

    # Absolute path (starts from root)
    # '/home/username/documents/memo.txt'

    # Relative path (relative to current directory)
    # 'documents/memo.txt'`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Path Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-blue-800 mb-2">Absolute Path</p>
                    <p className="text-sm text-gray-700 mb-2">Complete location from root</p>
                    <p className="text-xs text-gray-600 font-mono">/home/user/file.txt</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-green-800 mb-2">Relative Path</p>
                    <p className="text-sm text-gray-700 mb-2">Location from current directory</p>
                    <p className="text-xs text-gray-600 font-mono">documents/file.txt</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Path Operations (Conceptual)</h3>
                <p className="text-gray-700 mb-4">
                  Common operations for working with paths:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Join paths (works on any OS)
    # os.path.join('photos', 'jan-2023', 'photo1.jpg')
    # 'photos/jan-2023/photo1.jpg'

    # Check if path exists
    # os.path.exists('photos')
    # True

    # Check if it's a file
    # os.path.isfile('photo.jpg')
    # True

    # Check if it's a directory
    # os.path.isdir('photos')
    # True`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">⚠️ Platform Differences:</span> Windows uses backslashes (\) while Mac/Linux use forward slashes (/). Use os.path.join() to write cross-platform code!
                </p>
              </div>
            </section>
  );
}
