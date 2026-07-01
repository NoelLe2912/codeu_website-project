import React from "react";

export default function StringsWorkingWithText() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Strings: Working with Text
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Strings are sequences of characters (letters, numbers, symbols) wrapped
        in quotation marks. They let Python work with text, not just numbers.
      </p>

      <div className="bg-white rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Creating Strings
        </h3>
        <div className="bg-gray-900 rounded-lg p-6">
          <pre className="text-green-400 font-mono text-sm">
            <code>{`# Single quotes work
'Python is awesome!'

# Double quotes work too
"Learning to code"

# Use double quotes for apostrophes
"I'm learning Python today"`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          String Operations
        </h3>
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2">
            # Concatenation: Joining strings together
          </p>
          <pre className="text-green-400 font-mono text-sm mb-4">
            <code>{`'Hello, ' + 'world!'  # Result: 'Hello, world!'`}</code>
          </pre>

          <p className="text-gray-400 text-sm mb-2">
            # Repetition: Repeating strings
          </p>
          <pre className="text-green-400 font-mono text-sm mb-4">
            <code>{`'Ha' * 3  # Result: 'HaHaHa'`}</code>
          </pre>

          <p className="text-gray-400 text-sm mb-2">
            # Length: Counting characters
          </p>
          <pre className="text-green-400 font-mono text-sm">
            <code>{`len('Python')  # Result: 6`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
        <p className="text-lg text-gray-700">
          <span className="font-bold text-yellow-800">💡 Remember:</span> The +
          operator has different meanings for numbers and strings. With numbers
          it adds, with strings it joins them together!
        </p>
      </div>
    </section>
  );
}
