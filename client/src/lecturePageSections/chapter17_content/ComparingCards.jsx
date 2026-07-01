import React from "react";

export default function ComparingCards() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Comparing Cards</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Define special methods to make comparison operators work with cards. This makes cards sortable and comparable!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Equality: __eq__</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Card:
        def __eq__(self, other):
            return self.suit == other.suit and self.rank == other.rank

    queen = Card(1, 12)
    queen2 = Card(1, 12)

    queen == queen2
    # True (same suit and rank)

    six = Card(1, 6)
    queen == six
    # False`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Less Than: __lt__</h3>
                <p className="text-gray-700 mb-4">
                  Compare by suit first, then rank:
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Card:
        def to_tuple(self):
            return (self.suit, self.rank)
    
        def __lt__(self, other):
            return self.to_tuple() < other.to_tuple()

    six < queen
    # True (same suit, but 6 < 12)`}</code></pre>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Totally Ordered</h3>
                <p className="text-gray-700 mb-4">
                  With __eq__, __lt__, and __le__, cards are totally ordered:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>• Any two cards can be compared</p>
                  <p>• Results are consistent (no contradictions)</p>
                  <p>• Cards can be sorted!</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-purple-800">🎴 Tuple Comparison:</span> Python compares tuples element by element, perfect for our suit-then-rank logic!
                </p>
              </div>
            </section>
  );
}
