function Dark() {
    var element = document.body;
    element.classList.toggle("Dark");
}

function number1  () {
var txt = document.getElementById('txtResult');
 txt.value += '1';
}

var op;
var number1;
var number2;

function Dark() {
    var element = document.body;
    element.classList.toggle("Dark");
}

function btnnumber  (e) {
var txt = document.getElementById('txtResult');
 txt.value += e.innerText;
}


function operation (e) {
    op = e.innerText;
    var txt = document.getElementById('txtResult');
    number1 = parseInt(txt.value);
    txt.value = '';
}
                                                               

function calcy () {
    var txt = document.getElementById('txtResult');
    var result; 
    number2 = parseInt(txt.value);


    switch(op) {
       case '+':  result = number1 + number2; break;
       case '-':  result = number1 - number2; break;
       case '/':  result = number1 / number2; break;
       case '*':  result = number1 * number2; break;

       default :  result='error';
    }

    txt.value = result;
}


document.getElementById('C') = '';