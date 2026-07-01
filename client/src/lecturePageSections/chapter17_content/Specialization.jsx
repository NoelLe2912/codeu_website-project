import React from "react";

export default function Specialization() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Specialization</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Create specialized versions of classes for specific purposes. BridgeHand inherits from Hand but adds bridge-specific functionality.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">BridgeHand Class</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class BridgeHand(Hand):
        \"\"\"Represents a bridge hand.\"\"\"
    
        hcp_dict = {
            'Ace': 4,
            'King': 3,
            'Queen': 2,
            'Jack': 1,
        }
    
        def high_card_point_count(self):
            count = 0
            for card in self.cards:
                rank_name = Card.rank_names[card.rank]
                count += BridgeHand.hcp_dict.get(rank_name, 0)
            return count

    hand = BridgeHand('player 2')
    deck.move_cards(hand, 5)
    hand.high_card_point_count()
    # Returns point total`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Specialization Benefits</h3>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• Reuses Hand functionality (take_card, put_card, etc.)</p>
                  <p>• Adds bridge-specific features (scoring)</p>
                  <p>• No need to modify the parent class</p>
                  <p>• Natural reflection of problem structure</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">🎯 Design Pattern:</span> Specialization creates domain-specific classes from general-purpose ones!
                </p>
              </div>
            </section>
  );
}
