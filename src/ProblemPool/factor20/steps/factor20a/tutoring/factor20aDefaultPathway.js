var hints = [{id: "factor20a-h1", type: "hint", dependencies: [], title: "Split the expression", text: "Split -73d to -72d and -d"}, {id: "factor20a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9d(d-8)"], dependencies: ["factor20a-h1"], title: "Factor the expression", text: "What is the factoring of $$9d^2$$ - 72d"}, {id: "factor20a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1(d+8)"], dependencies: ["factor20a-h2"], title: "Factor the expression", text: "What is the factoring of $$-d+8$$"}, {id: "factor20a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(9d-1)(d+8)"], dependencies: ["factor20a-h3"], title: "Factor the expression", text: "Factor out the common term of both $$d+8$$"}, ]; export {hints};