var hints = [{id: "hyperbola12a-h1", type: "hint", dependencies: [], title: "Standard Form of Hyperbola", text: "The standard form for hyperbola is either $$\\frac{{\\left(x-h\\right)}^2}{a^2}-\\left(y-k+\\frac{{rightt}^2}{b^2}=1$$ \\n or $$\\frac{{\\left(y-k\\right)}^2}{a^2}-\\left(x-h+\\frac{{rightt}^2}{b^2}=1$$ depending on the transverse axis.", variabilization: {}}, {id: "hyperbola12a-h2", type: "hint", dependencies: ["hyperbola12a-h1"], title: "Manipulating the Equation", text: "If we are not able to tell directly whether an equation is a hyperbola using properties of the equation, we can attempt to force out a similar form to check.", variabilization: {}}, {id: "hyperbola12a-h3", type: "hint", dependencies: ["hyperbola12a-h2"], title: "Manipulating the Equation", text: "We would want to make the RHS 1. We can do so by dividing the equation by 400 on both side.", variabilization: {}}, {id: "hyperbola12a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{x^2}{16}-\\frac{y^2}{25}=1$$"], dependencies: ["hyperbola12a-h3"], title: "Manipulating the Equation", text: "We observe that there is no coefficient on the numerator. This tells us we should remove the coefficient of $$x^2$$ and $$y^2$$. We can do so by dividing the denominator by the coefficient. We would thus divide 400 by 25 for the $$x^2$$ term and divide 400 by 16 for the $$y^2$$ term. What is the current expression?", choices: ["$$\\frac{x^2}{16}-\\frac{y^2}{25}=1$$", "$$\\frac{x^2}{25}-\\frac{y^2}{16}=1$$"], variabilization: {}}, {id: "hyperbola12a-h5", type: "hint", dependencies: ["hyperbola12a-h4"], title: "Squaring", text: "We observe that the equation we found has the form of a hyperbola. We want to square the denominator to get a and b so that we can express in the standard form.", variabilization: {}}, ]; export {hints};