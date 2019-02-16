sentences = [["You make me feel {adj1}.","Everytime I see you, I feel {adj1}.","I’m glad you’re here. It makes me {adj1}.", "You actually using this site? This is why you make me {adj1}."],
["You are {adj2}.", "I always knew you were {adj2}.","Did I ever tell you I always thought you were {adj2}?","Your cookies are {adj2}!","Your eyes are {adj2}.","Your face is {adj2}.","Just you entering the room is {adj2}"]]

adj1 = ["happy","great","nice","delighted","overjoyed","at peace"]
adj2 = ["amazing","awesome","lovely","beautiful","loving","fantastic","pretty","graceful",
]
function sentenceCount(sent){
	var count = 0;
	for(x in sentences){
		for (y in sentences[x]){
			count++;
		}
	}
	return count;
}
function getSentence(sents, c){
	var buffer = 0;
	for (x in sents){
		if(sents[x].length < (c-buffer)){
			alert (sents[x] + " : " + c + " : "+ buffer)
			return sents[x][c-buffer];
		}
		buffer+=sents[x].length;
	}
}
function replaceAdj1(sent){

}

function getCompliment(){
	var val = (Math.floor(Math.random()*sentenceCount(sentences)));
	val = ((val==11)?10:val);
	// getSentence(sentences, val);
	// return "End"
	return getSentence(sentences, val);
}
