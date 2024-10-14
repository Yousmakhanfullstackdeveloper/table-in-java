// take input from user
let a=parseInt(prompt("Enter a Starting number"));
let b=parseInt(prompt("Enter a Ending number"));
let number1 =parseInt(prompt("Enter a table number"));
document.write("<h1>the table of "+number1+" is </h1>");
document.write("<div id='body'>");
document.write("<table border='1'>")
for(i =a; i<=b; i++){
    if(i%2 == 0){
document.write("<tr style='background-color:blue;color:white;'><td>"+number1+"</td><td>*</td><td>"+i+"</td><td>=</td><td> "+ i*number1 + "</td></tr>");
}
else{
    document.write("<tr style='background-color:red;color:white;'><td>" +number1+"</td><td>*</td><td>"+i+"</td><td>=</td><td> "+ i*number1 + "</td></tr>");  
}
};

document.write("</table>")
document.write("</div>")
// for(i =a; i<=b; i++){
//     document.getElementById(`multiplication-table`).innerHTML+= `${a} * ${b} = ${number*i}<br>`
//     };