var hints = [{id: "DivMul27a-h1", type: "hint", dependencies: [], title: "Translation", text: "The first step is translating the sentences into an equation."}, {id: "DivMul27a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["n/7=-21"], dependencies: ["DivMul27a-h1"], title: "Translation", text: "Translate it into an equation."}, {id: "DivMul27a-h3", type: "hint", dependencies: ["DivMul27a-h2"], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality."}, {id: "DivMul27a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["n=-147"], dependencies: ["DivMul27a-h3"], title: "Multiplication", text: "Multiple 7 from each side."}, {id: "DivMul27a-h5", type: "hint", dependencies: ["DivMul27a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul27a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul27a-h5"], title: "Verification", text: "Check whether $$\\frac{-\\left(147\\right)}{7}$$ equals -21.", choices: ["TRUE", "FALSE"]}, ]; export {hints};