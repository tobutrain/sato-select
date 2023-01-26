const result = document.getElementById('result');
const result2 = document.getElementById('result-2');
const input_num = document.getElementById('input');
const member = document.getElementById('member');
var date = new Date()


function calc_num(calc_input_num){
    next_num = parseInt(calc_input_num)+date.getDate();
    if(next_num>parseInt(member.value)){
        return next_num - parseInt(member.value);
    }
    else{
        return next_num;
    }
}

function writeValue(){
    result.innerHTML = String(calc_num(input_num.value));
    result2.innerHTML = String(calc_num(calc_num(input_num.value)));
}

function thenNext(){
    input_num.value = String(calc_num(input_num.value));
    writeValue();
}