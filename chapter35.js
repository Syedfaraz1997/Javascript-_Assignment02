//Qno-01))

    // function getDate(){
    //     var a = new Date();
    //     document.write(a);
    // }

    // getDate();

//Qno02))

    // function getDatail(){
    //     var first_Name  = prompt("Please Enter Your First Name !!!");
    //     var last_Name = prompt("Please Enter Your last Name !!!");
    //     var full_Name = first_Name + "  " + last_Name ;
    //     document.write(full_Name);
    // }
    // getDatail();

 //Qno-03))

    // function getSum(){
    //     var input1  = +prompt("Please Enter Your First Number !");
    //     var a = parseInt(input1);
    //     var input2 = + prompt("Please Enter Your Second Number !!!");
    //     var b = parseInt(input2);

    //     var sum = a + b;

    //     document.write("The Sum of Given Numbers : " + " " + sum);
    // }

    // getSum();


//Qno-04))

    // function getCalculate(){
    //     var input1  = +prompt("Please Enter Your First Number !");
    //     var a = parseInt(input1);
    //     var Operator = prompt("Please Enter Your Operator :" , "E.g : + , / ,* , - , %");
    //     var input2 = + prompt("Please Enter Your Second Number !!!");
    //     var b = parseInt(input2);

    //     if(Operator === "+"){
    //         sum = a + b;
    //         document.write("Addition of Object !" +sum);
    //     }else if (Operator === "-"){
    //         sub = a - b;
    //         document.write( "Subtraction of Object !" + sub);
    //     }else if(Operator === "*"){
    //         mul = a*b;
    //         document.write("Multiplication of Object !" + mul);
    //     }else if(Operator === "/"){
    //         div = a/b;
    //         document.write("Division of Object !" + div);
    //     }else if(Operator ==="%"){
    //         Modulus = a%b;
    //         document.write("Modulus of Object ! " + Modulus);
    //     }else{
    //         document.write("Somethings is Wrong")
    //     }
    // }

    // getCalculate();


    //Qno-05))

    // function getSquare(){
    //     var number  = +prompt("Please enter your number !! ", "e.g : 34 ,5 , 32 , ");

    //     var a = Math.pow(number,2);

    //     alert("The Squre of the Given Number ! : " +  " "+ a );

    // }

    // getSquare();



    //Qno06))

    // var  fac_num = +prompt("Please Enter a number to calculate the Factorial!!!!");

    // function getFactorial(fac_num){
    //         if(fac_num === 0){
    //             return 1;
    //         }else{
    //             return fac_num * getFactorial(fac_num -1);
    //         }

    // }

    // alert(" Factorial of the Given  Number !!" +  " " + getFactorial( fac_num ));


    //Qno07))



    // function getCounting(){

    // var input01 = +prompt("Please Enter That,s to Sarted a Counting!! ");
    // var input02 = +prompt("Please Enter last Number of the Counting");

    // for(var i = input01; i<= input02; i++){
    //     document.write(i + "<br>")
    // }

    // }

    // getCounting();


    //Qno-08))


    // function getpytho(){
    //     var side01 = +prompt("Please enter your forst side !");
    //     var side02 = +prompt("Please Enter your Second Side !");

    //     getNestied(side01 , side02);
    // }

    // function getNestied(side01 , side02){

    //     var a = Math.sqrt(Math.pow(side01 ,2) + Math.pow(side02 , 2));

    //     document.write("Answers of Pythagoras Therom! ! :" + " " + a);
    // }

    // getpytho();


    //Qno-09))


    // var height = 12;
    // var width = 18;

    // function getArea(height , width){
    //     return  height*width;
    //    // document.write("Area of Given Object!!" + area)
    // }
    // document.write("Argument as value " + getArea(5,6))
    // document.write("<br/>Argument as variable " + getArea(wdith , height));




    // //Qno-10))

    

    // getArea();

    // // Qno-10))


    // var str = prompt("Enter a string to check either it is palindrome or not")
    //     function palindrome(str) {
    //         var re = /[^A-Za-z0-9]/g;
    //         str = str.toLowerCase().replace(re, '');
    //         var len = str.length;
    //         for (var i = 0; i < len/2; i++) {
    //         if (str[i] !== str[len - 1 - i]) {
    //             document.write("No given string is not a palindrome")
    //             break;
    //         }
    //         else{
    //         document.write("Yes  given string is palindrome")
    //         break;
    //         }
    //     }}
    //     palindrome(str);


    //Qno-11))

    // var string = "the quick brown fox" + "<br>";
    // document.write("User Input : " + " " + string)

    // function getChange(string){
    //     str = string.toLowerCase().split(" ");

    //     for(var i = 0; i < str.length; i++ ){
    //         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    //     }
    //     return str = str.join(' ');
    // }
    // getChange(string);

    // document.write("Tittle Case is Ready : " + " " + str + "<br>");


    //Qno-12))
    

    // function fint(str02){
    //     var arr01 = str02.match(/\w[a-z]{0,}/gi);
    //     var result = arr01[0];
    //         for(var a = 1 ; a < arr01.length; a++){

    //             if(result.length < arr01[a].length ){
    //                 result = arr01[a];
    //             }

    //         }

    //         return result;

    // }
    //  document.write("Longest Word in the string Value: " + " " + fint('The Web Development Tutorail'));


    //Qno-13))


    // function getOccurance(str , Checkit){

    //     var lat_Count = 0;

    //     for(var x = 0; x < str.length; x++){
    //         if(str.charAt(x) == lat_Count){
    //                 lat_Count += 1;
    //         }
    //     }

    //     return  lat_Count;
    // }

    // document.write("Number of occurrences of specified letter is :" + " " +
    //  getOccurance('Syedfaraz210@gmail.com' , 'a')) ;


    //Qno-14))


    function  calcArea(radius){
        return Math.PI * radius * radius 
    }
    function calcCircumference(radius){
        return 2*Math.PI *radius
    
    }
    document.write("The area of a circle on basis of radius : " + calcArea(4).toFixed(2))
    document.write("<br/>The circumference of a circle on basis of radius : " + calcCircumference(4).toFixed(2))
