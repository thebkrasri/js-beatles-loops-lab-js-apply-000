// add solution here
function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  var i;
  for (i=0; i < musicians.length; i++)
  {
    var s = musicians[i] + " plays " + instruments[i];
    arr[i] = s;
  }
  return arr;
  
}

function johnLennonFacts(arr){
  var i=0;
  while (i<arr.length)
  {
    arr[i] = arr[i] + "!";
    i++;
  }
  return arr;
  
}