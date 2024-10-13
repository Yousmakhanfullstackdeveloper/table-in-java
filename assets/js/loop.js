let i =5;
let y="";
while(i<=25){
    y+="<p style=`font-size: "+i+" px`>  "+i+" </p>";
    i++;

}
document.getElementById("print").innerHTML=y