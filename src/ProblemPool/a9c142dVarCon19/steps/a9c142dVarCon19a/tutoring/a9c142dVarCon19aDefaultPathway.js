var hints = [{id: "a9c142dVarCon19a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side.", variabilization: {}}, {id: "a9c142dVarCon19a-h2", type: "hint", dependencies: ["a9c142dVarCon19a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon19a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$6x+8=2$$"], dependencies: ["a9c142dVarCon19a-h2"], title: "Subtraction", text: "Subtract 6x from each side.", variabilization: {}}, {id: "a9c142dVarCon19a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$6x=-6$$"], dependencies: ["a9c142dVarCon19a-h3"], title: "Subtraction", text: "Subtract 8 from each side.", variabilization: {}}, {id: "a9c142dVarCon19a-h5", type: "hint", dependencies: ["a9c142dVarCon19a-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "a9c142dVarCon19a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=-1$$"], dependencies: ["a9c142dVarCon19a-h5"], title: "Division", text: "Divide 6 from each side.", variabilization: {}}, {id: "a9c142dVarCon19a-h7", type: "hint", dependencies: ["a9c142dVarCon19a-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a9c142dVarCon19a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a9c142dVarCon19a-h7"], title: "Verification", text: "Check whether $$12\\left(-1\\right)+8$$ equals $$6\\left(-1\\right)+2$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};