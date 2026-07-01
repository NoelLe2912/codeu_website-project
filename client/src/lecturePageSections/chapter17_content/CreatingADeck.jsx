import React from "react";

export default function CreatingADeck() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Creating a Deck</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Deck holds a collection of Card objects. We'll add methods to shuffle, sort, and deal cards.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Deck Class</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Deck:
        def __init__(self, cards):
            self.cards = cards
    
        @staticmethod
        def make_cards():
            cards = []
            for suit in range(4):
                for rank in range(2, 15):
                    card = Card(suit, rank)
                    cards.append(card)
            return cards

    # Create a full deck
    cards = Deck.make_cards()
    deck = Deck(cards)
    len(deck.cards)
    # 52`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Deck Operations</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`import random

    class Deck:
        def take_card(self):
            return self.cards.pop()
    
        def put_card(self, card):
            self.cards.append(card)
    
        def shuffle(self):
            random.shuffle(self.cards)
    
        def sort(self):
            self.cards.sort()  # Uses Card.__lt__

    # Deal a card
    card = deck.take_card()

    # Shuffle
    deck.shuffle()

    # Sort
    deck.sort()`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">🔄 Delegation:</span> Deck.sort just calls list.sort, passing responsibility to the built-in method. This is called delegation!
                </p>
              </div>
            </section>
  );
}
