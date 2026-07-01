import React from "react";

export default function PrototypeAndPatchDevelopment() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Prototype and Patch Development</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Start with a simple version that works for easy cases, then fix bugs as you discover them. This is effective but can lead to complicated code.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Problem</h3>
                <p className="text-gray-700 mb-4">
                  Our increment_time function breaks with certain inputs:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-red-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`start = make_time(9, 40, 0)
    end = add_time(start, 1, 32, 0)
    print_time(end)
    # 10:72:00  (Invalid! Minutes can't be 72!)`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Patch: Handle Overflow</h3>
                <p className="text-gray-700 mb-4">
                  Fix it by checking for values >= 60:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def increment_time(time, hours, minutes, seconds):
        time.hour += hours
        time.minute += minutes
        time.second += seconds

        if time.second >= 60:
            time.second -= 60
            time.minute += 1

        if time.minute >= 60:
            time.minute -= 60
            time.hour += 1`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Better Patch: Use divmod</h3>
                <p className="text-gray-700 mb-4">
                  Handle any size increment:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def increment_time(time, hours, minutes, seconds):
        time.hour += hours
        time.minute += minutes
        time.second += seconds
    
        carry, time.second = divmod(time.second, 60)
        carry, time.minute = divmod(time.minute + carry, 60)
        carry, time.hour = divmod(time.hour + carry, 24)`}</code></pre>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">⚠️ Limitation:</span> Prototype and patch works but can create messy code with many special cases. Better to plan ahead!
                </p>
              </div>
            </section>
  );
}
