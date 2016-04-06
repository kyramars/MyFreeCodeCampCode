function reverseString(str) {
  //Splits the provided string into individual letters within an array. 
  var string = str; 
  var strArray = []; 
  strArray = str.split(""); 
  
  //Takes the strArray and reverses the letters within
  var revArray = []; 
  revArray = strArray.reverse(); 
  
  //Takes the revArray and joins it into a string
  var joinedStr = ''; 
  joinedStr = revArray.join(""); 
  
  //Returns the  joined string
  return joinedStr; 
  
}

reverseString("hello");
