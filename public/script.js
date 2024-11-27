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
    duration: 2000, 
   // iterations: Infinity,
    easing: 'linear' 
  }
);
// element.addEventListener('mouseenter', () => {
//   scrollAnimation.pause();
// });

// element.addEventListener('mouseleave', () => {
//   scrollAnimation.play();
// });



let position = document.querySelector("#position");
let statistique_All = document.querySelector(".statistique-All");
let Goalkepper_stats = document.querySelector(".Goalkepper_stats");
let Goalkepper_name = document.querySelector("#Goalkepper_name");
//let playerName=document.querySelector("#PlayerName");
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

//------------------------------------------------------------
// let PHY_PLYER_STAS = document.querySelector(".PHY_PLYER_STAS");
// let SHO_PLYER_STAS = document.querySelector(".SHO_PLYER_STAS");
// let PAS_PLYER_STAS = document.querySelector(".PAS_PLYER_STAS");
// let DRI_PLYER_STAS = document.querySelector(".DRI_PLYER_STAS");




position.addEventListener("change", () => {
  

  
  
  if (position.value.endsWith("GB")) {
    statistique_All.style.display = "none";
    Goalkepper_stats.style.display = "block";

    AddBtn.addEventListener("click", (e) => {
      e.preventDefault(); 
      //let goalkeepers_local = JSON.parse(localStorage.getItem("goalkeepers"));
     
      
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

      document.querySelector("#playerForm").reset();
      statistique_All.style.display = "none";
      Goalkepper_stats.style.display = "none";
    });
  } else if (position.value.endsWith("nothing")) {
    statistique_All.style.display = "none";
    Goalkepper_stats.style.display = "none";
  } else {
    statistique_All.style.display = "block";
    Goalkepper_stats.style.display = "none";
   
  AddBtn.addEventListener("click",(e)=>{
      e.preventDefault();

      let className = position.value; 
      let playerElement = document.querySelector(`.${className}`);
      

          
      const playerName= playerElement.querySelector("#PlayerName");

      // pour verifier si deja le poste est plien ou pas si non stocke le dans le banc
     if(playerName.textContent != ''){
      playerName.textContent = name_input.value.trim();
       
 
      const playerImage = playerElement.querySelector('img');
      playerImage.src = player_image_input.value;

      //const stats = playerElement.querySelectorAll('.text-yellow-400');
      playerElement.querySelector(".PHY_PLYER_STAS").textContent = document.querySelector("#Physique").value || "0";
      playerElement.querySelector(".SHO_PLYER_STAS").textContent = document.querySelector("#Shoting").value || "0";
      playerElement.querySelector(".PAS_PLYER_STAS").textContent = document.querySelector("#Passing").value || "0";
      playerElement.querySelector(".DRI_PLYER_STAS").textContent = document.querySelector("#Dribbling").value || "0";
      
     
      const player = {
        role: position.value,
        image: player_image_input.value,
        name: name_input.value.trim(),
        physique: document.querySelector("#Physique").value || "0",
        shooting: document.querySelector("#Shoting").value || "0",
        dribbling: document.querySelector("#Dribbling").value || "0",
        passing: document.querySelector("#Passing").value || "0"
      };
      
       



        let playersArray = JSON.parse(localStorage.getItem("players"));
        
        
     
        if (!Array.isArray(playersArray)) {
            playersArray = [];
        }

      //   let roles=[];
      //     playersArray.forEach(player=>{
          
      //      roles.push(player.role) ;
            
      //     })
      //  console.log(roles);
       
        playersArray.push(player);

     
        localStorage.setItem("players", JSON.stringify(playersArray));

      document.querySelector("#playerForm").reset();
      statistique_All.style.display = "none";
      Goalkepper_stats.style.display = "none";
     }else{
      console.log(playerElement);
     }
     
        
  });
 
  }
});


