import React from "react";

export default function PracticeExercises() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
              <p className="text-xl mb-6">Master inheritance and card games!</p>
              <div className="bg-white/20 rounded-lg p-6 text-left">
                <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                <ul className="space-y-2">
                  <li>• Create a Trick class (inherits from Deck) and find_winner method</li>
                  <li>• Write PokerHand class with has_flush method</li>
                  <li>• Implement has_straight for poker hands</li>
                  <li>• Create has_straight_flush combining both checks</li>
                  <li>• Write has_pair, has_full_house for poker</li>
                  <li>• Debug the Kangaroo class (mutable default parameter bug!)</li>
                  <li>• Experiment with inheritance hierarchies</li>
                </ul>
              </div>
            </section>
  );
}
