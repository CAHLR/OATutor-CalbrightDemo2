var hints = [{id: "aafc2dcMultiply5a-h1", type: "hint", dependencies: [], title: "Write in Expanded Form", text: "We start by writing out the expression in its expanded form: $${\\left(-2\\right)}^4=\\left(-2\\right) \\left(-2\\right) \\left(-2\\right) \\left(-2\\right)$$, and we will simplify $$\\left(-2\\right) \\left(-2\\right) \\left(-2\\right) \\left(-2\\right)$$ by performing multiplication three times.", variabilization: {}}, {id: "aafc2dcMultiply5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["aafc2dcMultiply5a-h1"], title: "First Multiplication", text: "We now multiply the first $$\\left(-2\\right) \\left(-2\\right)$$ pair together and substitute the value back into the expression. What is $$\\left(-2\\right) \\left(-2\\right)$$?", variabilization: {}}, {id: "aafc2dcMultiply5a-h3", type: "hint", dependencies: ["aafc2dcMultiply5a-h2"], title: "First Multiplication", text: "$$2\\times2=4$$, and since -2 and -2 have the same signs, our final answer is positive: $$\\left(-2\\right) \\left(-2\\right)=4$$.", variabilization: {}}, {id: "aafc2dcMultiply5a-h4", type: "hint", dependencies: ["aafc2dcMultiply5a-h3"], title: "Current Expression", text: "Substituting 4 back, the orignal expression now becomes $$4\\left(-2\\right) \\left(-2\\right)$$.", variabilization: {}}, {id: "aafc2dcMultiply5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-8"], dependencies: ["aafc2dcMultiply5a-h4"], title: "Second Multiplication", text: "What is $$4\\left(-2\\right)$$?", variabilization: {}}, {id: "aafc2dcMultiply5a-h6", type: "hint", dependencies: ["aafc2dcMultiply5a-h5"], title: "Second Multiplication", text: "$$4\\times2=8$$, and since 4 and -2 have different signs, our final answer is negative: $$4\\left(-2\\right)=-8$$.", variabilization: {}}, {id: "aafc2dcMultiply5a-h7", type: "hint", dependencies: ["aafc2dcMultiply5a-h6"], title: "Current Expression", text: "Substituting -8 back, the orignal expression now becomes $$-8\\left(-2\\right)$$.", variabilization: {}}, {id: "aafc2dcMultiply5a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["aafc2dcMultiply5a-h7"], title: "Third Multiplication", text: "What is $$-8\\left(-2\\right)$$?", variabilization: {}}, {id: "aafc2dcMultiply5a-h9", type: "hint", dependencies: ["aafc2dcMultiply5a-h8"], title: "Third Multiplication", text: "$$8\\times2=16$$, and since -8 and -2 have the same signs, our final answer is positive: $$-8\\left(-2\\right)=16$$.", variabilization: {}}, ]; export {hints};