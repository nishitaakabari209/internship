let boxes=document.querySelectorAll(".button");//button is buttons's class name
let resetbtn=document.querySelector("#reset");
let newBtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turn0=true;

const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const reset=()=>{
    turn0=true
    enableBox();
    msgContainer.classList.add("hide");

}
    

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const disabledBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();


}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("=================");
    if(turn0){
        box.innerText="0";
        turn0=false;
    }else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();
    })
})

const checkWinner=()=>{
    for(let pattern of winningPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner!!!!!",pos1val);
                showWinner(pos1val);
            }
        }

    }
}
newBtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);