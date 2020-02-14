sentences = [
	[
		"When you are around, I {adj}. <3",
		"Everytime I see you, I {adj}. :3",
		"I’m glad you’re here. I {adj}.",
		"You are actually using this site? This is why I {adj}."
	],
	[
		"You are {adj}. Seriously. Just thought you should know.",
		"I always knew you were {adj}. ^_^",
		"Did I ever tell you I always thought you were {adj}?",
		"Your cookies showed me how {adj} you are!",
		"Your eyes are {adj}. I always find myself thinking of them.",
		"Your face is {adj}, and absolutely adorable!",
		"Just you entering the room is {adj}. Too much? Not really. You honestly are that awesome."
	]
]

adjs = [
	[
		"am happy",
		"feel wonderful",
		"feel nice",
		"am overjoyed",
		"am at peace",
		"feel like my day brightend up",
		"feel butterflies in my stomach",
		"feel like I can take anything on",
		"feel myself falling in love"
	],
	[
		"delightful",
		"amazing",
		"awesome",
		"lovely",
		"beautiful",
		"loving",
		"fantastic",
		"pretty",
		"graceful",
		"warm"
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
