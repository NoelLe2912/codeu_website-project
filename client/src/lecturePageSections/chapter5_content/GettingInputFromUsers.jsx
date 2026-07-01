import React from "react";

export default function GettingInputFromUsers() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Getting Input from Users</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The input() function lets your programs interact with users by asking for information. Note: input() works in regular Python environments.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Input</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`# Ask for user's name
    name = input('What is your name? ')
    print('Hello,', name)

    # Ask for a number (returns a string!)
    age = input('How old are you? ')
    age = int(age)  # Convert to integer
    print('Next year you will be', age + 1)`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-blue-800">⚠️ Important:</span> input() always returns a string, even if the user types a number. Use int() or float() to convert when needed.
                </p>
              </div>
            </section>
  );
}
