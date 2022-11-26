const choices =['paper', 'rock', 'scissors'];
const buttons= document.querySelectorAll(".pick");
const scoreEl=document.getElementById("score");
const main=document.getElementById("main");
const section =document.getElementById("section");
const btnPlayAgin =document.getElementById("btn-playAgin");
const user_select= document.getElementById("user_select");
const computer_select= document.getElementById("computer_select");
let result=document.getElementById("result")
const btnclose = document.querySelector(".btnclose")
const rulecontainer= document.querySelector(".rule-container")
const btnRules= document.getElementById("btnRules");


let userChoice;
let score=0;
pickRandomChoice();
function pickRandomChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}


buttons.forEach((button)=>{
button.addEventListener('click',()=>{
userChoice=button.getAttribute("data-choices");
console.log(userChoice);
main.style.display="none";
section.style.display="flex";
checkWinner()
});
});

function updateScore(value){
    score+=value;
    scoreEl.innerText=score

}

function checkWinner(){
    const computerChoice=pickRandomChoice();
    updateSelection(user_select,userChoice);
    updateSelection(computer_select,computerChoice)
    if(userChoice === computerChoice){
        console.log("equal")
        result.innerText="Draw"
    }
    else if(userChoice ==="paper" && computerChoice==="rock" ||
     userChoice ==="rock" && computerChoice ==="scissors" || 
     userChoice ==='scissors' && computerChoice === "paper"){
        updateScore(1);
        console.log("com "+ computerChoice);
        console.log("user "+ userChoice)
result.innerText="Win"
     }
     else{
        updateScore(-1);
        console.log("com "+ computerChoice);
        console.log("user "+ userChoice)
        result.innerText="lost"
     }
}
btnPlayAgin.addEventListener("click",function(){
    main.style.display="flex";
section.style.display="none";
})

function updateSelection(sectionEl,choice){
    sectionEl.classList.remove("btn-paper");
    sectionEl.classList.remove("btn-scissors");
    sectionEl.classList.remove("btn-rock");
const img=sectionEl.querySelector('img');
sectionEl.classList.add(`btn-${choice}`)
img.src=`./images/icon-${choice}.svg`;
img.alt=choice;

}
btnclose.addEventListener("click", function(){
    rulecontainer.style.display="none";

 })
btnRules.addEventListener("click", function(){
    rulecontainer.style.display="flex";

})
