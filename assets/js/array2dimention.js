// let arr=["yousma","shahrukh","arwa","sufiyan","shagufta"];
let studentDetail =[
    ['yousmakhan',19,"web designing","yousmakhan@gmail.com"],
    ['arwahassan',19,"web designing","arwahassan@gmail.com"],
    ['sufiyankhan',12,"web designing","sufiyankhan@gmail.com"],
    ['salmahussain',30,"web designing","salmahussain@gmail.com"],
    ['fakiha',10,"web designing","fakiha@gmail.com"],
]
document.write("<div id='body'>");
document.write("<table border='1'>")
// for(let i=0;i<arr.length; i++){
//     document.write(arr[i]+"<br>")
// }
// let y ="";
// let div = document.getElementById("array");
// for (let i=0;i<arr.length;i++){
//     y+="<p>"+arr[i]+"</p>";
// }
// div.innerHTML=y;
for(let i=0;i<studentDetail.length;i++){
    document.write("<br></br>")
    for(let j=0;j<studentDetail[i].length;j++){
        document.write(studentDetail[i][j]+"&nbsp;&nbsp;")
    }
    if(studentDetail[i]%2 === 0){
        document.write("<tr style='background-color:blue;color:white;'><td>"+studentDetail.length[i]+"</td><td></td><td>"+i+"</td><td></td><td> "+ studentDetail.length[i]+ "</td></tr>");
        }
}
document.write("</table>")
document.write("</div>")