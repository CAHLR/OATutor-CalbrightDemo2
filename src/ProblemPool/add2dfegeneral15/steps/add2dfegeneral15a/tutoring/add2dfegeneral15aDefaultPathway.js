var hints = [{id: "add2dfegeneral15a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: [], title: "Is there a greatest common factor?", text: "", choices: ["Yes", "No"], variabilization: {}}, {id: "add2dfegeneral15a-h2", type: "hint", dependencies: ["add2dfegeneral15a-h1"], title: "GCF", text: "Factor out the greatest common factor 4", variabilization: {}}, {id: "add2dfegeneral15a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["trinomial"], dependencies: ["add2dfegeneral15a-h2"], title: "Is the polynomial a binomial, trinomial, or are there more than three terms?", text: "", choices: ["Binomial", "Trinomial", "Other"], variabilization: {}}, {id: "add2dfegeneral15a-h4", type: "hint", dependencies: ["add2dfegeneral15a-h3"], title: "Trinomial", text: "Since it's a trinomial, check to see whether the expression is in the form of $$x^2+bx+x$$ or $${ax}^2+bx+c$$", variabilization: {}}, {id: "add2dfegeneral15a-h5", type: "hint", dependencies: ["add2dfegeneral15a-h4"], title: "$$x^2+bx+c$$", text: "Undo using FOIL", variabilization: {}}, {id: "add2dfegeneral15a-h6", type: "hint", dependencies: ["add2dfegeneral15a-h5"], title: "Check", text: "Is it factored completely? Do the factors multiply back to the original polynomial?", variabilization: {}}, ]; export {hints};