// My code cannot have type="module" in the html script tag, where Bootstrap seems to require it.
var a;
function cardDescription1(){
    if(a==1){
        document.getElementById("card1").style.display="none";
        return a=0;
    }
    else {
        document.getElementById("card1").style.display="block";
        return a=1;
    }
}


var b;
function cardDescription2(){
    if(b==1){
        document.getElementById("card2").style.display="none";
        return b=0;
    }
    else {
        document.getElementById("card2").style.display="block";
        return b=1;
    }
}

var c;
function cardDescription3(){
    if(c==1){
        document.getElementById("card3").style.display="none";
        return c=0;
    }
    else {
        document.getElementById("card3").style.display="block";
        return c=1;
    }
}

var d;
function cardDescription4(){
    if(d==1){
        document.getElementById("card4").style.display="none";
        return d=0;
    }
    else {
        document.getElementById("card4").style.display="block";
        return d=1;
    }
}

var e;
function cardDescription5(){
    if(e==1){
        document.getElementById("card5").style.display="none";
        return e=0;
    }
    else {
        document.getElementById("card5").style.display="block";
        return e=1;
    }
}