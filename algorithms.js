// Thanks CoolAJ86 @stackoverflow
// Implementation of shuffle directly taken from them
function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Implementation of influenced by shuffle
function shuffleDataElements() {
	for (var i=0; i<data.length; i++) {
		var array = data[i].potentialAnswers;
		
		
		var currentIndex = array.length
		, newAnswers=[]
		, temporaryValue
		, randomIndex
		;
		
		// Save the current answers in word format
		// (easiest to implement)
		var speltOutAnswers = [];
		for (var j=0; j<data[i].answer.length; j++) {
			speltOutAnswers.push( array[ data[i].answer[j]-1 ] );
		}
		
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		
		// Generate the new answers list, based on 
		for (var j=0; j<speltOutAnswers.length; j++) {
			newAnswers.push( array.indexOf(speltOutAnswers[j])+1 );
		}
		data[i].answer = newAnswers;
	}
}

// Thanks minitech @stackoverflow
// Implementation of makeUL slightly changed
function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        item.id = i+1;

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add event
        item.onmousedown = selected;

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


function next() {
    // Retrieve the current quiz question
    var q = data[data.length - questionsLeft];
    
    // Create the Question Text
    questionText.innerHTML = 
		(data.length - questionsLeft + 1) + "/" + data.length +
		"<br>" +
		q.question;
    
    // Create the Choices
    possibleList.parentNode.removeChild(possibleList);
    possibleList = app.appendChild( makeUL( q.potentialAnswers ) );
    
	questionsLeft--;
}


function showResults() {
	// Stop counting
	clearInterval( timerID );
	
	// Figure out numbers
	for (var i=0; i<data.length; i++) {
		// If the answer is corret
		if (s.answers[i].sort().join() == data[i].answer.sort().join()) {
			s.correct++;
		}
		else {
			// If you didn't answer
			if (s.answers[i].length === 0) {}
			
			// You did answer, and got it wrong
			else {
				s.incorrect++;
			}
			
			// record that question
			s.wrongQuestions.push(data[i].question);
		}
	}
	
	s.calculate();
	
	var nextButton = document.getElementById("nextButton");
		nextButton.value = "Retry";
		nextButton.onmouseup = setupQuiz;
	
	possibleList.parentNode.removeChild(possibleList);
	possibleList = app.appendChild( makeUL( [] ) );
	questionText.innerHTML =
		"<b>" + (100*s.correct/data.length).toFixed(2) + "% Correct</b><br>" +
		"<div class='tab'></div>" + s.correct + " Correct / " + data.length + " * " + s.scoreMap[0] + " Points<br>" +
		"<div class='tab'></div>" + s.incorrect + " Incorrect / " + data.length + " * " + s.scoreMap[1] + " Points<br>" +
		s.bonus + " Bonus Points<br>" +
		"<br>" +
		"Total Score: " + s.points +
		"<br>" +
		"<br>" +
		"BTW, Ms. McDonnell only cares about % Correct, Total Score is just there for a competitive factor" +
		"<br>" +
		"<b>Taken By: " + s.name + "</b>" +
		"<br>" +
		"<input id=\"showWrongQuestions\" type=\"submit\" value=\"Show Questions You Got Wrong\">"
	;
	
	var wrong = "Questions you got wrong:\n";
	for (var i=0; i<s.wrongQuestions.length; i++) {
		wrong += s.wrongQuestions[i] + "\n";
	}
	
	document.getElementById("showWrongQuestions").onmouseup = function() {
		alert(wrong);
	};
	
	
	return (100*s.correct/data.length);
}