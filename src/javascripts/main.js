var a;
var b;
var c;
var d;
var e;

document.getElementById("details1").addEventListener('click', function() {
    if(a==1){
        document.getElementById("card1").style.display="none";
        return a=0;
    }
    else {
        document.getElementById("card1").style.display="block";
        return a=1;
    }
});

document.getElementById("details2").addEventListener('click', function() {
    if(b==1){
        document.getElementById("card2").style.display="none";
        return b=0;
    }
    else {
        document.getElementById("card2").style.display="block";
        return b=1;
    }
});

document.getElementById("details3").addEventListener('click', function() {
    if(c==1){
        document.getElementById("card3").style.display="none";
        return c=0;
    }
    else {
        document.getElementById("card3").style.display="block";
        return c=1;
    }
});

document.getElementById("details4").addEventListener('click', function() {
    if(d==1){
        document.getElementById("card4").style.display="none";
        return d=0;
    }
    else {
        document.getElementById("card4").style.display="block";
        return d=1;
    }
});

document.getElementById("details5").addEventListener('click', function() {
    if(e==1){
        document.getElementById("card5").style.display="none";
        return e=0;
    }
    else {
        document.getElementById("card5").style.display="block";
        return e=1;
    }
});

import "bootstrap";