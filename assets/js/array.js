let arr=["yousma","shahrukh","arwa","sufiyan","shagufta"];
// for(let i=0;i<arr.length; i++){
//     document.write(arr[i]+"<br>")
// }
let y ="";
let div = document.getElementById("array");
for (let i=0;i<arr.length;i++){
    y+="<p>"+arr[i]+"</p>";
}
div.innerHTML=y;
