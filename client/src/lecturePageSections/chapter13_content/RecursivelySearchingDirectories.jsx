import React from "react";

export default function RecursivelySearchingDirectories() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Recursively Searching Directories</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To find all files in a directory tree, we need to search recursively through subdirectories. This is a classic application of recursion!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Walk Function (Conceptual)</h3>
                <p className="text-gray-700 mb-4">
                  Recursively visit every file and subdirectory:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Conceptual recursive directory walker
    # def walk(dirname):
    #     for name in os.listdir(dirname):
    #         path = os.path.join(dirname, name)
    #         
    #         if os.path.isfile(path):
    #             print(path)  # Found a file
    #         elif os.path.isdir(path):
    #             walk(path)   # Recurse into subdirectory

    # walk('photos')
    # Output:
    # photos/notes.txt
    # photos/jan-2023/photo1.jpg
    # photos/jan-2023/photo2.jpg
    # photos/feb-2023/photo1.jpg`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-blue-600">Step 1:</span> List all items in the current directory</p>
                  <p><span className="font-bold text-blue-600">Step 2:</span> For each item, check if it's a file or directory</p>
                  <p><span className="font-bold text-blue-600">Step 3:</span> If file → process it (print, hash, etc.)</p>
                  <p><span className="font-bold text-blue-600">Step 4:</span> If directory → call walk() on it (recursion!)</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filtering by Extension</h3>
                <p className="text-gray-700 mb-4">
                  Process only specific file types:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# def is_image(path, extensions):
    #     for ext in extensions:
    #         if path.endswith(ext):
    #             return True
    #     return False

    # def walk_images(dirname, extensions):
    #     for name in os.listdir(dirname):
    #         path = os.path.join(dirname, name)
    #         
    #         if os.path.isfile(path):
    #             if is_image(path, extensions):
    #                 process_image(path)
    #         elif os.path.isdir(path):
    #             walk_images(path, extensions)`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">🌳 Tree Structure:</span> Directory trees are perfect for recursion—each subdirectory is itself a smaller tree!
                </p>
              </div>
            </section>
  );
}
