import React from "react";

export default function ProgrammerDefinedTypes() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Programmer-Defined Types</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Python provides built-in types like int, str, and list. Now we'll create our own custom types using classes. A class is like a blueprint for creating objects.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Defining a Class</h3>
                <p className="text-gray-700 mb-4">
                  Create a new type to represent a time of day:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Time:
        """Represents a time of day."""

    # The class is like a factory
    type(Time)
    # type

    # Creating an instance
    lunch = Time()
    type(lunch)
    # __main__.Time`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Concepts</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-blue-600">Class:</span> A programmer-defined type (the blueprint)</p>
                  <p><span className="font-bold text-blue-600">Class object:</span> The result of a class definition</p>
                  <p><span className="font-bold text-blue-600">Instance:</span> An object created from a class</p>
                  <p><span className="font-bold text-blue-600">Instantiation:</span> The process of creating an instance</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">💡 Think of it:</span> A class is like a cookie cutter, and instances are the cookies you make with it!
                </p>
              </div>
            </section>
  );
}
