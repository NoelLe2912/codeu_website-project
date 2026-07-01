import React from "react";

export default function GeneralizationAddingParameters() {
  return (
    <section
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg p-10 mb-12"
              >
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Generalization: Adding Parameters
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Generalization means making a function more flexible by adding
                  parameters. Instead of always doing the same thing, the function
                  can adapt to different situations.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    From Specific to General
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our draw_line function only draws asterisks. Let's make it more
                    general:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># More general version
    def draw_line(char, length):
        """Draw a horizontal line with any character."""
        print(char * length)

    # Now we can draw with different characters
    draw_line('*', 10)
    draw_line('-', 20)
    draw_line('#', 15)

    # Output:
    # **********
    # --------------------
    # ###############</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Generalizing the Square
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Let's make our square function work with any size:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def draw_rectangle(width, height):
        """Draw a rectangle with given dimensions."""
        # Top edge
        print('*' * width)
    
        # Middle rows
        for i in range(height - 2):
            print('*' + ' ' * (width - 2) + '*')
    
        # Bottom edge
        print('*' * width)

    # Draw different sizes
    draw_rectangle(8, 4)
    print()  # Blank line
    draw_rectangle(12, 6)</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-green-800"
                      >✓ Design Principle:</span
                    >
                    Start with a simple, specific function. Then add parameters to
                    make it more general and reusable.
                  </p>
                </div>
              </section>
  );
}
