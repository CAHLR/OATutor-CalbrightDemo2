import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./LinEqua26a-index.js"; const step = {id: "LinEqua26a", stepAnswer: ["perpendicular"], problemType: "MultipleChoice", stepTitle: "State whether the two lines are parallel, perpendicular, or neither", stepBody: <div> <InlineMath math="3y=-4x+3"/> and <InlineMath math="3x-4y=8"/></div>, choices: ["parallel", "perpendicular", "neither"], answerType: "string", hints: hints}; export {step};