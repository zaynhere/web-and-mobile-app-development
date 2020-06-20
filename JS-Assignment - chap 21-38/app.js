// <============== Chapter 21-25 , task1 ================>
// var firstname = prompt("enter your first name")
// var lastname = prompt("enter your last name")

// alert("Hello " + firstname +" "+ lastname)

// <============== Chapter 21-25 , task2 ================>
// var phone = prompt("which is your favorite phone model?");
// alert("the length of string is " + phone.length)

// <============== Chapter 21-25 , task3 ================>
// var word = "Pakistani";
// console.log("index of word 'n' is " + word.indexOf("n"))

// <============== Chapter 21-25 , task4 ================>
// var word = "Hello World";
// console.log("the index of letter 'l' from last is " + word.lastIndexOf("l") );

// <============== Chapter 21-25 , task5 ================>
// var i = +prompt("At what index do you want the value?")
// var word = "Pakistani";
// console.log("The value at index " + i + " " + "is: " +" "+ word.charAt(i) )

// <============== Chapter 21-25 , task6 ================>
// var firstname = prompt("enter your first name")
// var lastname = prompt("enter your last name")
// alert("Hello "  + firstname.concat(" " + lastname))

// <============== Chapter 21-25 , task7 ================>
// var city = "Hyderabad"
// console.log("City : " + city);
// console.log("After Replacement: " + city.replace("Hyder" , "Islam"));

// <============== Chapter 21-25 , task8 ================>
// var message = "Ali and Sami are best friends. They play cricket and football together";
// console.log("message: " + message);
// console.log("After Replacement: " + message.replace(/and/gi , "&"))

// <============== Chapter 21-25 , task9 ================>
// var value = "472";
// console.log("value: " + value);
// console.log("type: " + typeof(value))
// console.log("value: " + value);
// var num = Number(value);
// console.log("type: " +typeof(num))

// <============== Chapter 21-25 , task10 ================>
// var userInput= prompt("write anything")
// console.log("user input: " + userInput)
// console.log("In capital letters: " + userInput.toUpperCase())

// <============== Chapter 21-25 , task11 ================>
// var num = 54.32
// console.log("actual type of input: "+ typeof(num))
// var str = num.toString();
// console.log("Number converted to string: " + str)
// console.log("type of number: "+ typeof(str));

// console.log("Result: " + 5432)

// <============== Chapter 21-25 , task12 ================>
// var university = "University of Karachi"
// var arr = university.split("");
// console.log(arr)
// for (var i=0 ; i<arr.length ;i++ ){
//     console.log(arr[i])
// }

// <============== Chapter 21-25 , task16 ================>
// var userInput = prompt("enter character")
// var i = userInput.length
// var char = userInput.charAt(i-1)
// console.log(userInput)
// console.log("the last character is: " + char)

// <============== Chapter 21-25 , task17 ================>
// var str = "The quick brown fox jumps over the lazy dog the"
// var occ = str.match(/the/gi).length
// console.log("there are " + occ + " " + "occurence(s) of a word 'the' in string ")



//                 <===================XXX===================>



// <============== Chapter 26-30 , task1================>
// var userInput = prompt("Write any integer")
// console.log("Number: " + userInput);
// console.log("rounded number: " + Math.round(userInput));
// console.log("Floor number: " + Math.floor(userInput));
// console.log("Ciel Number: " + Math.ceil(userInput))

// <============== Chapter 26-30 , task2================>
// var userInput = +prompt("Write any negative integer")
// console.log("Number: " + userInput);
// console.log("rounded number: " + Math.round(userInput));
// console.log("Floor number: " + Math.floor(userInput));
// console.log("Ciel Number: " + Math.ceil(userInput))

// <============== Chapter 26-30 , task3================>
// var userInput = +prompt("write any number")
// console.log("Number: " + userInput);
// console.log("The absolute value of " + userInput + " " + "is: " + Math.abs(userInput))

// <============== Chapter 26-30 , task4================>
// var dice = Math.random()
// console.log("random dice value: "+Math.floor(dice*6+1))

// <============== Chapter 26-30 , task5================>
// var coin = Math.random()
// var coinValue = Math.floor(coin*2+1)
// if(coinValue === 1){
//     console.log("It's Heads")
// }
// else if(coinValue === 2){
//     console.log("It's Tails")
// }
// console.log("random coin value: "+ coinValue)

// <============== Chapter 26-30 , task6================>
// var number = Math.random()
// console.log("random number between 1 and 100: "+Math.floor(number*100+1))

// <============== Chapter 26-30 , task7================>
// var weight = prompt("what is your age?", "50Kg");
// console.log("The user weight in Kilogram is : " + weight)

// <============== Chapter 26-30 , task8================>
// var secretNumber = +prompt("guess the secret number between 1 and 10");
// var secret = Math.floor(Math.random()*10+1)
// console.log(secret)
// if (secretNumber === secret){
//     console.log("Congratulations, You have guessed the right number")
// }
// else{
//     console.log("Keep Trying, You are near")
// }


//                 <===================XXX===================>


