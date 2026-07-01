import React from "react";

export default function FastLookupsWithIn() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Fast Lookups with in</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The in operator works with dictionaries and is remarkably fast—even with millions of items! This is what makes dictionaries so powerful.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Checking for Keys</h3>
                <p className="text-gray-700 mb-4">
                  The in operator checks if something appears as a key:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`numbers = {'zero': 0, 'one': 1, 'two': 2}

    # Check for key
    'one' in numbers
    # True

    # Note: checks keys, not values!
    1 in numbers
    # False`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Checking for Values</h3>
                <p className="text-gray-700 mb-4">
                  To check values, use the values() method:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Check if 1 is a value
    1 in numbers.values()
    # True`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Dictionaries Are Fast</h3>
                <p className="text-gray-700 mb-4">
                  Dictionaries use hash tables—the in operator takes the same time regardless of size:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-red-800 mb-2">Lists: Slow</p>
                    <p className="text-sm text-gray-700">Searches from beginning to end</p>
                    <p className="text-sm text-gray-700">100,000 items = 100,000 checks</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-green-800 mb-2">Dictionaries: Fast</p>
                    <p className="text-sm text-gray-700">Direct lookup using hash</p>
                    <p className="text-sm text-gray-700">100,000 items = ~1 check</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Performance Comparison</h3>
                <p className="text-gray-700 mb-4">
                  Finding reversed words—list vs dictionary:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# With a list: > 60 seconds (very slow!)
    def too_slow():
        count = 0
        for word in word_list:
            if reverse_word(word) in word_list:
                count += 1
        return count

    # With a dictionary: < 0.01 seconds (10,000x faster!)
    def much_faster():
        count = 0
        for word in word_dict:
            if reverse_word(word) in word_dict:
                count += 1
        return count`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">⚡ Speed Boost:</span> Converting a list to a dictionary for lookups can make your code thousands of times faster!
                </p>
              </div>
            </section>
  );
}
