
let position = document.querySelector("#position");
let statistique_All = document.querySelector(".statistique-All");
let Goalkepper_stats = document.querySelector(".Goalkepper_stats");
let  Goalkepper_name=document.querySelector("#Goalkepper_name");
let  name_input=document.querySelector("#name");
let AddBtn=document.querySelector(".add-btn");
let diving_stas_input=document.querySelector(".diving");
let kicking_stas_input=document.querySelector(".kicking");
let reflexes_stas_input=document.querySelector(".reflexes");
let Passing_stas_input=document.querySelector(".Passing");

let DIV_goal_stats=document.querySelector(".DIV_goal");
let KICK_goal_stats=document.querySelector(".KICK_goal");
let RELF_goal_stats=document.querySelector(".RELF_goal");
let PASS_goal_stats=document.querySelector(".PASS_goal");


// console.log(statistique_All);

position.addEventListener("change", () => {
  if (position.value.endsWith('GB')) {
    statistique_All.style.display = "none"; 
    Goalkepper_stats.style.display = "block"; 
    AddBtn.addEventListener('click',()=>{
      Goalkepper_name.textContent=name_input.value;
      console.log(diving_stas_input.value);
      
      // DIV_goal_stats.textContent=diving_stas_input.textContent;
      // KICK_goal_stats.textContent=kicking_stas_input.textContent;
      // RELF_goal_stats.textContent=reflexes_stas_input.textContent;
      // PASS_goal_stats.textContent=Passing_stas_input.textContent;
    })












  }else if(!((position.value.endsWith('GB')))){
    
    statistique_All.style.display = "none"; 
    Goalkepper_stats.style.display = "none";

  }else {
    console.log("Other Players Code");
    statistique_All.style.display = "block"; 
    Goalkepper_stats.style.display = "none"; 
  }
});

