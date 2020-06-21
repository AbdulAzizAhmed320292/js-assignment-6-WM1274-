// chapter 21 to 25
//============================================================================




//task 1
//============
// var fname = prompt("enter the first name ");
// var lname = prompt("enter the last name ");


// var full_name = alert("hello" + " " +  fname + " " + lname);
//=============












//task 2
//==============

// var mobile_brand = prompt("enter your favourite mobile phone brand");

// document.write("MY favourite phone is : " + mobile_brand);
// document.write("<br>" + "length of the String is : " + mobile_brand.length);


//===============








//task 3
//=================
// var country = "pakistani";
// document.write("<h3>" + " String " + country);
// document.write("<h3>" + "index of 'n' " + country.indexOf('n'));


//================






//task 4
//==================

// var greeting = "Hello World";
// document.write("<h3>" + " String " + greeting);
// document.write("<h3>" + "index of 'l' : " + greeting.lastIndexOf('l'));

//==================







//task 5
//==================

// var country = "pakistani";
// document.write("<h3>" + " String " + country);
// document.write("<h3>" + " Char at index 3 : " + country.charAt(3));


//=================







//task 6
//=================
// var fname = prompt("enter the first name ");
// var lname = prompt("enter the last name ");
// var full_name = fname.concat(lname);
// document.write ("hello " + full_name);

//====================





//task 7 
//====================
// var city_name = "Hyderabad";
// var a = city_name.replace('Hyder' , 'Islam');
// document.write(a);

//===================






//task 8 
//====================

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var b = message.replace(/and/g , '&');
//  document.write(b);

//==================





//task 9 
//=========================
// var string = "472";
// document.write("value " + string + "<br>" );
// document.write("type : " + typeof(string));
// document.write("<br>" + "value " +  string + "<br>" );
// document.write("type : " + typeof(+string));


//==========================









//task 10
//================================
// var something = prompt("enter something in lower case ");
// document.write("User input " + something + "<br>");
// document.write("Upper Case "+ something.toUpperCase());

//===========================







//task 11
//================================

//===================================










//task 12
//===================================
// var num = 35.36 ;
// var a = num.toString();
// var b = a.replace('.','');
// document.write(b);
//=================================










//task 13
//==========================
// var name = prompt("enter your name");
// for(var i = 0; i < name.length ; i++){
// if (name.charAt(i) == '!' || name.charAt(i) == ',' || name.charAt(i) == '.' || name.charAt(i) == '@')
//       alert('enter a valid username ');
// }
//=============================










//task 14
//==========================
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user_input = prompt("Welcome to ABC bakery! what do you want to order :");

// for (var j =0;j<A.length;j++){
//     if(A[j]===user_input.toLowerCase()){
//         document.write(A[j] + " is available at index " + j + " in our bakery ");
//         break;
//     }
//     else{
// document.write("We are sorry. " + A[j] + " is not available in our bakery :");
// break;
//     }
// }


//=========================












//task 15 
//===========================


//==========================















//task 16
//============================

// var university = "University of Karachi";
// var arr = [university.split()]; 
// document.write(arr);

//==========================












//task 17
//====================

// var user_input = prompt("enter  any name : ");
// document.write("User Input : " + user_input +"<br>" );
// var output = user_input.charAt(user_input.length-1);
// document.write("Last character of input : "+output);

//=====================












//task 18
//===========================

var text = "The quick brown fox jumps over the lazy do ";
var count = 0;
var search = 'text';
var a = text.toLowerCase();

for (var i = 0;i<a.length;i++){


if(a.slice(i,i+3) === "the"){
    count++
}

}

//==============================





//=================================================================================================



















//chapter 26 - 30
//============================================================================================================




//task 1
//=======================

// var number = +prompt("enter a positive number");
// document.write("number : " + number);
// document.write("<br>" + "round off value : " + Math.round(number));
// document.write("<br>" + "floor value : " + Math.floor(number));
// document.write("<br>" + "ceil value : " + Math.ceil(number));



