var start = "hello";
    window.alert (start);
    console.log (start);
    console.error (start);
    console.warn (start);

//Primitive data type//
var text = "yara ";
    console.log (text);
var Student = "true";
    console.log ("var value:", Student , "type is:" , typeof(Student) );

var num1 = 80;
    console.log (num1);
var num2 = -80;
    console.log (num2);

var isStudent = true;
    console.log ("var value:", isStudent , "type is:" , typeof(isStudent) );

var lastname;
    console.log (lastname);

var lastname = null;
    console.log (lastname );

var num1 = 10;
var num2 = 20;
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 ** num2);
    console.log(num1 % num2);
    console.log(num1 * num2);
    console.log(num1 / num2);

var x = 2;
x -= 2;
x=x-2;
    console.log(x);

var firstName = "Yara";
var lastName = "Ayman";
    console.log(firstName + " " ,lastName );

var x ="2" + 2 + 2 + 2;
    console.log(x);

var x = 2 + 2 + 2 + "2" ;
    console.log(x);


var x = "ali" * "2";
var x = Number("2") * "ali";
    console.log(x);

var FirstName = (window.prompt ("Enter first namer"));
var LastName = (window.prompt ("Enter last namer"));
    console.log(FirstName ," " ,LastName);

    var sentence = "I, love, web, design";
    console.log(sentence.slice(1, 5));

var textLength ="developer".length;
    console.log(textLength);

var quote = "hello \t world" ;
console.log(quote);
var quote = "hello \n world" ;
console.log(quote);


//converting //
var Hour = 10;
    if (Hour >= 0 && Hour <=11) {
        console.log("good morning");
}else if (Hour>=12 && Hour <=17){
    console.log("good afternoon");
}else if (Hour>=18 && Hour <=23) {
    console.log("good evening");
}else{
    console.log("an correct Hour");
}

var num1 =20;
var num2 =10;
var operator = "-";

switch(operator){

    case "+":

        console.log(num1 + num2 );

    break;

    case "-":

        console.log(num1 - num2 );

    break; 

    case "/":

        console.log(num1 / num2 );
    break;

    case "*":

    console.log(num1 * num2 );   

    break;

    case "%":

    console.log(num1% num2 );  

    break;

    default:
        console.log("incorrect operation");  
}


var num = 9;

var result =num ? "value is true"  : "value is false";

    console.log(result);


for (var i =0;i <20;i++){
    console.log(i);
}

var i =0;
while(i<=10){
    console.log(i);
    i++
}

var i =0;
do{
    console.log(i);
    i++
}while (i<=10);

function calculateResult (mark1 , mark2 ,mark3){
    var avg = mark1 + mark2 + mark3 / 3;
    if (avg == 85){
        return ("excellent");

    } else if (avg ==70){
        return ("very good");
    }else if (avg == 60){
        return ("good");
    }else{
        return ("fail");
    }
}
var Result = calculateResult(80,90,70);
    console.log(Result);

var Student ={
    name:"ali",
    age:20,
    Subjects:{

        math :{
            score: 90,
            grade: Good,
        },

        english: {
            score: 80,
            grade: Good,
        },
        arabic: {
            score: 70,
            grade: Good,
        },
        },
        love:{
            art ,
        }
    }

