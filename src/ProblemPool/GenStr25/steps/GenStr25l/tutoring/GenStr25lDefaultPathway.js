var hints = [{id: "GenStr25l-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr25l-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$7-3r=28$$"], dependencies: ["GenStr25l-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr25l-h3", type: "hint", dependencies: ["GenStr25l-h2"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr25l-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-3r=21$$"], dependencies: ["GenStr25l-h3"], title: "Subtraction", text: "Subtract 7 from each side.", variabilization: {}}, {id: "GenStr25l-h5", type: "hint", dependencies: ["GenStr25l-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr25l-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$r=-7$$"], dependencies: ["GenStr25l-h5"], title: "Division", text: "Divide -3 from each side.", variabilization: {}}, {id: "GenStr25l-h7", type: "hint", dependencies: ["GenStr25l-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr25l-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr25l-h7"], title: "Verification", text: "Check whether $$\\left(15\\right)-\\left(\\left(3\\right) \\left(-7\\right)+\\left(8\\right)\\right)$$ equals 28.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};