var hints = [{id: "hypotest3b-h1", type: "hint", dependencies: [], title: "Definition of a Type I error", text: "The decision is to reject H_0 when, in fact, H_0 is true."}, {id: "hypotest3b-h2", type: "hint", dependencies: [], title: "Definition of a Type II error", text: "The decision is not to reject H_0 when, in fact, H_0 is false"}, {id: "hypotest3b-h3", type: "hint", dependencies: ["hypotest3b-h1"], title: "Interpretation of the Problem", text: "The students assumed that the null hypothesis was true, when it was not."}, {id: "hypotest3b-h4", type: "hint", dependencies: ["hypotest3b-h3"], title: "What Type of Error Are the Students Making?", text: "The students are making a Type II error."}, ]; export {hints};