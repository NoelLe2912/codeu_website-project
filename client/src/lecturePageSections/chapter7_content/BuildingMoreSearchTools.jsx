import React from "react";

export default function BuildingMoreSearchTools() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Building More Search Tools
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Now that you understand the linear search pattern, you can create
                  many useful variations. Here are some examples you'll build in the
                  exercises.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    uses_none: Avoiding Letters
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Check if a word avoids all forbidden letters:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def uses_none(word, forbidden):
        """Checks whether a word avoids forbidden letters.
    
        >>> uses_none('banana', 'xyz')
        True
        >>> uses_none('apple', 'efg')
        False
        """
        # Your implementation here
        return None`}</code></pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    uses_only: Restricted Letters
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Check if a word uses only the available letters:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def uses_only(word, available):
        """Checks whether a word uses only available letters.
    
        >>> uses_only('banana', 'ban')
        True
        >>> uses_only('apple', 'apl')
        False
        """
        # Your implementation here
        return None`}</code></pre>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    uses_all: Required Letters
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Check if a word contains all required letters:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre
                      className="text-green-400 font-mono text-sm whitespace-pre-wrap break-words"
                    ><code>{`def uses_all(word, required):
        """Checks whether a word uses all required letters.
    
        >>> uses_all('banana', 'ban')
        True
        >>> uses_all('apple', 'api')
        False
        """
        # Your implementation here
        return None`}</code></pre>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-800"
                      >🔗 Reusability Tip:</span
                    >
                    You can often use one function to implement another! For
                    example, uses_none could use uses_any internally.
                  </p>
                </div>
              </section>
  );
}
