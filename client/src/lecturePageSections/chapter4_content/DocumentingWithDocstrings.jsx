import React from "react";

export default function DocumentingWithDocstrings() {
  return (
    <section
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Documenting with Docstrings
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A docstring is documentation that explains what a function does,
                  what parameters it takes, and what it returns. Good docstrings
                  make your code much easier to use.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Docstring Format
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def draw_rectangle(width, height, char='*'):
        """Draw a rectangle with given dimensions.
    
        Args:
            width: integer, the width of the rectangle
            height: integer, the height of the rectangle
            char: string, character to use (default: '*')
    
        Returns:
            None (prints the rectangle)
        """
        # Top edge
        print(char * width)
    
        # Middle rows
        for i in range(height - 2):
            print(char + ' ' * (width - 2) + char)
    
        # Bottom edge
        print(char * width)</code></pre>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-blue-800 mb-3 text-xl">
                      What to Include
                    </h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Brief description of what it does</li>
                      <li>• Each parameter and its type</li>
                      <li>• What the function returns</li>
                      <li>• Any important side effects</li>
                      <li>• Preconditions if needed</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-bold text-purple-800 mb-3 text-xl">
                      Best Practices
                    </h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Use triple quotes (""")</li>
                      <li>• Keep it concise but complete</li>
                      <li>• Write in present tense</li>
                      <li>• Update when you change code</li>
                      <li>• Be consistent in style</li>
                    </ul>
                  </div>
                </div>
              </section>
  );
}
