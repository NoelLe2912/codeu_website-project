import React from "react";

export default function ProgrammingVsHumanLanguages() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Programming Languages vs Human Languages
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Programming languages like Python are very different from the languages
        we speak every day. Understanding these differences will help you
        become a better programmer.
      </p>

      <div className="bg-white rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Differences
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-blue-600 mb-2">
              Precision vs Ambiguity
            </h4>
            <p className="text-gray-700">
              In English, "I saw her duck" could mean multiple things. In
              Python, every instruction has exactly one meaning. There's no
              room for interpretation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 mb-2">
              Conciseness vs Redundancy
            </h4>
            <p className="text-gray-700">
              We often repeat ourselves when speaking to ensure understanding.
              Python code is dense and precise—every character matters.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 mb-2">
              Literal vs Figurative
            </h4>
            <p className="text-gray-700">
              If you tell someone "break a leg," they know you're wishing them
              luck. If you tell Python to break something, it will try to
              actually break it!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
        <p className="text-lg text-gray-700">
          <span className="font-bold text-blue-800">📚 Learning Tip:</span>
          Reading code takes practice and patience. Don't read it like a
          novel—study the structure, check every detail, and take your time.
          Small mistakes in spelling or punctuation can completely change what
          a program does!
        </p>
      </div>
    </section>
  );
}