//=======================















//task 2
//=======================

// var number = +prompt("enter a negative number");
// document.write("number : " + number);
// document.write("<br>" + "round off value : " + Math.round(number));
// document.write("<br>" + "floor value : " + Math.floor(number));
// document.write("<br>" + "ceil value : " + Math.ceil(number));



//=======================










//task 3
//=======================

// var absoulute_val = +prompt("enter the number : ");
// document.write("the absolute value of " + absoulute_val + " is : " + Math.abs(absoulute_val));

//========================
















//task 4 
//======================
// document.write("random dice value : " + Math.ceil(Math.random()*10) );
// document.write("<br>"+"random dice value : " + Math.ceil(Math.random()*10) );

//======================











//task 5
//===========================


// var random = Math.ceil(Math.random()*2);
// if(random === 2){
//      document.write("random coin value : Heads");
// }

// else {
//     document.write("random coin value : Tails");
// }




//===========================










//task 6
//===============================

// var random = Math.ceil(Math.random() * 100);
// document.write("random numbers between 1 and 100 :" + random);


//===============================
















//task 7 
//=============================
// var user_input = +prompt("enter your weight in kgs : ");
// document.write("The weight of the user is " + user_input + " kilograms ");

//=============================








//task 8 
//===========================

// var random = Math.ceil(Math.random() * 10);
// var user = +prompt("enter a number secret between 1 and 10 : ");

// if(user === random){
//     document.write("Congratulations you won : ");
// }

// else{
//     document.write("incorrect better luck next time : ");

// }



//=====================








//============================================================================================================









//chapter 31 - 34
//======================================================================================







//task 1
//================================

// var today = new Date();
// document.write(today);

//================================








//task 2
//=============================

// var today = new Date();


// var d = new Date();
// var month = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "Septemper" , "October" , "November" , "December"];

// alert(month[today.getMonth()]);


//=============================







//task 3
//=========================

// var today = new Date();
// var Days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" ];
// document.write("Today is : " + Days[today.getDay()]);


//========================= 













//task 4
//=======================

// var today = new Date();
// var Days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" ];

// if((Days[today.getDay() === 'Sun')||(Days[today.getDay() === 'Sat')){
//     document.write("its FUN day");
// }




//=======================








//task 5
//============================

//============================











//task 6 
//===================================

// var date = new Date();
// document.write("Current Date : " +  date);
// document.write("<br>" + "Elapsed miiliseconds since  january 1, 1970 : " +  date.getTime());
// document.write("<br>" + "Elapsed minutes since  january 1, 1970 : " +  date.getTime()/(1000 * 60) );




//===================================



















//task 7
//===================================

// var date = new Date(); 
// var hours = date.getHours();
// if ( hours > 11 ){
//     document.write("Its PM");
// }
// else{
//     document.write("its AM");
// }



//===================================














//task 8
//===================================

// var date = new Date("December 31, 2020");
// document.write("Later date : "  + date);


//===================================















// task 9
// ===================================

// var ramazan = new Date("June 18, 2015");
// var ramazan_year = ramazan.getFullYear();


// var today = new Date();
// var today_year = today.getFullYear();

// var difference = today_year - ramazan_year;
// document.write(difference * 12 * 30 + " days have been have been passed since " + ramazan);

// ===================================












// task 10
// ===================================

// var date = new Date("January 1, 2015");
// var date_year = date.getFullYear();


// var reference_date = new Date("December 5, 2015");
// var reference_date1 = reference_date.getFullYear();

// var difference = date_year - reference_date1;
// document.write("On refernce date " + date + "<br>" +    " seconds had passed since of " + date_year);


// ===================================



















// task 11
// ===================================

// var date = new Date();
// var hours = date.getHours();
// document.write("current date : " + date  + "<br>");
// var another = date.setHours("");
// document.write("another date : " + another);

