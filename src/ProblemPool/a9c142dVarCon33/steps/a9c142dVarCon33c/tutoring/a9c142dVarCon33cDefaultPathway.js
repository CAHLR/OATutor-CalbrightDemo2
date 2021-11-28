var hints = [{id: "a9c142dVarCon33c-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side.", variabilization: {}}, {id: "a9c142dVarCon33c-h2", type: "hint", dependencies: ["a9c142dVarCon33c-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon33c-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3q-5=-20$$"], dependencies: ["a9c142dVarCon33c-h2"], title: "Subtraction", text: "Subtract 9q from each side.", variabilization: {}}, {id: "a9c142dVarCon33c-h4", type: "hint", dependencies: ["a9c142dVarCon33c-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon33c-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3q=-15$$"], dependencies: ["a9c142dVarCon33c-h4"], title: "Addition", text: "Add 5 to each side of the equation.", variabilization: {}}, {id: "a9c142dVarCon33c-h6", type: "hint", dependencies: ["a9c142dVarCon33c-h5"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon33c-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$q=-5$$"], dependencies: ["a9c142dVarCon33c-h6"], title: "Division", text: "Divide 3 from each side.", variabilization: {}}, {id: "a9c142dVarCon33c-h8", type: "hint", dependencies: ["a9c142dVarCon33c-h7"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a9c142dVarCon33c-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a9c142dVarCon33c-h8"], title: "Verification", text: "Check whether $$12\\left(-5\\right)-5$$ equals $$9\\left(-5\\right)-20$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};