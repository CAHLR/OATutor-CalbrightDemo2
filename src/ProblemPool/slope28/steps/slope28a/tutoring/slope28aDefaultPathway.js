var hints = [{id: "slope28a-h1", type: "hint", dependencies: [], title: "Solve the first equation for y", text: "$$\\left(2\\right) x+\\left(4\\right) y=3$$ \\n $$\\left(4\\right) y=-\\left(2\\right) x+\\left(3\\right)$$ \\n $$\\frac{\\left(4\\right) y}{4}=\\frac{\\left(-\\left(2\\right) x+\\left(3\\right)\\right)}{4}$$ \\n $$y=\\frac{-\\left(1\\right)}{2} x+\\frac{3}{4}$$", variabilization: {}}, {id: "slope28a-h2", type: "hint", dependencies: ["slope28a-h1"], title: "Slope-Intercept Form of an Equation of Second Line", text: "Compare the second equation to the slope-intercept form of the equation. \\n $$y=m x+b$$ \\n $$y=\\frac{-\\left(1\\right)}{2} x+\\frac{3}{4}$$", variabilization: {}}, {id: "slope28a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(1\\right)}{2}$$"], dependencies: ["slope28a-h2"], title: "Identify the Slope of First Line", text: "What is m in the first equation?", variabilization: {}}, {id: "slope28a-h4", type: "hint", dependencies: ["slope28a-h3"], title: "Solve the second equation for y", text: "$$\\left(6\\right) x+\\left(3\\right) y=2$$ \\n $$\\left(3\\right) y=-\\left(6\\right) x+\\left(2\\right)$$ \\n $$\\frac{\\left(3\\right) y}{3}=\\frac{\\left(-\\left(6\\right) x+\\left(2\\right)\\right)}{3}$$ \\n $$y=-\\left(2\\right) x+\\frac{2}{3}$$", variabilization: {}}, {id: "slope28a-h5", type: "hint", dependencies: ["slope28a-h4"], title: "Slope-Intercept Form of an Equation of Second Line", text: "Compare the second equation to the slope-intercept form of the equation. \\n $$y=m x+b$$ \\n $$y=-\\left(2\\right) x+\\frac{2}{3}$$", variabilization: {}}, {id: "slope28a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2"], dependencies: ["slope28a-h5"], title: "Identify the Slope of Second Line", text: "What is m in the second equation?", variabilization: {}}, {id: "slope28a-h7", type: "hint", dependencies: ["slope28a-h6"], title: "Perpendicular Lines", text: "Perpendicular lines have slopes that are negative reciprocals of each other. We check by multiplying the slopes and see if it equals -1.", variabilization: {}}, {id: "slope28a-h8", type: "hint", dependencies: ["slope28a-h3", "slope28a-h6", "slope28a-h7"], title: "Checking if perpendicular", text: "$$m_1 m_2$$ \\n $$\\frac{-\\left(1\\right)}{2} -\\left(2\\right)=1$$", variabilization: {}}, {id: "slope28a-h9", type: "hint", dependencies: ["slope28a-h8"], title: "Perpendicular Lines", text: "The slopes are reciprocals of each other, but they have the same sign. Since they are not negative reciprocals, the lines are not perpendicular.", variabilization: {}}, ]; export {hints};