var hints = [{id: "aafc2dcMultiply7b-h1", type: "hint", dependencies: [], title: "Substitute", text: "Our first step is to substitute -9 for y into the expression, and we get the expression $$-\\left(-9\\right)+8$$.", variabilization: {}}, {id: "aafc2dcMultiply7b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["aafc2dcMultiply7b-h1"], title: "Evaluate -y", text: "By the order of operation, the next step is to evaluate -(-9). What is -(-9)?", variabilization: {}}, {id: "aafc2dcMultiply7b-h3", type: "hint", dependencies: ["aafc2dcMultiply7b-h2"], title: "Evaluate -y", text: "The opposite of -9 is 9, so $$-(-9)=9$$.", variabilization: {}}, {id: "aafc2dcMultiply7b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["17"], dependencies: ["aafc2dcMultiply7b-h3"], title: "Final Answer", text: "The expressin now becomes $$9+8$$. What is $$9+8$$?", variabilization: {}}, ]; export {hints};