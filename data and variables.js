// This 2D array holds the questions, potential answers, and answers
var data = [
	new Question(
		"What are the jobs of the human players? (Pick all that apply)",
		[
			"Throws the ball into play",
			"Turns the robot on",
			"Takes the ball off the pedestal",
			"Replaces robot if breaks",
            "To meet other teams"
        ],
		[1, 3]
	),
	new Question(
		"How many balls can the alliance start off with at the beginning of every match?",
		[
			"1",
			"10",
			"3",
			"2",
            "4"
        ],
		[3]
	),
	new Question(
		"What is the point value for ONLY throwing the ball over the truss?",
		[
			"0",
			"10",
			"15",
			"20",
            "5"
        ],
		[2]
	),
	new Question(
		"What must happen before another alliance ball is put into play?",
		[
			"All of your alliance's balls are off of the field",
			"No more balls are added once the game starts",
			"You do the hokey pokey",
			"Nothing, It comes every 30 seconds",
            "Once you AND the other alliance score"
        ],
		[1]
	),
	new Question(
        "Where can the ball be received from?",
		[
			"The Arena Floor",
			"The Pedestal",
			"The Robot",
			"The Goal",
            "The girl with the dragon tattoo"
        ],
	[2]
	),
	new Question(
        "Who can't be in the arena for a match? The arena IS defined in the rules manual. (Pick all that match)",
        [
            "Coach",
            "Safety Captain",
            "Drivers",
            "Human Player",
            "Battman"
        ],
        [2, 5]
	),
	new Question(
        "Who can operate the robot during the match?",
        [
            "Safety Captain",
            "Human Player",
            "Your mom",
            "Drivers",
            "Team Captain"
        ],
        [4]
	),
    new Question(
        "What does it mean when a team receives a yellow card?",
        [
            "A kid/robot ate a kid",
            "A kid/robot is naked on the field",
            "A kid/robot is showing egregious behavior",
            "A kid/robot is talking trash",
            "A kid/robot is talking bad about YOUR mom"
        ],
        [3]
	),
	new Question(
        "What are you allowed to bring to the \"site\"?",
		[
			"Gas tanks",
			"Food/Drinks",
			"Products to sell cough drugs cough",
			"Live bands to play in the audience",
            "Walkie-talkies",
            "None of the above"
        ],
		[6]

	),
	new Question(
        "Which of the following does not qualify as possession?",
        [
            "None of these",
            "Herding",
            "Launching",
            "Trapping",
            "Carrying"
        ],
		[1]
	),
	new Question(
        "How long is every round/match?",
        [
            "10 minutes",
            "2 minutes",
            "2 minutes 30 seconds",
            "5 minutes"
        ],
		[3]
	),
	new Question(
        "How long is the autonomous period? How long is the teleoperated (TELEOP) period?",
        [
            "10 seconds; two minutes 20 seconds",
            "1 minute; 1 minute",
            "5 seconds; 2 minutes 25 seconds",
            "2 minutes; 1 minute"
        ],
		[1]
	),
	new Question(
        "How many points does the team get for scoring a low \"hot goal\" in autonomous?",
        [
            "1 point",
            "11 points",
            "10 points",
            "3 points"
        ],
		[2]
	),
	new Question(
        "How many points does the team get for scoring a high \"hot goal\" in autonomous?",
        [
            "15 points",
            "5 points",
            "10 points",
            "20 points"
        ],
		[4]
	),
	new Question(
        "What indicates when a goal is hot?",
        [
            "LED lights around the goal; 2 pieces of retroreflective tape are visible",
            "We just know",
            "Only one piece of retroreflective tape is visible",
            "There is no indicator"
        ],
		[1]
	),
	new Question(
        "Name the zones in the field.",
        [
            "Zone A,  Zone B, Zone C, Zone D",
            "Blue, Red, White",
            "Orange, Purple, Green",
            "Zone 1, Zone 2, Zone 3"
        ],
		[2]
    ),
	new Question(
          "How many team members at max can be in the pit?",
        [
            "5",
            "2",
            "10",
            "7"
        ],
		[1]
	),
	new Question(
        "How many robots are in an alliance?",
        [
            "1",
            "3",
            "5",
            "2"
        ],
		[2]
	),
	new Question(
        "What is the object of the game and how do you achieve it?",
        [
            "To have fun, by doing whatever",
            "To throw the ball into the goal and get the most number of points",
            "To simulate soccer, by passing ball around",
            "To get the least number of points, by scoring in few moves"
        ],
		[2]
	),
	new Question(
        "How many human players can there be per team? (team, not alliance)",
        [
            "1",
            "2",
            "3",
            "5"
        ],
		[1]
	),
	new Question(
        "How many points do you lose for a non-technical foul?",
        [
            "10 points",
            "5 points",
            "20 points",
            "50 points"
        ],
		[3]
	),
	new Question(
        "How many points do you lose for a technical foul?",
        [
            "30 points",
            "50 points",
            "20 points",
            "60 points"
        ],
		[2]
	),
	new Question(
        "Which of the following does NOT earn you a foul?",
        [
            "The coach touches the ball during a match",
            "During the match, a team member extends a body part beyond the guardrail",
            "An alliance pins an opponent for three seconds",
            "A robot intentionally falls or tips over to block the field"
        ],
		[3]
	),
	new Question(
        "Who do you love more Sam or Joey?",
        [
            "Neither, they are equal",
            "Joey",
            "Sam",
            "Chuck Norris"
        ],
		[1]
	),
	new Question(
        "Who is annoyed by Gabe’s phone (Hunger Games, piano, and the owl)?",
        [
            "Mostly Everyone",
            "No one",
            "Abraham",
            "Gabe"
        ],
		[1]
	),
	new Question(
        "What happens if your robot crosses the plane of your opponent's low goal?",
        [
            "Technical Foul",
            "Foul",
            "Minor Foul",
            "Nothing"
        ],
		[1]
	),
	new Question(
        "Accoring to the rules, what action does this define: 'impelling BALLS to a desired location or direction via a MECHANISM in motion relative to the ROBOT'",
        [
            "Driving",
            "Launching",
            "Herding",
            "Carrying"
        ],
		[2]
	),
	new Question(
        "How does the driver declare a ball to be dead?",
        [
            "Yell about it as loud as you can",
            "Crying",
            "Placing the dead-ball placard against the acrylic",
            "Bury it"
        ],
		[3]
	),
	new Question(
        "What happens if a dead ball is freed? (Pick Multiple Answers)",
        [
            "The team cannot score until it is removed from the field by robots",
            "Everyone cheers",
            "The game is over",
            "The live ball can still accrue assists and truss points"
        ],
		[1, 4]
	),
	new Question(
        "How often do we waste time at dinner?",
        [
            "Everyday, except Saturday (there is no dinner)",
            "Never",
            "42"
        ],
		[1]
	)
];


// How many questions the user has to answer
//var maxQuestions = 10;
//data.splice(maxQuestions);

var s = new Session(data.length);

var app = document.getElementById("app");
var questionText = document.getElementById("question");
var possibleList = document.getElementById("possibleAnswers");
var questionsLeft;

var runningTime = 0;
var maxTime = data.length*30;
var timerID;