
// Simon game
let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"]

let started =false;
let level=0;

let h2 = document.querySelector("h2");
let h3 = document.createElement("h3");
let heigestScore=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);    
}
 
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);    
}

function levelUp(){
    userSeq=[];
    level++;
    if(heigestScore<level){
        heigestScore=level;
        h3.innerText=`heigest score is ${heigestScore}`
    }
    h2.innerText=`level ${level}`

    let ranIdx = Math.floor(Math.random()*3)
    let randColor=btns[ranIdx];
    let ranBtn = document.querySelector(`.${randColor}`);
    // console.log(ranIdx);
    // console.log(randColor);
    // console.log(ranBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000)
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },150)

       
        reset();
    }
}


function btnPress(){
    if(started==true){
           let btn = this;
        userFlash(btn);
    
        userColor=btn.getAttribute("id");
        userSeq.push(userColor);

        checkAns(userSeq.length-1); 
    }


}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

// HW problem question ---> track heigest score and print it constantly
h3.innerText=`heigest score is ${heigestScore}`
h2.insertAdjacentElement("afterend",h3)