import React from "react";

export default function DevelopmentPlan() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  A Development Plan
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Here's a proven process for building programs with functions.
                  Following these steps will help you write better code.
                </p>

                <div
                  className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8"
                >
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl font-bold"
                        >
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Start Simple</h4>
                          <p className="text-gray-700">
                            Write a small program with no functions. Get it working
                            first.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl font-bold"
                        >
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Encapsulate</h4>
                          <p className="text-gray-700">
                            Find a coherent piece of code and wrap it in a function.
                            Give it a good name.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl font-bold"
                        >
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Generalize</h4>
                          <p className="text-gray-700">
                            Add parameters to make the function more flexible and
                            reusable.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl font-bold"
                        >
                          4
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Repeat</h4>
                          <p className="text-gray-700">
                            Continue steps 1-3 until you have a set of working
                            functions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl font-bold"
                        >
                          5
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Refactor</h4>
                          <p className="text-gray-700">
                            Look for ways to improve the code. Remove duplication,
                            improve names, simplify logic.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  );
}
