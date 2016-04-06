function titleCase(str) { 
	var lowerStr = str.toLowerCase(); 

	var sentenceArray = lowerStr.split(" "); 

	var finalArray = []; 

	for (i = 0; i < sentenceArray.length; i++) {
    for (j = 0; j < sentenceArray[i].length; j++) {
      sentenceArray[i][0] = sentenceArray[i][0].replace(sentenceArray[i][0].toUpperCase); 
    }   
  }
  return sentenceArray; 
}

titleCase("I'm a little tea pot"); 
