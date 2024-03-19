let randomnumber=Math.floor(Math.random()*5)+1
const res=document.getElementById("res");
console.log(randomnumber)
const c=document.getElementById("count")
var count=0;
const check=document.getElementById("check")
let n1=document.getElementById("n1")
check.onclick=function function1(){
if(randomnumber==Number(n1.value)){
    res.textContent="Congratulations You Guess is correct "+Number(n1.value)
}
else if(randomnumber>Number(n1.value)){
    res.textContent="Your Guess is Low !! ";
}
else{
    res.textContent="Your Guess is high !! "
}

count+=1;
c.textContent=count;
}