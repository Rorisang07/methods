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

function count_i(word1) {
    return word1.split("i").length-1;
}
console.log(count_i("Rorisang is a girl."));

 /*let count = "Detect-phone";
 let newCount = (count.match(/e/g) || []).length;
 console.log(newCount);*/ 
 //g  is for global (it searches globally)

 // HOMEWORK TWO

 function  count_a(word) {
     return (word.match(/A/gi) || []).length;
 } console.log( count_a("Adidaas"));
 // i is for caseinsensetive

 function count_f(word){
     return (word.match(/(F|f)/g) || []).length
 }console.log(count_f("Fastff food"))


function  count_vowels(word) {
     let count = 0;
     let vowels = "aeiou";
     for( i =0 ; i< word.length ; i++) {
        if (vowels.indexOf(word[i]) > -1) {
            count ++;
        }
     }
     return "This string has " + count + " vowels in total.";
 } console.log( count_vowels("Recognised"));

 function sum_nums(max) {
     let sum = 0;
     for (let  i =1 ; i<= max; i++) {
         sum += i;
     } return sum;
 } console.log( sum_nums(10));

 function factorial(num) {
     let product= 1;
     for (let i =1; i<= num; i++){
         product *= i;
     }return product;
 }console.log( factorial(7));

 function reverse(word) {
      return word.split("").reverse().join("");
 } console.log( reverse("Rorisang"));

 function goodbye(name) {
     
     return  "Goodbye " + name;
 } 
 console.log( goodbye("Hanie Webster."));