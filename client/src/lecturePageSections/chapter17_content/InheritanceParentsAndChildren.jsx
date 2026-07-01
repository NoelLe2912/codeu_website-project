import React from "react";

export default function InheritanceParentsAndChildren() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Inheritance: Parents and Children</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Inheritance lets you create a new class based on an existing one. The new class (child) inherits all methods and attributes from the parent, but can add or override them.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Defining a Child Class</h3>
                <p className="text-gray-700 mb-4">
                  Put the parent class name in parentheses:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Hand(Deck):
        \"\"\"Represents a hand of playing cards.\"\"\"
    
        def __init__(self, label=''):
            self.label = label
            self.cards = []

    # Hand inherits from Deck
    hand = Hand('player 1')
    hand.label
    # 'player 1'

    # Can use Deck methods!
    card = deck.take_card()
    hand.put_card(card)  # Inherited from Deck`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Inheritance Rules</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-bold text-blue-600">1.</span> Child instances have all parent attributes (plus extras)</p>
                  <p><span className="font-bold text-blue-600">2.</span> Child has all parent methods (plus extras)</p>
                  <p><span className="font-bold text-blue-600">3.</span> Child methods can override parent methods</p>
                  <p><span className="font-bold text-blue-600">4.</span> Overriding methods should be compatible (same parameters, compatible results)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-3 text-xl">Parent Class (Deck)</h4>
                  <p className="text-gray-700 mb-2">• General purpose</p>
                  <p className="text-gray-700 mb-2">• Basic operations</p>
                  <p className="text-gray-700">• Foundation for children</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-bold text-purple-800 mb-3 text-xl">Child Class (Hand)</h4>
                  <p className="text-gray-700 mb-2">• Specialized purpose</p>
                  <p className="text-gray-700 mb-2">• Inherits parent operations</p>
                  <p className="text-gray-700">• Adds specific features</p>
                </div>
              </div>
            </section>
  );
}
