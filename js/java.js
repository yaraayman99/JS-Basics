var number =  [8 ,9 ,10,12];
var student = [ "ahmed" , "aya" , "yara" , "ali"];
console.log(student); 

var returnValue = student.push("Alaa"); //بيضيف عنصر في الاخر
console.log(student);
console.log(returnValue);

var returnValue = student.unshift("mona");// بيضيف عنصر في الاول 
console.log(student);
console.log(returnValue);

student.pop()
console.log(student);//بتمسح اخر عنصر وبترجعلي قيمته 
var returnValue = student.pop()
console.log(returnValue);

var returnValue = number.splice (2,3);// بنحذف العنصرين دول
console.log(number);

var returnValue = student.slice (0,2);// بتاخد قطعه
console.log(student);
console.log(returnValue);


var returnValue = student.reverse();// بتعكس المصفوفه
console.log(student);
console.log(returnValue);

var returnValue = student.includes("mona");// بتعمل سيرش الحاجة موجودة ولا لاء
console.log(returnValue);


var returnValue = student.indexOf("mona");// رقم المكان اللي العنصر فيه
console.log(returnValue);


var stringArray = student.toString(); //بيحولهم ل string
console.log(stringArray);

//string 
var myString = "hello in the our company"
var check =myString.charAt (4);//المكان اللي هترجع منه 
console.log(check);

var check =myString.charCodeAt(3);//الكود بتاع الحرف 
console.log(check);

var check =myString.codePointAt(2);// احدث الكود بتاع الحرف 
console.log(check);

var check =myString.concat("laa");// بتزود على الكود
console.log(check);

var check =myString.endsWith ("company");// بتشوف اذا كانت بتنتهي بالحاجة دي ولا لاء
console.log(check);

var check =myString.toLocaleLowerCase();// بتشوف اذا كانت بتنتهي بالحاجة دي ولا لاء
console.log(check);

var check =myString.split("in")//بتقسم من اول 
console.log(check);

var check =myString.trimEnd();//بتشيل المسافه من الاول 
console.log(check);

var check =myString.replaceAll("in" ,"and");// بتبدل العنصر 
console.log(check);

var check =myString.padEnd(25 , "!");// بتزود في الاخر
console.log(check);

//dom
var element= document.getElementById("demo");

var elements = document.getElementsByClassName("items") 
console.log(typeof("item"));

var elements = document.getElementsByTagName("h1") 
console.log(elements);

var elements =document.querySelectorAll("div");
console.log(elements);

var elements = document.querySelectorAll(" * [name='test'] ")
console.log(elements);

var elements =document.querySelectorAll("#demo");
console.log(elements);

var elements =document.querySelector(".items");
console.log(elements);

var elements =document.querySelectorAll(".items");
console.log(elements);

var heading =document.querySelectorAll("h3.h3");
console.log(heading);

function sayHello(userName) {
console.log("Hello", userName);
}
sayHello("yara");

document.body.addEventListener ("click" , function(e){
console.log("Hello");
console.log(Hello .clientX); //محور x
console.log(Hello .target);//مكان ما الماوس بيقف
});

document.body.addEventListener ("Keydown" , function(e){
console.log(e);
console.log(eKey); 
});

document.body.addEventListener ("contextmenu" , function(e){//right click
console.log("Hello");
e.preventDefault();//بيمنع السلوك الافتراضي لحدث معين على العنصر
})


var h1 =document.querySelector("h1");
document.body.addEventListener ("mouseenter", function(){ //لما الماوس يدخل على اي عنصر
h1.style.cssText = "color:black; background-color:black;"
})


