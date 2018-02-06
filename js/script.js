
function drawTree(n) {
  for(var i = n; i > 0; i--) {
    var star = "";
    for(var j = i - 1; j < n; j++) {
      star += "*";
    }
    console.log(star);
  }
  
}

console.log(drawTree(5));