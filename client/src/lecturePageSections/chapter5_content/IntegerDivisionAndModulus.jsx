import React from "react";

export default function IntegerDivisionAndModulus() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Integer Division and Modulus</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The modulus operator (%) is more useful than it might seem at first. It returns the remainder when one number is divided by another.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Converting Minutes to Hours</h3>
                <p className="text-gray-700 mb-4">
                  Suppose a movie is 105 minutes long. How many hours and minutes is that?
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`minutes = 105

    # Integer division gives whole hours
    hours = minutes // 60      # Result: 1

    # Modulus gives remaining minutes
    remainder = minutes % 60   # Result: 45

    print(f"{hours} hours and {remainder} minutes")`}</code>
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-800 mb-3 text-xl">Checking Divisibility</h4>
                  <p className="text-gray-700 mb-3">If x % y is zero, then x is divisible by y</p>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-400 text-sm">{`10 % 2  # 0 (divisible)\n10 % 3  # 1 (not divisible)`}</code>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-3 text-xl">Extracting Digits</h4>
                  <p className="text-gray-700 mb-3">Get the rightmost digits of a number</p>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-400 text-sm">{`123 % 10   # 3 (last digit)\n123 % 100  # 23 (last 2 digits)`}</code>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clock Arithmetic</h3>
                <p className="text-gray-700 mb-4">
                  If an event starts at 11 AM and lasts 3 hours, when does it end?
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words">
                    <code>{`start = 11
    duration = 3
    end = (start + duration) % 12
    # Result: 2 (2 PM)`}</code>
                  </pre>
                </div>
              </div>
            </section>
  );
}
