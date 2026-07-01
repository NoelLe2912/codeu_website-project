import React from "react";

export default function PersistentKeyValueStorage() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Databases: Persistent Key-Value Storage</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Databases store data more efficiently than text files. Python's shelve module provides a simple dictionary-like database called a key-value store.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">What is a Database?</h3>
                <p className="text-gray-700 mb-4">
                  A file organized for efficient data operations:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• More efficient than reading entire text files</p>
                  <p>• Can handle large amounts of data</p>
                  <p>• Supports fast lookups and updates</p>
                  <p>• Provides data persistence between program runs</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Shelve: Dictionary-Like Database</h3>
                <p className="text-gray-700 mb-4">
                  Shelve objects work like dictionaries but save to disk:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Conceptual example
    # import shelve

    # Open a shelf (creates if needed)
    # db = shelve.open('captions', 'c')

    # Use like a dictionary
    # db['jan-2023/photo1.jpg'] = 'Cat nose'
    # db['jan-2023/photo2.jpg'] = 'Sunset'

    # Retrieve values
    # db['jan-2023/photo1.jpg']
    # 'Cat nose'

    # Update values
    # db['jan-2023/photo1.jpg'] = 'Close up of cat nose'

    # Close when done
    # db.close()`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dictionary Methods Work Too</h3>
                <p className="text-gray-700 mb-4">
                  Shelves support most dictionary operations:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Check if key exists
    # 'jan-2023/photo1.jpg' in db
    # True

    # Get keys and values
    # list(db.keys())
    # ['jan-2023/photo1.jpg', 'jan-2023/photo2.jpg']

    # Loop through
    # for key in db:
    #     print(key, ':', db[key])`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">⚠️ Important:</span> Shelves create multiple files (.dat for data, .dir for directory info). Always close shelves when done!
                </p>
              </div>
            </section>
  );
}
