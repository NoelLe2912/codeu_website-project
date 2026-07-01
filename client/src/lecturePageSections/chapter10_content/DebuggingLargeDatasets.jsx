import React from "react";

export default function DebuggingLargeDatasets() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Debugging Large Datasets</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When working with big dictionaries and datasets, traditional debugging techniques become unwieldy. Here are strategies that scale better.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Scale Down the Input</h3>
                <p className="text-gray-700 mb-4">
                  Work with smaller datasets while debugging:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• Start with just 10 lines instead of 100,000</p>
                  <p>• Find the smallest example that causes the error</p>
                  <p>• Gradually increase size as you fix bugs</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Check Summaries and Types</h3>
                <p className="text-gray-700 mb-4">
                  Print summary information instead of entire contents:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Instead of printing entire dictionary
    # print(huge_dict)  # Too much output!

    # Print summaries
    print(f"Dictionary has {len(huge_dict)} items")
    print(f"First key: {list(huge_dict.keys())[0]}")
    print(f"Type of values: {type(list(huge_dict.values())[0])}")`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Write Self-Checks</h3>
                <p className="text-gray-700 mb-4">
                  Add sanity checks and consistency checks:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Sanity check
    average = sum(numbers) / len(numbers)
    assert average <= max(numbers), "Average too high!"
    assert average >= min(numbers), "Average too low!"

    # Consistency check
    assert len(dict1) + len(dict2) == len(combined_dict)`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">🔧 Pro Tip:</span> Time spent building good debugging infrastructure (scaffolding) reduces overall debugging time dramatically.
                </p>
              </div>
            </section>
  );
}
