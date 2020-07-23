// <======================== Chapter 38-42 task1 ==============================> // 

// function calcPower(a , b){
//     var result = 1;
//     for (var i = 1 ; i <= b ; i++){
//         result = result * a
//     };
//     return result;
// }
// console.log(calcPower(100000 , 0))

// <======================== Chapter 38-42 task2 ==============================> // 

// function checkLeap(){
//     var year = +prompt("enter to check")
//     if (year % 4 === 0 && year % 100 !== 0){
//         alert("it's a leap year")
//     }
//     else{
//         alert("Not a Leap year")
//     }
// }

// checkLeap()

// <======================== Chapter 38-42 task3 ==============================> // 

// function calcArea(){
//     var a = +prompt("value of a?");
//     var b = +prompt("value of b?");
//     var c = +prompt("value of c?");
//     var S = ( a + b + c ) / 2;
//     var Area = S*(S - a)*(S - b)*(S - c)
//     alert(Area)
// }

// calcArea()

// <======================== Chapter 38-42 task4 ==============================> // 

// total = 225
// var a = +prompt("enter first subject marks out of 75")
// var b = +prompt("enter second subject marks out of 75")
// var c = +prompt("enter third subject marks out of 75")

// function main(){
//     var percent = percentage();
//     var avg = average();
//     alert("your percentage is " + percent);
//     alert("your average is " + avg);
// }
// main()

// function average(){
//     return avg = (a + b + c) / 3
// }

// function percentage(){
//     var obtained = a + b + c
//     return per = (obtained / total) * 100
// }

// <======================== Chapter 38-42 task5 ==============================> // 

// var sentence = "eloquent javascript"
// console.log("sentence = " +sentence)
// var rep = sentence.replace(/a/g , "").replace(/e/g , "").replace(/i/g , "").replace(/o/g , "").replace(/u/g , "")
// console.log("vowels deleted = " +rep)

// <======================== Chapter 38-42 task6==============================> // 

// var sentence = "Pleases read this application and give me gratuity"
// for (var i = 0 ; i < sentence.length ; i++){
//     var char = sentence.charAt(i)
//     switch(char) {
//         case "a" :
//             console.log("two vowels occured , a")
//         case "e" :
//             console.log("two vowels occured , e")    
//         case "i" :
//             console.log("two vowels occured , i")   
//         case "o" :
//             console.log("two vowels occured , o")
//         case "u" :
//             console.log("two vowels occured , u")    
//         break          
//     }
// }

// <======================== Chapter 38-42 task7 ==============================> // 

// var A = +prompt("Write distance in Km")

// function inMeters(){
//     console.log("In meters = " + (A*1000)+"m")
// }
// inMeters()
// function inFeet(){
//     console.log("In feet = " + (A*3281)+"feet")
// }
// inFeet()
// function inInches(){
//     console.log("In inches = " + (A*39370)+"inches")
// }
// inInches()
// function inCentimeters(){
//     console.log("In centimeters = " + (A*100000)+"cm")
// }
// inCentimeters()

// <======================== Chapter 38-42 task8 ==============================> // 

// var amountperHour = 12
// var hours = +prompt("how many hours did employee worked overtime?")
// var pay = hours * amountperHour
// console.log("overtime pay = " + pay + "RS");

// <======================== Chapter 43-48 task1 ==============================> // 

// function task1(){
//     alert("task1 completed")
// }

// <======================== Chapter 43-48 task2 ==============================> // 

// function task2(){
//     alert("theanks for purchasing mobile phone")
// }

// <======================== Chapter 43-48 task3 ==============================> // 

// function row1(){
//     var row = document.getElementById("row1")
//     row.innerHTML = "" 
// }
// function row2(){
//     var row = document.getElementById("row2")
//     row.innerHTML = "" 
// }
// function row3(){
//     var row = document.getElementById("row3")
//     row.innerHTML = "" 
// }

// <======================== Chapter 43-48 task4 ==============================> // 

// function task4(){
//     var getele = document.getElementById("img");
//     var chng = getele.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS09Ru0uFurUN1Kx-mus3PDGJj3xN-e-BEnQ&usqp=CAU"
// }

// function out(){
//     var getele = document.getElementById("img");
//     var chng = getele.src="https://pluspng.com/img-png/light-bulb-png-hd-light-bulb-light-bulb-light-bulb-png-image-260.jpg"
// }

// <======================== Chapter 43-48 task5 ==============================> // 

// var count = 0
// function increase(){
    
    
//     var getele = document.getElementById("result")
//     count = ++count
//     getele.innerText = count
// }
// function decrease(){
//     count = --count
//     var getele = document.getElementById("result")
//     getele.innerHTML = count
// }


// <======================== Chapter 49-52 task1 ==============================> // 

// function submit(){
//     var getname = document.getElementById("name1")
//     yourname = getname.value 
//     var prtname = document.getElementById("prtname")
//     prtname.innerText = `Your name: ${yourname}`
    
//     var getemail = document.getElementById("email")
//     email = getemail.value 
//     var prtemail = document.getElementById("prtemail")
//     prtemail.innerText = `your Email: ${email}`

//     var getpassword = document.getElementById("password")
//     pass = getpassword.value
//     var prtpass = document.getElementById("prtpass")
//     prtpass.innerText =`Your password: ${pass} `

//     var vanish = document.getElementById("form")
//     vanish.innerHTML = " "

// }

// <======================== Chapter 49-52 task2 ==============================> // 

// document.getElementById("full").style.display = 'none'
// var text = document.getElementById('full').innerText

// function show(){
//     document.getElementById('hidden').innerText = text
// }


// <======================== Chapter 53-67 task1 ==============================> // 

// var getEle = document.getElementById('main-content')
// console.log(getEle)

// var getchild = document.getElementsByClassName('render')
// for (var i=0 ; i < getchild.length ; i++){
//     console.log(getchild[i].innerHTML)
// } 

// var chngf = document.getElementById('first-name').value = "zayn"
// var chngl = document.getElementById('last-name').value = "sharif"
// var chng = document.getElementById('email').value = "zayn@email.com"
// console.log(chng)
// console.log(chngf)
// console.log(chngl)

// <======================== Chapter 53-67 task2==============================> // 

// var getEle = document.getElementById('form-content').nodeType
// console.log("the node is an element node "  + getEle);

// var getEle = document.getElementById('lastName').nodeType
// console.log("the node is an element node "  + getEle);

// var getEle = document.getElementById('lastName').childNodes.nodeType
// console.log("the node is an element node "  + getEle);

// var getEle = document.getElementById('main-content').firstChild
// console.log("the fist child is "  + getEle);
// var getEle = document.getElementById('main-content').lastChild
// console.log("the last child is "  + getEle);

// var getEle = document.getElementById('lastName').nextSibling
// console.log("the next sibling is "  + getEle);
// var getEle = document.getElementById('lastName').previousSibling
// console.log("the previous sibling is "  + getEle);


// var getEle = document.getElementById('email').parentNode
// console.log("the parent node is "  + getEle);
// var getEle = document.getElementById('email').nodeType
// console.log("the node type is "  + getEle);