var hints = [{id: "comp1a-h1", type: "hint", dependencies: [], title: "General Form", text: "We should begin by writing the general form, and then substitute the given functions.", variabilization: {}}, {id: "comp1a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["g(x)-f(x)"], dependencies: ["comp1a-h1"], title: "General Form", text: "What is the general form of (g-f)(x)?", choices: ["g(x)-f(x)", "$$g x+f x$$", "$$g x f x$$"], variabilization: {}}, {id: "comp1a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x^2-\\left(1\\right)-\\left(x-\\left(1\\right)\\right)$$"], dependencies: ["comp1a-h2"], title: "Substitution", text: "What do we get after substituting the given functions?", choices: ["$$x^2-\\left(1\\right)+x-\\left(1\\right)$$", "$$x^2-\\left(1\\right)-\\left(x-\\left(1\\right)\\right)$$", "$$\\left(x^2-\\left(1\\right)\\right) \\left(x-\\left(1\\right)\\right)$$"], variabilization: {}}, {id: "comp1a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x \\left(x-\\left(1\\right)\\right)$$"], dependencies: ["comp1a-h3"], title: "Rearrangement", text: "What do we get after rearranging the above equation?", choices: ["$$x \\left(x-\\left(1\\right)\\right)$$", "$$x^2 \\left(x-\\left(1\\right)\\right)$$", "$$x \\left(x-\\left(2\\right)\\right)$$"], variabilization: {}}, ]; export {hints};