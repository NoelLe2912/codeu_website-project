import React from "react";

export default function FStringsForFormatting() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">F-Strings for Formatting</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                F-strings let you embed Python expressions directly in strings, making it easy to create formatted text for writing to files or displaying data.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic F-String Syntax</h3>
                <p className="text-gray-700 mb-4">
                  Prefix strings with 'f' and use curly braces for expressions:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`num_camels = 23
    num_years = 1.5

    # Simple variable substitution
    f'I have spotted {num_camels} camels'
    # 'I have spotted 23 camels'

    # Multiple expressions
    f'In {num_years} years I have spotted {num_camels} camels'
    # 'In 1.5 years I have spotted 23 camels'`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">F-Strings with Expressions</h3>
                <p className="text-gray-700 mb-4">
                  Include calculations and function calls:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Expressions and function calls
    line = f'In {round(num_years * 12)} months I spotted {num_camels} camels'
    line
    # 'In 18 months I spotted 23 camels'

    # Can include any data type
    t = [1, 2, 3]
    d = {'one': 1}
    f'List: {t}, Dict: {d}'
    # "List: [1, 2, 3], Dict: {'one': 1}"`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Writing to Files (Conceptual)</h3>
                <p className="text-gray-700 mb-4">
                  F-strings make file writing clean and readable:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`# Conceptual example
    # writer = open('data.txt', 'w')
    # writer.write(f'Years: {num_years}\n')
    # writer.write(f'Camels: {num_camels}\n')
    # writer.close()

    # Result in file:
    # Years: 1.5
    # Camels: 23`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">💡 Pro Tip:</span> F-strings are cleaner and faster than older string formatting methods like % or .format()!
                </p>
              </div>
            </section>
  );
}
