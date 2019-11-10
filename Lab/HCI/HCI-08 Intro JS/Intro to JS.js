// ini Full Basics Javascript murni. no framework
// Literally JS ga butuh semicolon, cuma kalo mau pake ya gapapa

//variables
var str = "Henlo World"
var num1 = 10
var num2 = 3.14
var boolean = true
var foo; //undefined variable
bool = 'Wanna be Pwned?:D'

//output ke console
console.log("var str : "+str)
console.log("var num1 : "+num1)
console.log("var num2 : "+num2)
console.log("var boolean : "+boolean)
console.log("var foo : "+foo)
console.log("bool's Content : "+bool)

//output to web page

document.write("This Section Is a Normal data output with JS document.write <br><hr>")
document.write("var str : "+str + "<br>")
document.write("var num1 : "+num1 + "<br>")
document.write("var num2 : "+num2 + "<br>")
document.write("var boolean : "+boolean + "<br>")
document.write("var foo : "+foo + "<br>")
document.write("bool's Content : "+bool + "<br>")

//objects in js
var obj = {
    //nama properties
    name: "Yonathan",
    age: 20,
    address: "binus",
    detail: function(){
        return "namanya " +this.name + " " + "dan umurnya: " + this.age;
    }
}

//output object on console
console.log("nama: "+obj.name)
console.log("umur: "+obj.age)
console.log("alamat: "+obj.address)
console.log("detail: "+obj.detail())

// output object on web page
document.write("<br><br><hr>This Section Is a Normal object output with JS document.write <br><hr>")
document.write("nama: "+obj.name + "<br>")
document.write("umur: "+obj.age + "<br>")
document.write("alamat: "+obj.address + "<br>")
document.write("detail: "+obj.detail() + "<br>")

//array in JS
var arr = [1,2,3,4,5,6,7,8]

// Output to console
console.log("Index ke 0 : " + arr[0])
console.log("Index ke 2 : " +arr[2])
console.log("Index ke 4 : " +arr[4])
console.log("Index ke 6 : " +arr[6])


// Output to web page
document.write("<br><hr> This Section Is the output of Array arr = [1,2,3,4,5,6,7,8] <hr> ")
document.write("Index ke 0 : " +arr[0] + "<br>")
document.write("Index ke 2 : " +arr[2] + "<br>")
document.write("Index ke 4 : " +arr[4] + "<br>")
document.write("Index ke 6 : " +arr[6] + "<br>")


var arr2 = ["Helo", 5]
// output what happened in this array event
document.write("<br><hr> This Section Is the output of Array arr2 = ['Helo', 5] <hr> ")
console.log(arr2[0] + " " + arr2[1])
document.write(arr2[0] + " " + arr2[1] + "<br>")

arr2.push(true)
document.write("Pushing new item to arr2 in index 2 --> 'true'"+"<br>")

console.log(arr2[2])
document.write(arr2[2] + "<br>")

document.write("data di index ke-2 dihapus!" + "<br>")
console.log(arr2.pop())
try {
    document.write(arr2[2])
}catch{
    document.write("datanya kan udah dihapus :)))" + "<br>")
}

// function
function sum(a,b){
    return a+b;
}
//panggil function
console.log(sum(4,5));

//selection
var angka = 11;
if (angka %2 ==0){
    console.log("Angka genap");
}
else{
    console.log("Angka ganjil");
}

//repetition
var i = 5;
for(var i = 0; i<10; i++){

    console.log(i);
}

//repetition with array
var array = ["asd", "zxc", "sqp"];
for(ar in array){
    console.log(array[ar]);
}



// Build in functions
var d = new Date();

var a = d.getDay()
var b = d.getDay() 
var c = d.getFullYear() 
var x = d.getHours() 
var e = d.getMilliseconds() 
var f = d.getMinutes() 
var g = d.getMonth() 
var h = d.getSeconds()
var i = d.getTime() 
var j = d.getTimezoneOffset() 
var k = d.getUTCDate() 
var l = d.getUTCDay() 
var m = d.getUTCFullYear()
var n = d.getUTCHours() 
var o = d.getUTCMilliseconds() 
var p = d.getUTCMinutes() 
var q = d.getUTCMonth() 
var r = d.getUTCSeconds() 

document.write("<br><br><hr>This Section is for Build in Date functions <hr>")
document.write(a+"<br>")
document.write(b+"<br>")
document.write(c+"<br>")
document.write(x+"<br>")
document.write(e+"<br>")
document.write(f+"<br>")
document.write(g+"<br>")
document.write(h+"<br>")
document.write(i+"<br>")
document.write(j+"<br>")
document.write(k+"<br>")
document.write(l+"<br>")
document.write(m+"<br>")
document.write(n+"<br>")
document.write(o+"<br>")
document.write(p+"<br>")
document.write(q+"<br>")
document.write(r+"<br>")

//Math built in function silakan cek HOL. 


// String Manipulation. sisa materi silakan cek di HOL ama di w3schools kl blom paham

var str1 = "Marisa"
var str2 = "Kirisame"

msg1 = str1.charAt(2) 
msg2 = str1.charCodeAt(2)
msg4 = str1.indexOf("Mari",0)
msg5 = str1.lastIndexOf("risa",5)
msg6 = str1.slice(0,3)
msg7 = str1.substr(0,4)
msg8 = str1.substring(2,4)
msg9 = str1.toLowerCase() 
msg10 = str2.toUpperCase()  

document.write("<br><br><hr>This Section is the output of the string manipulation <hr>")
document.write(msg1+"<br>")
document.write(msg2+"<br>")
document.write(msg4+"<br>")
document.write(msg5+"<br>")
document.write(msg6+"<br>")
document.write(msg7+"<br>")
document.write(msg8+"<br>")
document.write(msg9+"<br>")
document.write(msg10+"<br>")




// DOM - Document Object Model

// Cara 1  

var nama = document.getElementById("nama")
    message = "Nama Saya adalah : "
    nama.innerHTML = message + "Yonathan" //innerHTML adalah isi yang mau kita kasih lihat
    nama.style.color = "blue"
   
// Cara 2 - ini cara cepat tanpa styling
document.getElementById("jurusan").innerHTML= "Jurusan saya : "+"Cyber Security";

document.getElementById("TestTextfield").value="Ini DOM dalem Text Field :D"


// Buat event listener, jadi kalo ada yg trigger sesuatu maka akan ada event. 
document.getElementById("btn").addEventListener("click",
    function(e){
        document.getElementById("text").style.color = "red"
        alert("success")
    }
)

// Buat event listener, jadi kalo ada yg trigger sesuatu maka akan ada event. 
document.getElementById("btns").addEventListener("click",
    function(e){
        document.getElementById("text").style.color = "black"
        alert("success")
    }
)