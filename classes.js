function Question( quest, potential, ans ) {
	this.question = quest;
	this.potentialAnswers = potential;
	this.answer = ans;
}


function Session(ansSize) {
    this.name = "";
    this.answers = new Array(ansSize);
    for (var i=0; i<this.answers.length; i++) {
        this.answers[i] = [];
    }
    this.wrongQuestions = [];
    this.scoreMap = [2, -1 , 2, 30];
    this.correct = 0;
    this.incorrect = 0;
    this.bonus = 0;
    this.points = 0;
    this.calculate = function() {
        this.bonus = this.scoreMap[2] * Math.floor((maxTime-runningTime)/this.scoreMap[3]);
        this.points =
            this.scoreMap[0] * this.correct +                   // points gained for correctness
            this.scoreMap[1] * this.incorrect +                 // points lost for incorrectness
            this.bonus                                          // bonus points for every x seconds left
        ;
        return this.points;
    };
}