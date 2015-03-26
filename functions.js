// AUTO-CREATE SHIP


// COLLISION ROUTINE

// For loop creates creates 'index', grabs ship length info from ship array.
// ship then stored in setTemp.
// IF getArray(x, y) == " " getTemp is inserted to shadowArray. printBoard();

// Input: var str = prompt("A3...F5");
// var input = toUpper(str);
// var col = input.splice(1);
// var row = parseInt(input), 10);
/*
// USER INPUT: function splits input and returns index of alphabet array:
function userInput() {
        var str = prompt("Please enter a valid ROW and COLUMN (ie: B7 or E5)..");
        //var input = str.split("");
        // If prompt = CANCEL, str becomes 'undefined' - loop may satisfy this. If not, fix.
        row = $.inArray( str[0], alphabet );
        col = parseInt(str.slice(1), 10);
        if (str !== null && (rowIn != -1) && (colIn > 0 && colIn <11)) {
            console.log(str + ": converts to " + "row " + rowIn + ", col " + colIn);
        //    window.onload = function(){document.getElementById("demo").innerHTML = str;
            }//;
        //}
        else {
            console.log("You did not enter a valid coordinate!");
        }
}
*/
// CREATE VERTICAL SHIP;
function vertical(shipLen, pos) {
    "use strict";
    var z, x = pos[0], y = pos[1];
    for (z = 0; z < shipLen; z += 1) {
        console.log(z);
        //console.log(x + ',' + y);
        setArray(x + z, y, s);
    }
}

// CREATE HORIZONTAL SHIP;
function horzizontal(shipLen, pos) {
    "use strict";
    var z, x = pos[0], y = pos[1];
    for (z = 0; z < shipLen; z += 1) {
        console.log(z);
       // console.log(x + ',' +y);
        setArray(x, y + z, s);
    }
}

// PLACE SHIPS ON BOARD
function placeShip() {
    "use strict";
    var vert, pos = [width * height];
        vert = randOrient();
        shipLength();
        console.log(vert);
        pos = randPos(vert);
        if (vert) { //VERT
            vertical(shipLen, pos);
            console.log("vert call ran");
        }
        else { //HOR
            //horizontal(shipLen, pos);
            horzizontal(shipLen, pos);
            console.log("horz call ran");
        }
}

// CREATE 2D BOARD
function loadArray(width) {
    "use strict";
    var r, c;
    for (r = 0; r < width; r += 1) {
        for (c = 0; c < width; c += 1) {
            setArray(r, c, ' ');
            setArray(r, 0, alphabet[r].toUpperCase());
            setArray(0, c, c);
        }
    }
}

// PRINT BOARD
function printArray() {
    "use strict";
    var r, c, body, tab, tr, td, tn;
    body = document.getElementsByTagName('body')[0];
    tab = document.createElement('table');
    for (r = 0; r < width; r += 1){
        tr = document.createElement('tr');
        for (c = 0; c < width; c += 1){
            td = document.createElement('td');
            //tn = document.createTextNode(getArray(r, c));
            tn = document.createTextNode(getArray(r, c));
            td.appendChild(tn);
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }
    body.appendChild(tab);
}

// SETS COLOR OF TABLE ACCORDING TO CELL CONTENT
function tdColor() {
    "use strict";
    var td = document.getElementsByTagName("td"), i = 0, tds = td.length;
    for (i; i < tds; i += 1) {
        if (td[i].innerHTML === "S") {
            td[i].setAttribute("style", "background:red;");
        }
        else if (td[i].innerHTML === "X") {
            td[i].setAttribute("style", "background:white;");
        }
        else {
            td[i].setAttribute("style", "background:lightblue;");
        }
    }
}

// RANDOM ORIENTATION - returns BOOLEAN (T = VERT / F = HORZ)
function randOrient() {
    "use strict";
    return Math.random() < 0.5;
}

// RAND POS: TAKES ORIENT BOOL AND RETURNS SHIP LOCATION POINTS
function randPos(vert) {
    "use strict";
    var x, y;
    if (vert) {
        console.log('VERT');
        x = Math.floor(Math.random() * (width - shipLen -1)) + 1;
        y = Math.floor(Math.random() * (width - 1)) + 1;
    } else {
        console.log('HOR');
        y = Math.floor(Math.random() * (width - shipLen -1)) + 1;
        x = Math.floor(Math.random() * (width - 1)) + 1;
    }
    return [x, y];
}

// RANDOM SHIP LENGTH (2 - 5)
function shipLength() {
   // return Math.floor(Math.random() * 5) +1
    shipLen = Math.floor(Math.random() * (5 - 1) + 2);

}
// CREATE 2D ARRAYS FROM SINGLE ARRAYS: TAKE [X, Y] WITH A 'VALUE'
// WRITE BOARD ARRAY
function setArray(x, y, val) {
    array[x * width + y] = val;  
 }

// CALL BOARD ARRAY
function getArray(x, y) {
    return array[x * width + y];
}

// WRITE TEMP ARRAY - stores temp ship pos.
function setTemp(x, y, s) {
    tempArray[x * width, + y] = s;
}

// CALL TEMP ARRAY
function getTemp(x, y) {
    return tempArray[x * width + y];
}
