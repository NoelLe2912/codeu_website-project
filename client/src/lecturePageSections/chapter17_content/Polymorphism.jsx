import React from "react";

export default function Polymorphism() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Polymorphism</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Methods that work with multiple types are called polymorphic. This makes code more flexible and reusable!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Polymorphic Method Example</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Deck:
        def move_cards(self, other, num):
            for i in range(num):
                card = self.take_card()
                other.put_card(card)

    # Works with any combination!
    deck.move_cards(hand, 5)      # Deck → Hand
    hand.move_cards(deck, 2)      # Hand → Deck
    hand1.move_cards(hand2, 3)    # Hand → Hand`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Polymorphism Works</h3>
                <p className="text-gray-700 mb-4">
                  The method works because:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• Both Deck and Hand have take_card() and put_card()</p>
                  <p>• The method doesn't care about the specific type</p>
                  <p>• It just needs objects with the right methods</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">🎭 Polymorphism:</span> "Many forms" — one method works with many types. This is a key benefit of inheritance!
                </p>
              </div>
            </section>
  );
}
