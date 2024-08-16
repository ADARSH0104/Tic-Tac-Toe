let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector(".reset")
let newgmbtn=document.querySelector(".newgm")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let game=document.querySelector("main")
let turnX=true;
let count=0;

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2]
];

        
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
        box.innerText="X";
        turnX=false;
        }
        else{
            box.innerText="O"
            turnX=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
  
        if(count===9 && !isWinner){
            gameDraw();
        }
        
    });
});
let gameDraw=()=>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    game.classList.add("hide")

}
let checkWinner=()=>{
for(let pattern of winPattern){
    pos1val=boxes[pattern[0]].innerText
    pos2val=boxes[pattern[1]].innerText
    pos3val=boxes[pattern[2]].innerText

if(pos1val!=="" && pos2val!=="" && pos3val!==""){
    if(pos1val===pos2val && pos2val===pos3val){
    showWinner(pos1val);
    return true;
}
}
}
}
let showWinner=(val)=>{
    for(let box of boxes){
        box.disabled=true;
    }
    msgContainer.classList.remove("hide");
    resetbtn.classList.add("hide");
    game.classList.add("hide")
    msg.innerText=`Winner is ${val}`;
};

let resetGame=()=>{
    count=0;        
    turnX=true;
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
    game.classList.remove("hide")
    msgContainer.classList.add("hide");
    resetbtn.classList.remove("hide");

};



resetbtn.addEventListener("click",resetGame);
 newgmbtn.addEventListener("click",resetGame);