var hints = [{id: "a01e792probsolve13a-h1", type: "hint", dependencies: [], title: "Identify and Name", text: "Let's first identify what we want to find, and then give it a variable name", variabilization: {}}, {id: "a01e792probsolve13a-h2", type: "hint", dependencies: ["a01e792probsolve13a-h1"], title: "Identify and Name", text: "We want to find the total number of songs and we can name it \"n\"", variabilization: {}}, {id: "a01e792probsolve13a-h3", type: "hint", dependencies: ["a01e792probsolve13a-h2"], title: "Rewrite", text: "Let's now rewrite the question into a simple sentence which sounds like an equation", variabilization: {}}, {id: "a01e792probsolve13a-h4", type: "hint", dependencies: ["a01e792probsolve13a-h3"], title: "Rewrite", text: "It would be: two fifths of the total songs are country songs.", variabilization: {}}, {id: "a01e792probsolve13a-h5", type: "hint", dependencies: ["a01e792probsolve13a-h4"], title: "Translate", text: "Let's translate the rewritten sentence into a real equation", variabilization: {}}, {id: "a01e792probsolve13a-h6", type: "hint", dependencies: ["a01e792probsolve13a-h5"], title: "Translate", text: "Now we would get $$\"\\frac{2}{5} n=16\"$$", variabilization: {}}, {id: "a01e792probsolve13a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{2}{5}$$"], dependencies: ["a01e792probsolve13a-h6"], title: "Solve", text: "What number can we divide from both sides to isolate the variable?", variabilization: {}}, {id: "a01e792probsolve13a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40"], dependencies: ["a01e792probsolve13a-h7"], title: "Solve", text: "What is $$\\frac{16}{\\frac{2}{5}}$$", variabilization: {}}, {id: "a01e792probsolve13a-h9", type: "hint", dependencies: ["a01e792probsolve13a-h8"], title: "Solve", text: "When dividing a number by a fraction we are actually multiplying by the reciprocal. This makes the equation $$16\\frac{5}{2}$$", variabilization: {}}, ]; export {hints};