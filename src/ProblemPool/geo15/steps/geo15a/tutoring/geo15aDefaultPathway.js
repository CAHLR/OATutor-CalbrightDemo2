var hints = [{id: "geo15a-h1", type: "hint", dependencies: [], title: "Draw", text: "Draw the figure to try to better understand what the problem is asking"}, {id: "geo15a-h2", type: "hint", dependencies: ["geo15a-h1"], title: "Identify and Name", text: "We are looking for all three angles and we can name them all. \"x\" is the first angle, $$\"x+\\left(30\\right)\"$$ is the second angle, and 90 is the third angle because it is a right triangle."}, {id: "geo15a-h3", type: "hint", dependencies: ["geo15a-h2"], title: "Translate", text: "Each of the three angles added together equals 180 degrees, $$x+x+\\left(30\\right)+\\left(90\\right)=180$$"}, {id: "geo15a-h4", type: "hint", dependencies: ["geo15a-h3"], title: "Solve", text: "Solve the equation using algebra"}, {id: "geo15a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x+120"], dependencies: ["geo15a-h4"], title: "Solve", text: "First let's simplify the left side of the equation. What is $$x+x+\\left(30\\right)+\\left(90\\right)$$?"}, {id: "geo15a-h6", type: "hint", dependencies: ["geo15a-h5"], title: "Solve", text: "Now, we can subtract 120 from both sides of the equation to find 2x"}, {id: "geo15a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["60"], dependencies: ["geo15a-h6"], title: "Solve", text: "What is 180-120?"}, {id: "geo15a-h8", type: "hint", dependencies: ["geo15a-h7"], title: "Solve", text: "Now, we have $$2x=60$$, so we can divide both sides by 2 to get x."}, ]; export {hints};