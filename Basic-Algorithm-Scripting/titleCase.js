function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var ending = str.length - target.length; 
  

  if (str.substr(ending) == target) {
    return true; 
  } else {
    return false; 
  }
  
}

confirmEnding("Bastian", "n");
