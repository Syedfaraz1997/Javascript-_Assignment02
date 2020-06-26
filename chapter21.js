//Qno-01))

//  var first_name = prompt("Please Enter your first name :");
//  var Last_name = prompt("Please Enter your Last name :");
//  var full_Name = first_name + "  " + Last_name;

//  document.write("<h2>Full Name " + full_Name + "<h2><br>");



//  //Qno-02))


//     var Mobile_Name = prompt("Please Enter Your Favorite Mobile Model:");

//     document.write("<h3>My favorite Phone is :" + Mobile_Name + "<br>");
//     document.write("Length of string : " + Mobile_Name.length + "<br></h3>");



// //Qno-03))


//     var country = "Pakistani!";

//    document.write("<h3>String : is "+ country +" <br>Index of 'n ' is : " + country.indexOf("n") + "</h3>");



// // Qno-04))

    // var gree = "Hello World";

   //  document.write("<h3>String : is "+ gree + "<br>Index of 'l ' is : " + gree.lastIndexOf("l") + "</h3>");


//Qno-05))

// var count = "Pakistani";

// document.write("<h3>String : is "+ count + "<br>Character at Index 3 : " + count.charAt(3) + "</h3>");


// //Qno-06))

// var first_name = prompt("Please Enter your first name :");
// var Last_name = prompt("Please Enter your Last name :");

// document.write("<h3>Full Name is :" + first_name + " " + Last_name + "</h3> <br>");


//Qno-07))

// var city = "Hyderabad";
 
// var replacement = city.replace("Hyderabad" , "Islamabad");

// document.write("<h3> City :" + city + "<br>" +  "After Replacement :"+ replacement + "<h3>");


//Qno-08))


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace("and" , "&").replace("and" , "&");

// document.write(replace);


//Qno-09))

//      var num = "472";
//      document.write("<h2>Value :"+ num +"<br>Type :" + typeof num + "<h2>" );

//      var x = parseInt(num);

//      document.write("<h2>Value :"+ x +"<br>Type :" + typeof x + "<h2>" );

// //Qno-10))

//     var int = prompt("Please Enter your favorite dry fruit : ");
//     document.write("<h3>User Input :" + int + "</h3>");
//     var y = int.toUpperCase();
//     document.write("<h3>Upper Case :" + y + "</h3><br>");


//Qno-11))
        // var intput = prompt("Please Enter your favorite Programing Language: ");
        // document.write("<h3>User Input :" + intput + "</h3>");
        // var y = intput[0].toUpperCase() + intput.slice(1);
        // document.write("<h3>Upper Case :" + y + "</h3><br>");


//Qno-12))

    // var number  = 35.36;
    // document.write(typeof number +" :" + number + "<br>");

    // var str = number.toString().replace("." , "");

    // document.write("Result :" + str);


    //Qno-13))



//     var a = prompt("Please Enter An ");
//     var b = a.split("");
//     var c = [];

//     for(var i = 0; i < b.length; i++){
//          c.push(b[i].charCodeAt(0));
//         if(c[i] == 33 || c[i] == 44 || c[i] == 46 || c[i] == 64){
//             alert("User can not be contain Special Character in Name !!");
//             break;
//         }
//     }

// //    if(c[i] != 33 || c[i] != 44 || c[i] != 46 || c[i] != 64) {
// //                    document.write("Correct Name !");

// //     }

    //Qno-14))


    // var want  = prompt("Please Enter What you want :");

    //  a = want.toLowerCase();
    // // document.write(a);

    //  var item = ["cake" , "apple" , "cookie" , "Chips" , "patties"];

    //  for(var i=0; i<item.length; i++){
    //         item[i] === a;
    //         // document.write(a);
    //         //     break;
    //         if(item[i] === a){
    //             document.write("Yes Sir Please Wait 5 minute of Your Order");
    //             break;
    //         }

    //  }
     
    //    if(i == item.length && a!==[i]){
    //        alert("Sorry Sir  " + want + " is not Available at that Time!!")
    //    }

   //Qno-15))


   // var str = "123456789";
   // var a = str.split(" ");
   // var Password = ("Please Enter An Password" );
   // var arr = Password;

   // if(str.match(arr[0]) && arr.length != 6){
   //     alert("Password Should not be Started Letter / It,s Character is Greater Than Six ");
   // }else{
   //     alert(" Corrext Valid Password");
   // }


   //Qn0-16))

//    var university = "University Of Karachi";
//    document.write("<h3>" + university + "</h3> <br>");

//    var a = university.split(" ");

//    document.write("<h3>" + a + "</h3> <br>");

//    for(var i  = 0; i <university.length; i++){
//        document.write(university[i] + "<br>");
//    }


    //Qno-17))

    // var input01 =  prompt("Please Enter Your Country");
    // document.write("<h4> User Input : " + input01 + "</h4> ");

    // var a = input01.charAt(input01.length-1);

    // document.write("<h4> Last Character of Input  : " + a + "</h4> <br>");

    //Qno-18))

    var str = "The quick brown fox jumps over the lazy dog";

    document.write("<br/> str : " + str)
    var check = str.match(/the/gi).length;
    document.write("</br> Ther are "+check + " occurrencse(s) of word 'the'")








