let count = 0;

document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML=count;

}
document.getElementById("reset").onclick = function(){
    count=0;
    
    document.getElementById("countLabel").innerHTML=count;
    
}
document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML=count;
    
}