// <============== Chapter 31-34 , task1================>
// var current = new Date
// console.log(current)

// <============== Chapter 31-34 , task2================>
// var dateObject = new Date;
// var month = [];
// month[0] = "January"
// month[1] = "February"
// month[2] = "March"
// month[3] = "April"
// month[5] = "June"
// month[6] = "July"
// month[7] = "August"
// month[8] = "September"
// month[9] = "October"
// month[10] = "November"
// month[11] = "December"
// month[4] = "May"
// console.log("Current Month: " + month[dateObject.getMonth()] )

// <============== Chapter 31-34 , task3================>
// var dateObject = new Date;
// var day = ["sunday" , "monday" , "tuesday" , "thursday" , "friday" , "saturday"];
// var currentday = dateObject.getDay()
// var dayName = day[currentday]
// console.log("Today is: " + day[dateObject.getMonth()].slice(0,3) )

// <============== Chapter 31-34 , task4================>
// var dateObject = new Date;
// var day = ["sunday" , "monday" , "tuesday" , "thursday" , "friday" , "saturday"];
// var today = day[dateObject.getMonth()]
// if (today === "sunday" || today === "saturday"){
//     console.log("It's Fun day")
//     console.log("Today is : " + today)
// }
// else{
//     console.log("Today is : " + today)
// }

// <============== Chapter 31-34 , task5================>
// var dateObject = new Date;
// var date = dateObject.getDate()
// console.log("Today's date is: " +date )
// if(date < 16){
//     console.log("First Fifteen days of month")
// }
// else{
//     console.log("Last days of month")
// }

// <============== Chapter 31-34 , task6================>
// var dateObject = new Date(1970-01-01)
// console.log("Current date: "+ dateObject);
// var Ellapsedml = dateObject.getMilliseconds();
// console.log("Ellapsed Milliseconds since January 1,1970 : " +Ellapsedml);
// var Ellapsedmin = dateObject.getMinutes();
// console.log("Ellapsed minutes since January 1,1970 : " +Ellapsedmin);

// <============== Chapter 31-34 , task7================>
// var dateObject = new Date;
// var time = dateObject.getHours()
// console.log("The current time is "+time)
// if(time >= 12){
//     console.log("it's PM")
// }
// else if(time < 12 && time >= 0){
//     console.log("it's AM")
// }
// else{
//     console.log(null)
// }


//                 <===================XXX===================>


// <============== Chapter 35-38 , task1================>
// function date(){
//     var dateObject = new Date;
//     console.log(dateObject)
// }
// date()

// <============== Chapter 35-38 , task2================>
// function greet(){
//     var first = prompt("write firstname")
//     var last = prompt("write lastname")
//     console.log("fullname: "+first +" "+ last)
// }
// greet()

// <============== Chapter 35-38 , task3================>
// function sum(num1,num2){
//     console.log("sum of two num is: "+ (num1+num2))
// }
// sum(+prompt("num1?"),+prompt("num2?"))

// <============== Chapter 35-38 , task4================>
// function calculator(num1,operator,num2){
//     if(operator === "+"){
//         console.log("Answer: "+ (num1+num2))
//     }
//     else if(operator === "-"){
//         console.log("Answer: "+ (num1-num2))
//     }
//     else if(operator === "*"){
//         console.log("Answer: "+ (num1*num2))
//     }
//     else if(operator === "/"){
//         console.log("Answer: "+ (num1/num2))
//     }
//     else if(operator === "%"){
//         console.log("Answer: "+ (num1%num2))
//     }
//     else{
//         console.log("Syntax Error")
//     }
// }
// calculator(+prompt("num1?","5"),prompt("operator?","+"),+prompt("num2?","5"))

// <============== Chapter 35-38 , task5================>
// function squaring(num){
//     console.log(`Square of ${num} is ${num*num}`)
// }
// squaring(+prompt("num?"))

// <============== Chapter 35-38 , task6================>
// function count(start,end){
//     for(var i = start ; i <= end; i++){
//         console.log(i)
//     }
// }
// count(+prompt("start"),+prompt("end"))

// <============== Chapter 35-38 , task7================>
// function area(width,height){
//     console.log(`Area of rectangle is ${width*height}`)
// }
// area(+prompt("width?"),+prompt("height?"))

// <============== Chapter 35-38 , task10================>
// function palandrome(string){
//     var str = string.toLowerCase().split("")
//     var rev = str.reverse().join()
//     if(str == rev){
//         console.log(`${string} is palandrome`)
//     }
//     else{
//         console.log(`${string} is not a palandrome`)
//     }
    
// }
// palandrome(prompt("write a string"))

// <============== Chapter 35-38 , task14================>
// function calcCircumference(rad){
//     console.log(`The Circumference of a circle with radius ${rad} is ${2*3.142*rad}`)
// }
// calcCircumference(+prompt("radius?"))

// function calcArea(rad){
//     console.log(`The area of a circle with radius ${rad} is ${3.142*rad*rad}`)
// }
// calcArea(+prompt("radius?"))

// <============================== END ================================>
