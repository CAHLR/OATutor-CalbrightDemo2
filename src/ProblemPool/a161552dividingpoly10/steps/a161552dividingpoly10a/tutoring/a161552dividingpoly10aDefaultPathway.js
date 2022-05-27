var hints = [{id: "a161552dividingpoly10a-h1", type: "hint", dependencies: [], title: "Rewriting the equation", text: "Remember to fill in missing coefficients with placeholder 0's if possible to make the equation easier to read and work with.", variabilization: {}}, {id: "a161552dividingpoly10a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["a161552dividingpoly10a-h1"], title: "Division", text: "What is the largest degree in the polynomial?", subHints: [{id: "a161552dividingpoly10a-h2-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: [], title: "Division", text: "What is the largest degree in the binomial?", variabilization: {}}], variabilization: {}}, {id: "a161552dividingpoly10a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["a161552dividingpoly10a-h2"], title: "Multiplication", text: "What can we multiply x by to get $$x^2$$?", subHints: [{id: "a161552dividingpoly10a-h3-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x^2+3x$$"], dependencies: [], title: "Multiplication", text: "What is $$x \\left(x+3\\right)$$?", variabilization: {}}], variabilization: {}}, {id: "a161552dividingpoly10a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(-6x\\right)+2$$"], dependencies: ["a161552dividingpoly10a-h3"], title: "Subtraction", text: "What is $$x^2-3x+2-x^2+3x$$?", variabilization: {}}, {id: "a161552dividingpoly10a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: [], title: "Division", text: "What is the largest degree in the remainder?", variabilization: {}}, {id: "a161552dividingpoly10a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6"], dependencies: ["a161552dividingpoly10a-h5"], title: "Multiplication", text: "What can we multiply x by to get $$\\left(-6x\\right)$$?", subHints: [{id: "a161552dividingpoly10a-h6-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(-6x\\right)-18$$"], dependencies: [], title: "Multiplication", text: "What is $$-6\\left(x+3\\right)$$?", variabilization: {}}], variabilization: {}}, {id: "a161552dividingpoly10a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["a161552dividingpoly10a-h6"], title: "Subtraction", text: "What is $$\\left(-6x\\right)+2-\\left(-6x\\right)-18$$? $$\\left(-6x\\right)+2$$ is the remainder from the previous subtraction step.", variabilization: {}}, {id: "a161552dividingpoly10a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{20}{x+3}$$"], dependencies: ["a161552dividingpoly10a-h7"], title: "Remainder", text: "What is the remainder? If there is no remainder enter 0.", variabilization: {}}, {id: "a161552dividingpoly10a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x-6+\\frac{20}{x+3}$$"], dependencies: ["a161552dividingpoly10a-h8"], title: "Combining", text: "Combine all the terms that we used to multiply the divisor by into a single expression along with the divisor.", subHints: [{id: "a161552dividingpoly10a-h9-s1", type: "hint", dependencies: [], title: "Combining", text: "Reminder: The terms we had were, x, -6, $$\\frac{20}{x+3}$$", variabilization: {}}], variabilization: {}}, {id: "a161552dividingpoly10a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{3}$$"], dependencies: [], title: "Plugging it in", text: "What is $$x-6+\\frac{20}{x}+3$$ when $$x=3$$?", variabilization: {}}, ]; export {hints};