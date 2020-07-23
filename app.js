// function calculatingCustomPower(a,b){
//     document.write(a + '^' + b + ' = ' + Math.pow(a,b))
// }
// calculatingCustomPower(2,3)

/////2///

//  function leap(){

// var a = +prompt("enter any year");
//  if(a%100===0){
//  document.write(a + " it is sa a leap yaer ")
// }
//  else if(a%400===0){

//      document.write(a+ " its is a leap yaer");
//  }

//  else if(a%4===0){

//      document.write(a+ " its is a leap yaer");
//  }
//  else{

//    document.write(a+ " its is a not leap yaer");
// }

//  }
// leap();

// /////3///

function area(){
  var a = +prompt("enter the side1");
    var b = +prompt("enter the side2");
  var c = +prompt("enter the side3");
 var s = (a + b + c)/2;
   var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
   document.write("area of traingle is " + area);


 }

 area();

 ///////////////////////////////////////////////////TASK 04////////////////////////////

// function marks(){
//  var sub1 = +prompt("enter a first subject marks");
//  document.write("marks odf sub1" + sub1 + "<br>");
//  var sub2 = +prompt("enter the second subject marks");
//  document.write("marks odf sub2" + sub2 + "<br>");
//  var sub3 = +prompt("enter the third subject of marks");
//  document.write("marks odf sub1" + sub3 + "<br>");
//  var total = 300;
//  document.write("total no is" + total + "<br>");
//  var sum = sub1+sub2+sub3; 
//  document.write("obtain marks" + sum + "<br>");
   
//      function average(){

//         var average = sub1+sub2+sub3/3;
//         document.write("ther average of :" + average + "<br>");
// }

// average();

//    function per(){

//    var per = sum/total*100;

//    document.write("percentage" + per + "<br>");

//   }

//   per();
// }

//   marks();

///////////////////////////////////////////////////TASK 05////////////////////////////


// function index(b){

// var a = ['a','b','c'];

// for(i=0; i<a.length; i++){


  
//    if(b===a[i]){

//       document.write("index of " + b  + "  is " + i);

//    }
   

// }



// }

// index('b');

///////////////////////////////////////////////////TASK 06////////////////////////////

// function delte(str){


// var arr = str.split(" ");

// var arr = str.replace(/[aeiouAEIOU]/g, " ");

// alert(arr);

// }

// delte("Mr Blue has a blue house and a blue car");



///////////////////////////////////////////////////TASK 07////////////////////////////

// function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
  
//   var found = findOccurrences();
  
//   console.log(found);


///////////////////////////////////////////////////TASK 08////////////////////////////


// var distance = +prompt("plz enter a distance in kilometer");

// var  meter =  distance * 1000;
// var  feet  = meter * 3.28;
// var  inches = feet * 12;
// var centimeter = inches * 30;

// document.write("distance in meter " + meter + "<br>");
// document.write("distance in feet " + feet + "<br>");
// document.write("distance in inches " + inches + "<br>");
// document.write("distance in centimeter " + centimeter + "<br>");

///////////////////////////////////////////////////TASK 09////////////////////////////


// var overtime = 0;

// var time = +prompt("enter the hours for an employ worked above 40 hour");
// document.write("enter the hours for an employ worked above 40 hour" + time + "<br>");

// i = 0;

// while(i<=time){

//     overtime = i*12;

//     i++;
// }

// document.write("overtime of the employ is Rs " + overtime);


///////////////////////////////////////////////////TASK 10////////////////////////////


// function currencyDenomination() {

//     var cash = +prompt("enter withdraw anount");
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination();



///////////////////////////////////////////////////CHAPTER 43 TO 48////////////////////////////


///////////////////////////////////////////////////TASK 1////////////////////////////

// function link(){

//   alert("helo world");
  

// }

///////////////////////////////////////////////////TASK 2////////////////////////////


// function message(){

//   alert("thank you for  purchasing these product");
  

// }

///////////////////////////////////////////////////TASK 3//////////////////////////////////////////



// function deleteRow(r) {

//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }


///////////////////////////////////////////////////TASK 4//////////////////////////////////////////


/////////////////////see index.html folder/////////////////////////////////////////////////


///////////////////////////////////////////////////TASK 5//////////////////////////////////////////


// function addone(){
//     var foo = document.getElementById('thisone').innerHTML;
//     foo++;
//     document.getElementById('thisone').innerHTML = foo;
//   }
  

//   function subone(){
//     var foo = document.getElementById('thisone').innerHTML;
//     foo--;
//     document.getElementById('thisone').innerHTML = foo;
//   }



 ///////////////////////////////////////////////////CHAPTER 49 TO 52//////////////////////////////////////////

 ///////////////////////////////////////////////////TASK 1/////////////////////////////////////////////////

//  function validation(){

// var fname = document.getElementById("fname");
// var lname = document.getElementById("lname");
// var pass = document.getElementById("pass");
// var conpass = document.getElementById("conpass");
// var mb = document.getElementById("mb");
// var email = document.getElementById("email");



// document.write(fname.value + "<br>");
// document.write(lname.value + "<br>");
// document.write(pass.value + "<br>");
// document.write(conpass.value + "<br>");
// document.write(mb.value + "<br>");
// document.write(email.value + "<br>");

 



//  }


 ///////////////////////////////////////////////////TASK 2/////////////////////////////////////////////////

//  function myFunction() {
//    var dots = document.getElementById("dots");
//    var moreText = document.getElementById("more");
//    var btnText = document.getElementById("myBtn");
 
//    if (dots.style.display === "none") {
//      dots.style.display = "inline";
//      btnText.innerHTML = "Read more";
//      moreText.style.display = "none";
//    } else {
//      dots.style.display = "none";
//      btnText.innerHTML = "Read less";
//      moreText.style.display = "inline";
//    }
//  }

/////////////////////////////task 3//////////////////////////////



// function deleteRow(r) {

//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// } 

//////////////////////pending////////////////////////////////////


///////////////////////////////CHAPTER 52 TO 57////////////////////////////////////////////


function makeInvisible1() {
    document.getElementById("ugly").className = "hidden";
    }
 
    function makeInvisible2() {
      document.getElementById("ugly").className = "hidden";
      }
      function makeInvisible3() {
         document.getElementById("ugly").className = "hidden";
         }

         function makeInvisible4() {
            document.getElementById("ugly").className = "hidden";
            }
