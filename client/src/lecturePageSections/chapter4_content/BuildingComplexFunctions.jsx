import React from "react";

export default function BuildingComplexFunctions() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Building Complex Functions from Simple Ones
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The real power of functions comes from combining them. Simple
                  functions can be building blocks for more complex operations.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Example: Pattern Generator
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Let's build a system for creating text patterns:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code># Basic building blocks
    def draw_line(char, length):
        """Draw a horizontal line."""
        print(char * length)

    def draw_centered_line(char, length, total_width):
        """Draw a centered line within a given width."""
        spaces = (total_width - length) // 2
        print(' ' * spaces + char * length)

    # Build something more complex
    def draw_pyramid(height):
        """Draw a pyramid pattern."""
        for i in range(1, height + 1):
            stars = 2 * i - 1
            draw_centered_line('*', stars, 2 * height - 1)

    draw_pyramid(5)
    # Output:
    #     *
    #    ***
    #   *****
    #  *******
    # *********</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creating a Diamond
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We can reuse our functions to create even more complex patterns:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>def draw_diamond(size):
        """Draw a diamond pattern."""
        # Top half (including middle)
        for i in range(1, size + 1):
            stars = 2 * i - 1
            draw_centered_line('*', stars, 2 * size - 1)
    
        # Bottom half
        for i in range(size - 1, 0, -1):
            stars = 2 * i - 1
            draw_centered_line('*', stars, 2 * size - 1)

    draw_diamond(4)</code></pre>
                  </div>
                </div>
              </section>
  );
}
