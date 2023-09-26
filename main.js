var score=0;

function change(){
    score=score-5;
    document.getElementById("holder").textContent=score;
}
function changeimg(){
    score=score+5;
    document.getElementById("holder").textContent=score;
}
var i=0;
var txt = 'Hii Did u see the magin on clicking the image ';
var speed=50;

function text(){
    if(i < txt.length){
        document.getElementById("demo").innerHTML +=txt.charAt(i);
        i++;
        setTimeout(text , speed);
    }
}