window.addEventListener("load", () => {

  // afficher players
  const players = JSON.parse(localStorage.getItem("players"));
  if (players && players.length > 0) {
    players.forEach(player => {
      const playerElement = document.querySelector(`.${player.role}`);
      if (playerElement) { 
        const playerImage = playerElement.querySelector('img');
        playerImage.src = player.image;
        
        const playerName = playerElement.querySelector('#PlayerName');
        playerName.textContent = player.name;
        
        playerElement.querySelector(".PHY_PLYER_STAS").textContent = player.physique;
        playerElement.querySelector(".SHO_PLYER_STAS").textContent = player.shooting;
        playerElement.querySelector(".PAS_PLYER_STAS").textContent = player.passing;
        playerElement.querySelector(".DRI_PLYER_STAS").textContent = player.dribbling;
      }
    });
  } else {
   // console.log("walo awdyan g tighmrt tkh");
  }
  
  // afficher goalkeeper
  const goalkeepers = JSON.parse(localStorage.getItem("goalkeepers")) || [];
  if (goalkeepers.length > 0) {
      // pour afficher le dernier goalkepper
      const goalkeeper = goalkeepers[goalkeepers.length - 1];
      const gbElement = document.querySelector('.GB');
      
      
          
          const goalieImage = gbElement.querySelector('.goalkepper-image');
          goalieImage.src = goalkeeper.image;
          
        
          const goalieName = gbElement.querySelector('#Goalkepper_name');
          goalieName.textContent = goalkeeper.name;
          
          
          gbElement.querySelector(".DIV_goal").textContent = goalkeeper.diving;
          gbElement.querySelector(".KICK_goal").textContent = goalkeeper.kicking;
          gbElement.querySelector(".RELF_goal").textContent = goalkeeper.reflexes;
          gbElement.querySelector(".PASS_goal").textContent = goalkeeper.passing;

         

  }
});

let delete_btn=document.querySelectorAll(".delete-btn");

delete_btn.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    
    let card=btn.parentElement;
    let playerPosition = card.classList[0]; 
    let Playeimage=card.querySelector("img");
    let playerName=card.querySelector("#PlayerName");
    let PHY_PLYER_STAS = card.querySelector(".PHY_PLYER_STAS");
    let SHO_PLYER_STAS = card.querySelector(".SHO_PLYER_STAS");
    let PAS_PLYER_STAS = card.querySelector(".PAS_PLYER_STAS");
    let DRI_PLYER_STAS = card.querySelector(".DRI_PLYER_STAS");
    PHY_PLYER_STAS.textContent="?"
    SHO_PLYER_STAS.textContent="?"
    PAS_PLYER_STAS.textContent="?"
    DRI_PLYER_STAS.textContent="?"

    playerName.textContent="";
    Playeimage.src="../images/inconnue.png"

    // let players = JSON.parse(localStorage.getItem('players') || '{}');
    // delete players[playerPosition];
    // localStorage.setItem('players', JSON.stringify(players));
     
     
  })
  
})

// delete_btn.addEventListener("click",()=>{
//     console.log("test ");
// })



// Add delete functionality
// document.addEventListener('click', (e) => {
//   if (e.target.closest('.delete-btn')) {
//       const playerCard = e.target.closest('.player');
//       const position = playerCard.classList[0]; // Get position class (LW, ST, etc.)
      
//       if (position === 'GB') {
//           // Clear goalkeeper from storage
//           localStorage.removeItem('goalkeepers');
//       } else {
//           // Remove player from players array
//           const players = JSON.parse(localStorage.getItem('players')) || [];
//           const updatedPlayers = players.filter(player => player.role !== position);
//           localStorage.setItem('players', JSON.stringify(updatedPlayers));
//       }
      
//       // Reset the player card
//       const playerImage = playerCard.querySelector('img');
//       const playerName = playerCard.querySelector('#PlayerName, #Goalkepper_name');
//       playerImage.src = '';
//       playerName.textContent = '';
      
//       // Reset stats
//       const stats = playerCard.querySelectorAll('.text-yellow-400');
//       stats.forEach(stat => stat.textContent = '?');
//   }
// });
