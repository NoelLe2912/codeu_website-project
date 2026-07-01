import React from "react";

export default function SerializationSavingData() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Serialization: Saving Data Structures</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Serialization converts complex data structures (like dictionaries) into strings that can be saved to files. Deserialization converts them back.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Serialize?</h3>
                <p className="text-gray-700 mb-4">
                  Save configuration data, user preferences, or application state:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`config = {
        'photo_dir': 'photos',
        'data_dir': 'photo_info',
        'extensions': ['jpg', 'jpeg'],
    }

    # This dictionary needs to be saved to a file
    # How do we convert it to text?`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">YAML Format (Conceptual)</h3>
                <p className="text-gray-700 mb-4">
                  YAML is human-readable and easy for programs to parse:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Conceptual YAML example
    # import yaml

    # Write to file
    # writer = open('config.yaml', 'w')
    # yaml.dump(config, writer)
    # writer.close()

    # YAML format looks like:
    # data_dir: photo_info
    # extensions:
    # - jpg
    # - jpeg
    # photo_dir: photos

    # Read back
    # reader = open('config.yaml')
    # config_readback = yaml.safe_load(reader)
    # config_readback
    # {'data_dir': 'photo_info', ...}`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Terms</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-green-800">Serialization:</span> Object → String (for saving)</p>
                  <p><span className="font-bold text-green-800">Deserialization:</span> String → Object (for loading)</p>
                  <p><span className="font-bold text-green-800">Round-trip:</span> Serialize then deserialize = equivalent object</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">📦 Common Formats:</span> JSON, YAML, XML, and Python's pickle are all serialization formats with different trade-offs.
                </p>
              </div>
            </section>
  );
}
