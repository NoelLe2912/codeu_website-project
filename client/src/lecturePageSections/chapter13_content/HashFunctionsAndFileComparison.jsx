import React from "react";

export default function HashFunctionsAndFileComparison() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Hash Functions and File Comparison</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hash functions convert data into fixed-size digests. Files with identical content produce identical digests, making it efficient to find duplicates.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Use Hash Functions?</h3>
                <p className="text-gray-700 mb-4">
                  Comparing file contents directly is slow for many files:
                </p>
                <div className="space-y-3 text-gray-700 ml-4">
                  <p><span className="font-bold text-red-800">Slow way:</span> Compare every pair of files (N² comparisons)</p>
                  <p><span className="font-bold text-green-800">Fast way:</span> Compute digest for each file, compare digests</p>
                  <p>• Same content → Same digest</p>
                  <p>• Different content → Different digest (almost always)</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">MD5 Hash Example (Conceptual)</h3>
                <p className="text-gray-700 mb-4">
                  MD5 produces a 128-bit digest from any amount of data:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Conceptual example
    # import hashlib

    # def md5_digest(filename):
    #     data = open(filename, 'rb').read()
    #     md5_hash = hashlib.md5()
    #     md5_hash.update(data)
    #     return md5_hash.hexdigest()

    # Two different files
    # md5_digest('photo1.jpg')
    # 'aa1d2fc25b7ae247b2931f5a0882fa37'

    # md5_digest('photo2.jpg')
    # '6a501b11b01f89af9c3f6591d7f02c49'

    # Different content = different digests!`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Finding Duplicates</h3>
                <p className="text-gray-700 mb-4">
                  Map digests to file paths to find duplicates:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Strategy:
    # 1. For each file, compute MD5 digest
    # 2. Store in shelf: digest → list of paths
    # 3. Any digest with 2+ paths = duplicate files!

    # digest_db[digest1] = ['path/to/file1.jpg']
    # digest_db[digest2] = ['path/to/file2.jpg', 'path/to/copy.jpg']
    #                       ^^^ These are duplicates!`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">🔐 Real World:</span> Hash functions are also used for passwords, digital signatures, and detecting data corruption!
                </p>
              </div>
            </section>
  );
}
