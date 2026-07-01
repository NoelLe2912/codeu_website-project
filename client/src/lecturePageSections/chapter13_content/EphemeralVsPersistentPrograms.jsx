import React from "react";

export default function EphemeralVsPersistentPrograms() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Ephemeral vs Persistent Programs</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Understanding the difference between temporary and long-lasting data is crucial for designing robust programs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Ephemeral Programs</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• Run for a short time</p>
                    <p>• Data exists only in memory</p>
                    <p>• Everything lost when program ends</p>
                    <p>• Start fresh each run</p>
                    <p><span className="font-bold">Examples:</span> calculators, converters, simple scripts</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Persistent Programs</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• Run indefinitely or frequently</p>
                    <p>• Save data to disk</p>
                    <p>• Remember state between runs</p>
                    <p>• Pick up where they left off</p>
                    <p><span className="font-bold">Examples:</span> databases, web servers, games with save files</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Persistence Mechanisms</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-blue-600">Text files:</span> Simple, human-readable, slow for large data</p>
                  <p><span className="font-bold text-green-600">Databases:</span> Fast, efficient, supports complex queries</p>
                  <p><span className="font-bold text-purple-600">Serialized objects:</span> Save entire data structures</p>
                  <p><span className="font-bold text-orange-600">Cloud storage:</span> Remote, accessible anywhere</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">💾 Design Choice:</span> Choose persistence based on your needs. Games save player progress. Web apps save user data. Calculators don't need to save anything!
                </p>
              </div>
            </section>
  );
}
