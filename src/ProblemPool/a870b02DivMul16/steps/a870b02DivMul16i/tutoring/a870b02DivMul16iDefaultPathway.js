var hints = [{id: "a870b02DivMul16i-h1", type: "hint", dependencies: [], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality.", variabilization: {}}, {id: "a870b02DivMul16i-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$9\\frac{y}{9}=-16\\times9$$"], dependencies: ["a870b02DivMul16i-h1"], title: "Multiplication", text: "Multiple 9 from each side.", variabilization: {}}, {id: "a870b02DivMul16i-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-144"], dependencies: ["a870b02DivMul16i-h2"], title: "Simplification", text: "What do we get for y after simplifying the equation?", variabilization: {}}, {id: "a870b02DivMul16i-h4", type: "hint", dependencies: ["a870b02DivMul16i-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a870b02DivMul16i-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a870b02DivMul16i-h4"], title: "Verification", text: "Check whether $$\\frac{-144}{9}$$ equals -16.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};