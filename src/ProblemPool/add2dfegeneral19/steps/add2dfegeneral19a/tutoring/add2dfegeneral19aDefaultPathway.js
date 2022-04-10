var hints = [{id: "add2dfegeneral19a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: [], title: "Identifying the GCF", text: "Is there a GCF?", choices: ["Yes", "No"], variabilization: {}}, {id: "add2dfegeneral19a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Trinomial"], dependencies: ["add2dfegeneral19a-h1"], title: "Identifying Polynomial Type", text: "Is it a binomial, trinomial, or are there more than three terms?", choices: ["Binomial", "Trinomial", "More than 3"], variabilization: {}}, {id: "add2dfegeneral19a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["add2dfegeneral19a-h2"], title: "Checking for Perfect Squares", text: "Are a and c perfect squares?", choices: ["Yes", "No"], variabilization: {}}, {id: "add2dfegeneral19a-h4", type: "hint", dependencies: ["add2dfegeneral19a-h3"], title: "Trial and Error", text: "Since there is no GCF, use trial and error or the \"ac\" method to factor the expression.", variabilization: {}}, {id: "add2dfegeneral19a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(3x-2)(4x-1)"], dependencies: ["add2dfegeneral19a-h4"], title: "Factor Completely", text: "What is the expression when factored completely? Make sure to multiply and check.", variabilization: {}}, ]; export {hints};