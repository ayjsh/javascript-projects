char = '';

function makeLine(size, char = '#'){
    let line = ("");
    for (let i = 0; i < size; i++){
    line += char;
    }
    return line;
}

function makeSquare(size, char = '#'){
    // let square = '';
    // for (let i = 0; i < size; i++){
    //     square += (makeLine(size)) + '\n';
    // return square.repeat(size).trim();
    // }
    return makeRectangle(size, size, char);
}
  

function makeRectangle(width, height, char = '#'){
    let rectangle = '';
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width, char)) + '\n';
    return rectangle.repeat(height).trim()
  }
}

function makeDownwardStairs(height, char = '#'){
    let triangle = '';
    for (let i = 0; i < height; i++){
        triangle += (makeLine(i+1, char) + '\n');
    }
    return triangle.trim();
    
}

function makeSpaceLine(numSpaces, numChars, char = '#'){
    let spaces = '';
    let line = '';
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaces += " "
      }
      line = makeLine(numChars, char);
      spaceLine = spaces + line + spaces;
      return spaceLine;
}

function makeIsoscelesTriangle(height, char = '#'){
    let triangle = '';
    for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1, char) + '\n');
  }
  return triangle.slice(0, -1);
}

function makeDiamond(height, char = '#'){
    let triangle = '';
    let reversed = '';
    let diamond = '';
    triangle = makeIsoscelesTriangle(height, char);
    reversed = reverse(triangle);
    diamond = triangle + '\n' + reversed;
return diamond;
}

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}
console.log(makeDiamond(5, "x"));