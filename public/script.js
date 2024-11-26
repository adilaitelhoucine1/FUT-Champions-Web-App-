const element = document.querySelector('.banc');

let scrollAnimation=element.animate(
  [
    { 
        transform: 'translateX(100%)' 
    }, 
    { 
        transform: 'translateX(0%)' 
    } 
  ],

  {
    duration: 30000, 
    iterations: Infinity,
    easing: 'linear' 
  }
);
element.addEventListener('mouseenter', () => {
  scrollAnimation.pause();
});

element.addEventListener('mouseleave', () => {
  scrollAnimation.play();
});



let position = document.querySelector("#position");
let statistique_All = document.querySelector(".statistique-All");
let Goalkepper_stats = document.querySelector(".Goalkepper_stats");
let Goalkepper_name = document.querySelector("#Goalkepper_name");
let name_input = document.querySelector("#name");
let AddBtn = document.querySelector(".add-btn");
let diving_stas_input = document.querySelector("#diving");
let kicking_stas_input = document.querySelector("#kicking");
let reflexes_stas_input = document.querySelector("#reflexes");
let Passing_stas_input = document.querySelector("#Passing-goal");
let goalkepper_image = document.querySelector(".goalkepper-image");
let player_image_input = document.querySelector("#image-player");

let DIV_goal_stats = document.querySelector(".DIV_goal");
let KICK_goal_stats = document.querySelector(".KICK_goal");
let RELF_goal_stats = document.querySelector(".RELF_goal");
let PASS_goal_stats = document.querySelector(".PASS_goal");





position.addEventListener("change", () => {
  


  
  if (position.value.endsWith("GB")) {
    statistique_All.style.display = "none";
    Goalkepper_stats.style.display = "block";

    AddBtn.addEventListener("click", (e) => {
      e.preventDefault(); 
      let goalkeepers_local = JSON.parse(localStorage.getItem("goalkeepers"));
     
      
    //   if(goalkeepers_local.length > 1){
 
    // let test=document.querySelector(".test").textContent;
    //     test=name_input.value.trim();
    //   }else{ 
                Goalkepper_name.textContent = name_input.value.trim();
                DIV_goal_stats.textContent = diving_stas_input.value || "0";
                KICK_goal_stats.textContent = kicking_stas_input.value || "0";
                RELF_goal_stats.textContent = reflexes_stas_input.value || "0";
                PASS_goal_stats.textContent = Passing_stas_input.value || "0";
                goalkepper_image.src=player_image_input.value;
          
              
                let goalkeeper = {
                  role:"goalkeeper",
                  image:player_image_input.value,
                  name: name_input.value.trim(),
                  diving: diving_stas_input.value || "0",
                  kicking: kicking_stas_input.value || "0",
                  reflexes: reflexes_stas_input.value || "0",
                  passing: Passing_stas_input.value || "0",
                };
          
                
                let goalkeepers = JSON.parse(localStorage.getItem("goalkeepers")) || [];
                goalkeepers.push(goalkeeper);
          
            
                localStorage.setItem("goalkeepers", JSON.stringify(goalkeepers));
      // }


    });
  } else if (position.value.endsWith("nothing")) {
    statistique_All.style.display = "none";
    Goalkepper_stats.style.display = "none";
  } else {
    statistique_All.style.display = "block";
    Goalkepper_stats.style.display = "none";
  }
});

