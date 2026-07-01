import React from "react";

export default function RepresentingPlayingCards() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Representing Playing Cards</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Before learning inheritance, let's build a Card class. We'll use integer encoding to make cards easy to compare—mapping suits and ranks to numbers.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Encoding Suits and Ranks</h3>
                <p className="text-gray-700 mb-4">
                  Map suit names and ranks to integers:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded p-4">
                    <p className="font-bold text-blue-800 mb-2">Suits</p>
                    <p className="text-sm text-gray-700">0: Clubs</p>
                    <p className="text-sm text-gray-700">1: Diamonds</p>
                    <p className="text-sm text-gray-700">2: Hearts</p>
                    <p className="text-sm text-gray-700">3: Spades</p>
                  </div>
                  <div className="bg-green-50 rounded p-4">
                    <p className="font-bold text-green-800 mb-2">Ranks</p>
                    <p className="text-sm text-gray-700">2-10: Face value</p>
                    <p className="text-sm text-gray-700">11: Jack</p>
                    <p className="text-sm text-gray-700">12: Queen</p>
                    <p className="text-sm text-gray-700">13: King</p>
                    <p className="text-sm text-gray-700">14: Ace</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Class Variables</h3>
                <p className="text-gray-700 mb-4">
                  Store mappings as class variables (shared by all instances):
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Card:
        \"\"\"Represents a standard playing card.\"\"\"
    
        suit_names = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
        rank_names = [None, 'Ace', '2', '3', '4', '5', '6', '7',
                      '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    
        def __init__(self, suit, rank):
            self.suit = suit
            self.rank = rank

    # Access class variables
    Card.suit_names[0]
    # 'Clubs'

    Card.rank_names[11]
    # 'Jack'`}</code></pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-yellow-800">💡 Design Choice:</span> rank_names starts with None so index 2 maps to '2', index 3 to '3', etc. Element 14 is 'Ace' (high).
                </p>
              </div>
            </section>
  );
}