//===================================












// task 11
// ===================================

// var date = new Date();

// var date1 = new Date(1920);

// alert("current date : " + date + "\n" + " 100 years back , it was  " + date1 );




//===================================











// task 12
// ===================================

// var age = +prompt("enter your age :");
// document.write("Your age is : " + age);
// var another =  new Date();
// var date2 = another.setFullYear(20);
// var date3 = age - date2;
// var date4 = date3/(3600 * 24 * 12 );
// document.write("<br>" + "your birth year is : " + date4 );



//===================================




//======================================================================================














//chapter 35-38
//==========================================================================================


//task 1
//=======================

// function myDate(){
//     var date = new Date();
//     return date;
// }


// document.write(myDate());

//======================










//task 2
//=======================

// function name(fname ,lname){
//     alert("hello " + fname + lname);
// }

// name("Abdul" , " Aziz");

//======================








//task 3
//=======================

// function addition(one ,two){
//     return one+two ;
// }

// var one = +prompt("enter a first number :");
// var two = +prompt("enter a second number :");
// document.write("addition of both the numbers are : "+addition(one , two)); 


//======================








//task 4
//=======================

// function operation (one ,two , operator){
//      if(operator === '+'){
//          return (a + b); 
//      }
      
//      else if(operator === '-'){
//         return (a - b); 
//     }

//     else if(operator === '*'){
//         return (a * b); 
//     }

//     else if(operator === '/'){
//         return (a / b); 
//     }

//     }


// var one = +prompt("enter a first number :");
// var two = +prompt("enter a second number :");
// var operator = prompt("enter a operator number :");

// document.write(" operation of both the numbers are : " + operation(one , two , operator )); 


//======================










//task 5
//=======================

// function Square (number){
//      return(number*number );

//     }

// var number  = 5;
// document.write(" square of the numbers is : " + Square(number)); 


//======================/










//task 6
//=======================

// function fact (number){

//     if(number === 1 ){
//         return 1;
//     }
//     else{
    
//      return number*fact(number-1);
//     }
//     }

// var number  = +prompt("enter the number for the factorial");
// document.write(" factorial of the numbers is : " + fact(number)); 


//======================/















//task 7
//=======================

// function print (start , end){

// for(var i = start ; i <= end ; i++ ){
//     document.write("<br>" + " printing the numbers : " + i); 
// }

// }

// var start  = +prompt("enter the start number");
// var end  = +prompt("enter the start number");
// print(start , end);


//======================/












//task 8
//=======================

// function outer(base , perpendicular){
   
//     function inner(){
//             var base1 = base * base;
//             var perpendicular1 = perpendicular * perpendicular;            
//     }
//     var hyp = perpendicular1 + base1;
//     document.write(hyp);
// }



// var base = +prompt("enter a base : " );
// var perpendicular = +prompt("enter a perpendicular : " );
// outer(base , perpendicular);

//======================/








//task 9
//=========================
// function AreaOfTriangle(width , height){
//           document.write("area of trianlge is : " + (width * height));
// }

// var width = 20 ;
// AreaOfTriangle(width , 20);
//=========================








//task 10 
//===============================

// function palindrome(str) {

//     var len = str.length;
//     var middle = Math.floor(len/2);

//     for ( var i = 0; i < middle; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// var str = prompt("enter a palindrome word : ");
// document.write(palindrome(str));


//==============================










//task 11
//===========================

// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }
//   titleCase("I'm a little tea pot");


//===========================











//task 14
//============================

// function calcCircumference(radius){
     
//     document.write("The circumference is : " + Math.round(2 * Math.PI * radius));
// }
// function calcArea(radius){
//     document.write("<br>" + "The area  is  :" + Math.round(Math.PI * radius * radius));
// }



// calcCircumference(4);
// calcArea(4);



//============================






//=========================================================================================