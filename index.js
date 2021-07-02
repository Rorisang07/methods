function  is_div_by_5(number) {
    if (number % 5 ===0) {
        return true;
    } else{
        return false;
    }
}
console.log( is_div_by_5(43));


function  larger_number(num1,num2) {
 if (num1 > num2){
     return num1;
 } else {
     return num2;
 }  
    
}console.log(larger_number(4,24));


function  either_only(number) {
    if (number % 3 ===0  && number % 5 ===0){
        return false;
    } else if (number % 3 ===0 || number % 5 ===0){
        return true;
    }      
} console.log( either_only(9));


//Word Check
function word_check(word){
if (word.length > 6 ) {
    return "Long";
} else if (word.length < 6) {
    return "Short";
} else if (word.length === 6) {
    return "Medium";
}
 } console.log(word_check("Donkeyr"));


//Count E
function count_e(word) {
    return (word.match(/e/g) || []).length;
}
console.log(count_e("Kgwete"));


 /*let count = "Detect-phone";
 let newCount = (count.match(/e/g) || []).length;
 console.log(newCount);*/
 //g  is for global (it searches globally)