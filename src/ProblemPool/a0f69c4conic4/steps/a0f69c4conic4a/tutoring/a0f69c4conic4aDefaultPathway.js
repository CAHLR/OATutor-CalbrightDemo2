var hints = [{id: "a0f69c4conic4a-h1", type: "hint", dependencies: [], title: "Polar Equation of Conic", text: "For a conic with a focus at the origin, if the directrix is $$x=p$$ or $$x=-p$$, where p is a positive real number, and the eccentricity is a positive real number e, the conic has a polar equation \\n $$r=\\frac{e p}{1+e cos\\left(\\theta\\right)}$$ or $$r=\\frac{e p}{1-e cos\\left(\\theta\\right)}$$ \\n For a conic with a focus at the origin, if the directrix is $$y=p$$ or $$y=-p$$, where p is a positive real number, and the eccentricity is a positive real number e, the conic has a polar equation \\n $$r=\\frac{e p}{1+e sin\\left(\\theta\\right)}$$ or $$r=\\frac{e p}{1-e sin\\left(\\theta\\right)}$$", variabilization: {}}, {id: "a0f69c4conic4a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Cosine"], dependencies: ["a0f69c4conic4a-h1"], title: "Directrix", text: "The directrix is $$x=p$$. Which trigonometric function is in the denominator?", choices: ["Sine", "Cosine"], variabilization: {}}, {id: "a0f69c4conic4a-h3", type: "hint", dependencies: ["a0f69c4conic4a-h2"], title: "Polar Equation", text: "Our polar equation takes the form $$r=\\frac{e p}{1+e cos\\left(\\theta\\right)}$$ as identified by the directrix $$x=p$$.", variabilization: {}}, {id: "a0f69c4conic4a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{12}{5}$$"], dependencies: ["a0f69c4conic4a-h3"], title: "Numerator", text: "The numerator is the product of the eccentricity and the absolute of the directrix, |p|. What is the numerator?", variabilization: {}}, {id: "a0f69c4conic4a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{3}{5}$$"], dependencies: ["a0f69c4conic4a-h4"], title: "Eccentricity", text: "The eccentricity is the magnitude of the coefficient of the trigonometric function in the denominator. Thus, what is the coefficient of the trigonometric function?", variabilization: {}}, {id: "a0f69c4conic4a-h6", type: "hint", dependencies: ["a0f69c4conic4a-h5"], title: "Polar Form", text: "Substitute the values that were found to obtain the polar form of the conic. We can multiply by 5 to the numerator and denominator to remove the fractions.", variabilization: {}}, ]; export {hints};