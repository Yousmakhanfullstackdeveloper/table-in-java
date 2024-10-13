let a =parseInt(prompt("Enter the initital number"));
let b =parseInt(prompt("Enter the final number"));
let loops = "loops";
let y ="";
let div = document.getElementById("Loop");
for (let o=a;o<=b;o++){
    y+="<p>"+o+"</p>";
}
div.innerHTML=y;
if(isNaN(a) || isNaN(b)){
    alert("Error: both input must be a data or complete your data")
}
else if(loops== a < b){
    alert(a + " first number is greater than " + b + " and second number is less than  Oops Enter the right digit ")
}
else if(loops==""){
    alert("its blank please input your data")
    location.assign(`forloop.html`)
}