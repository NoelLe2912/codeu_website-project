import React from "react";

export default function DebuggingInheritance() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Debugging Inheritance</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Inheritance can make code harder to read because method definitions are spread across classes. Use these techniques to track execution flow.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Finding Method Definitions</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"><code>{`def find_defining_class(obj, method_name):
        \"\"\"Find the class where a method is defined.\"\"\"
        for typ in type(obj).mro():
            if method_name in vars(typ):
                return typ
        return f'Method {method_name} not found.'

    hand = BridgeHand('player 3')
    find_defining_class(hand, 'shuffle')
    # <class 'Deck'>`}</code></pre>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Method Resolution Order (MRO)</h3>
                <p className="text-gray-700 mb-4">
                  Python searches for methods in this order:
                </p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p>1. The instance's class (BridgeHand)</p>
                  <p>2. The parent class (Hand)</p>
                  <p>3. The grandparent class (Deck)</p>
                  <p>4. And so on up the hierarchy</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-green-800">🔍 Debugging Tip:</span> Add print statements at method beginnings to trace execution flow through your inheritance hierarchy!
                </p>
              </div>
            </section>
  );
}
