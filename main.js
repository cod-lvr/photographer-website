// textwriter
var i = 0;
var txt = 'professional photographer for creative industries';
var time = 100;

function typeWriter(){
    if(i < txt.length){
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, time);
    }
}
typeWriter();