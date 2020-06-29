//Qno-1

// var Current_Datr_time = new Date();

// document.write("<h3>" +Current_Datr_time + "<h3>");



// //Qno-02))

// var Current_Date = new Date();

//  var Current_Month = new Array();
//  Current_Month[0] = "January";
//  Current_Month[1] = "February";
//  Current_Month[2] = "March";
//  Current_Month[3] = "April";
//  Current_Month[4] = "May";
//  Current_Month[5] = "June";
//  Current_Month[6] = "July";
//  Current_Month[7] = "August";
//  Current_Month[8] = "September";
//  Current_Month[9] = "October";
//  Current_Month[10] = "November";
//  Current_Month[11] = "December";

//  var month = Current_Month[Current_Date.getMonth()];


//  document.write("Current Month is : " + month);





//  //Qno-03))

//     var date01 = new Date();

//     var days = new Array();

//     days[0] = "Monday";
//     days[1] = "Tuesday";
//     days[2] = "Wednesday";
//     days[3] = "Thusday";
//     days[4] = "Friday";
//     days[5] = "Saturday";
//     days[6] = "Sunday";

//     var d = days[date01.getDay()];

//     document.write("Current Day is Today :" + d.slice(0 , 3) + "<br>" );


//Qno-04))


// var date01 = new Date();

//     var daysarr = new Array();

//     daysarr[0] = "Monday";
//     daysarr[1] = "Tuesday";
//     daysarr[2] = "Wednesday";
//     daysarr[3] = "Thusday";
//     daysarr[4] = "Friday";
//     daysarr[5] = "Saturday";
//     daysarr[6] = "Sunday";

//     var d01 = daysarr[date01.getDay()];

//     if(d01 === "Saturday" || d01 === "Sunday"){
//         alert("This is the Day of Fun :" + d01 );
//     }else{
//         alert("Today is Working Day " +   d01);
//     }


//Qno-05)



    // var dayss = new Date();

    // var a = dayss.getDate();

    // if(a <= 15 ){
    //     alert("First fifteen days of the month" + a);
    // }else{
    //     alert("Last fifteen days of the month " + a);
    // }

//QNO-06))


        // var calculate = new Date(prompt("enter your date of birth", "dec 11 , 1920"));
        // var calculatemili = calculate.getTime();
        // var today = new Date();
        // var todaymili = today.getTime();
        // var diff = todaymili - calculatemili;
        // var accuage = Math.floor(diff / (24 * 30 * 12));
        // document.write("<br/>Current Date :" + today);

        // document.write(
        // "<br/>Elapsed miliseconds sicnce  :" + calculate + " is : " + diff
        // );
        // document.write(
        // "<br/>Elapsed miliseconds sicnce  :" + calculate + " is : " + accuage
        // );


//Qno-07))


    // var date = new Date();
    // var mint = date.getMinutes();

    // var time = date.getHours();

    // if(time <= 12){
    //     alert("IT is AM :" + time + " : " + mint + " ");
    // }else{
    //     alert("IT is PM :" + time + " :  " + mint + " ");
    // }


    //Qno-08))

    // var later_Date = new Date(2020 , 11 ,31 ,23 , 59 , 59 );
    // document.write("latter Date is : " + later_Date)


     //Qno-09))


    //  var cur_date = new Date();
    //  var pas_date = new Date("2020 , 04 , 25");

    //  var Dif_Time = pas_date.getTime() - cur_date.getTime();

    //  var dif_days = Dif_Time / (1000 * 3600 *24);

    //  var dif_days = Math.ceil(dif_days);

    //  dif_days = dif_days * -1;

    //  document.write("Total Number of Day!" + cur_date + "<br> and <br>"  + pas_date + " <br>");
    //  document.write("<h2>Passing Day of Ramadan !! " + dif_days + "</h2>");
     


   //Qno-10))


// //    var ref_date = new Date(2015 , 01 , 05);
// //    var cur_date = new Date();

// //    var diff =  cur_date - ref_date;

// //    diff / 1000;

// //    document.write("On Refer Date " + ref_date + " <br> " +  diff + "Second Has Passed since Begining 2015")



//    //Qno-11))

// //    var current = new Date();
// //    document.write("Current Time IS :" + current + "<br>");

// //    current.setHours(current.getHours() -1);

// //    document.write("Before 1 houe Time is : " + current);


//    //Qno12))

//     // var current = new Date();
        
//     //     alert("Curent Date is Today:  " + current);

//     // current.setFullYear(current.getFullYear - 100);

//     // alert("100 years Before Date : " + current );


//     //Qno-13))

//     // var age = prompt("Please Enter Your Age :");
//     // var ageint = parseInt(age);

//     // var Curent = new Date();

//     // var current_years =  Curent.getFullYear();

//     // var different = current_years - ageint;

//     // document.write("Your Birth Years is :" + different);


//     //Qno-14))

//     var cleint_name = prompt("Please Enter Your Name !!");
//     var month = prompt("Please Enter Your Current Bill  Month!!");
//     var unit = +prompt("Please Enter Your Current Minth Bill Units !!");

//     var per_unit_charges = 11;

//     var Net_amount = (unit * per_unit_charges).toFixed(2);

//     var late = ((Net_amount/100) * 5).toFixed(2);

//     var gross = parseInt(Net_amount) + parseInt(late);
//     console.log(gross);

//    // var gross01 = parseInt(gross).toFixed(2);

//     document.write("<h2>K-Electric Bill!!</h2>");

//     document.write("<h4> Customer Name : " + cleint_name + "</h4> <br>");

//     document.write("<h4> Current Month : " + month + "</h4> <br>");

//     document.write("<h4> Current Month Unit : " + unit + "</h4> <br>");

//     document.write("<h4> Per Unit Cost!! : " + per_unit_charges + "</h4> <br>");
    
//     document.write("<h4> Net Amount Payable (within Due Date) : " + Net_amount + "</h4> <br>");

//     document.write("<h4> Late Payment Surcharge : " + late + "</h4> <br>");

//     document.write("<h4> Gross Amount Payable (after Due Date) : " + gross + "</h4> <br>");


    
    










