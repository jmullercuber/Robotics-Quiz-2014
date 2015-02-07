var selected = function() {
	if (this.className == "selectedOption") {
		this.className = "";
		s.answers[data.length - questionsLeft - 1].splice(
			s.answers[data.length - questionsLeft - 1].indexOf(this.id),
			1
		);
	}
	else {
		this.className = "selectedOption";
		s.answers[data.length - questionsLeft - 1].push(this.id);
	}
};


function setupQuiz() {
	// Prep our variables
	s = new Session(data.length);
	shuffle(data);
	shuffleDataElements();
	questionsLeft = data.length;
	runningTime = 0;
	
	// Activate the nextButton
	var nextButton = document.getElementById("nextButton");
	nextButton.value = "Next";
	nextButton.className = "";
	
	// input name here
	if (document.getElementById("username") !== null) {
		s.name = document.getElementById("username").value;
	}
	
	nextButton.onmouseup = function(e) {
		if (questionsLeft <= 0) {
			showResults();
			return;
		}
		next();
	};
	next();
	
	// Start the timer
	timerID = setInterval(updateTime, 10);
}
window.onload = function() {
	document.getElementById("nextButton").onmouseup = setupQuiz;
};

function updateTime() {
	if (runningTime >= maxTime) {	// if time is up
		showResults();
	}
	
	runningTime += 0.01;
	document.getElementById("Timer").innerHTML = "Time Elasped: " + Math.floor(runningTime/60) + ":" + Math.floor(runningTime%60) +":" + (runningTime%1).toFixed(2).substring(2);
}