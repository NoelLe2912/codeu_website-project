import React from "react";

export default function LiskovSubstitutionPrinciple() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">The Liskov Substitution Principle</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Named after computer scientist Barbara Liskov, this principle ensures inheritance is used correctly.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Principle</h3>
                <p className="text-gray-700 mb-4">
                  Any code designed for a parent class should work with child classes:
                </p>
                <div className="space-y-3 text-gray-700">
                  <p>✅ <span className="font-bold">Child instances:</span> Have all parent attributes (can have more)</p>
                  <p>✅ <span className="font-bold">Child methods:</span> Include all parent methods (can have more)</p>
                  <p>✅ <span className="font-bold">Overriding:</span> New methods take same parameters, return compatible results</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Breaking the Rules</h3>
                <p className="text-gray-700 mb-4">
                  If you violate these rules:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• Code expecting a parent won't work with children</p>
                  <p>• Your program will collapse like a house of cards!</p>
                  <p>• Debugging becomes very difficult</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">📜 Design Law:</span> Follow the Liskov Substitution Principle to create robust, maintainable inheritance hierarchies!
                </p>
              </div>
            </section>
  );
}
