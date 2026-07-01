import React from "react";

export default function CardStringRepresentation() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Card String Representation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Use __str__ to create human-readable card representations. This makes testing and debugging much easier!
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The __str__ Method</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`class Card:
        # ... class variables and __init__ ...
    
        def __str__(self):
            rank_name = Card.rank_names[self.rank]
            suit_name = Card.suit_names[self.suit]
            return f'{rank_name} of {suit_name}'

    queen = Card(1, 12)  # Diamonds, Queen
    print(queen)
    # Queen of Diamonds`}</code></pre>
                </div>
              </div>
            </section>
  );
}
