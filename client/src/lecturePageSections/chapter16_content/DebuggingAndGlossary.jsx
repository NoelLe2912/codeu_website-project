import React from "react";

export default function DebuggingAndGlossary() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Debugging & Glossary</h2>
          
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-gray-800">Avoiding Bugs</h3>
                <p className="text-gray-700">In general, there are two ways to avoid aliasing bugs like the one we saw with the shared Point:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Avoid sharing objects</strong>: Use <code>deepcopy</code> when duplicating nested structures.</li>
                  <li><strong>Avoid modifying objects</strong>: Replace impure functions (like <code>translate</code>) with pure functions (like <code>translated</code>) that return new objects instead of altering existing ones.</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Glossary</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-blue-600">shallow copy:</span> A copy operation that does not copy nested objects.</p>
                  <p><span className="font-bold text-blue-600">deep copy:</span> A copy operation that also copies nested objects.</p>
                  <p><span className="font-bold text-blue-600">polymorphism:</span> The ability of a method or operator to work with multiple types of objects.</p>
                </div>
              </div>
            </section>
  );
}
