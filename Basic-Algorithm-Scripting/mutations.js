function mutation(arr) {
  
  var one = arr[0].toLowerCase().split(''); 
  var two = arr[1].toLowerCase().split('');
  
  var counter = 0; 
  
  for (var x in two) {
    if (one.indexOf(two[x]) > -1) {
      counter += 0; 
    } else {
      counter += 1; 
    }
  }
  
  if (counter === 0) {
    return true; 
  } else {
    return false; 
  }
  
}

mutation(["hello", "hey"]);
