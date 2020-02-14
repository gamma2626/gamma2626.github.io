sentences = [
	[
		"You make me feel {adj}.",
		"Everytime I see you, I feel {adj}.",
		"I’m glad you’re here. It makes me {adj}.",
		"You actually using this site? This is why you make me {adj}."
	],
	[
		"You are {adj}.",
		"I always knew you were {adj}.",
		"Did I ever tell you I always thought you were {adj}?",
		"Your cookies are {adj}!",
		"Your eyes are {adj}.",
		"Your face is {adj}.",
		"Just you entering the room is {adj}"
	]
]

adjs = [
	[
		"happy",
		"great",
		"nice",
		"delighted",
		"overjoyed",
		"at peace"
	],
	[
		"amazing",
		"awesome",
		"lovely",
		"beautiful",
		"loving",
		"fantastic",
		"pretty",
		"graceful"
	]
]


function get_sentence(){
	wadj = Math.floor(Math.random()*2)
	adj = adjs[wadj][Math.floor(Math.random() * adjs[wadj].length)]
	sentence = sentences[wadj][Math.floor(Math.random()*sentences[wadj].length)]
	return sentence.replace("{adj}",adj)
}
function replace_area(a){
	var div = document.getElementById(a);

div.innerHTML = get_sentence();
}
