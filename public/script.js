const element = document.querySelector('.banc');

let scrollAnimation = element.animate(
  [
    { transform: 'translateX(100%)' }, 
    { transform: 'translateX(0%)' }
  ],
  {
    duration: 2000,
    easing: 'linear'
  }
);

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
  } else if (position.value.endsWith("nothing")) {
    statistique_All.style.display = "none";
    Goalkepper_stats.style.display = "none";
  } else {
    statistique_All.style.display = "block";
    Goalkepper_stats.style.display = "none";
  }
});


AddBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (position.value.endsWith("GB")) {
   
    Goalkepper_name.textContent = name_input.value.trim();
    DIV_goal_stats.textContent = diving_stas_input.value || "0";
    KICK_goal_stats.textContent = kicking_stas_input.value || "0";
    RELF_goal_stats.textContent = reflexes_stas_input.value || "0";
    PASS_goal_stats.textContent = Passing_stas_input.value || "0";
    goalkepper_image.src = player_image_input.value;

    let goalkeeper = {
      role: "goalkeeper",
      image: player_image_input.value,
      name: name_input.value.trim(),
      diving: diving_stas_input.value || "0",
      kicking: kicking_stas_input.value || "0",
      reflexes: reflexes_stas_input.value || "0",
      passing: Passing_stas_input.value || "0",
    };

    let goalkeepers = JSON.parse(localStorage.getItem("goalkeepers")) || [];
    goalkeepers.push(goalkeeper);
    localStorage.setItem("goalkeepers", JSON.stringify(goalkeepers));

  } else if (!position.value.endsWith("nothing")) {
    let className = position.value;
    let playerElement = document.querySelector(`.${className}`);
    const playerName = playerElement.querySelector("#PlayerName");

    if (playerName.textContent !== "") {
      // create  banc carte
      const bancSection = document.querySelector('.banc');
      const newPlayerCard = document.createElement('div');
      newPlayerCard.className = 'player flex flex-col justify-center';
      newPlayerCard.innerHTML = `
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_ballon_dor.webp');">
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player_image_input.value}">
          </div>
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1">
            ${name_input.value.trim()}
          </div>
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
              <div>
                <span class="text-yellow-400">${document.querySelector("#Physique").value || "?"}</span>
                <span style="font-size: 8px;">PHY</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${document.querySelector("#Shoting").value || "?"}</span>
                <span style="font-size: 8px;">SHO</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${document.querySelector("#Passing").value || "?"}</span>
                <span style="font-size: 8px;">PAS</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${document.querySelector("#Dribbling").value || "?"}</span>
                <span style="font-size: 8px;">DRI</span>
              </div>
            </div>
          </div>
        </div>
      `;
      bancSection.appendChild(newPlayerCard);

      // add banc player to localestorage
      const benchPlayer = {
        role: "bench",
        image: player_image_input.value,
        name: name_input.value.trim(),
        physique: document.querySelector("#Physique").value || "0",
        shooting: document.querySelector("#Shoting").value || "0",
        dribbling: document.querySelector("#Dribbling").value || "0",
        passing: document.querySelector("#Passing").value || "0"
      };

      let benchPlayers = JSON.parse(localStorage.getItem("benchPlayers")) || [];
      benchPlayers.push(benchPlayer);
      localStorage.setItem("benchPlayers", JSON.stringify(benchPlayers));

    } else{
      // c-a-d le joueur n existe pas khaso itzad l tchkila
      playerName.textContent = name_input.value.trim();
      const playerImage = playerElement.querySelector('img');
      playerImage.src = player_image_input.value;

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

      let playersArray = JSON.parse(localStorage.getItem("players")) || [];
      playersArray.push(player);
      localStorage.setItem("players", JSON.stringify(playersArray));
    }
  }


  document.querySelector("#playerForm").reset();
  statistique_All.style.display = "none";
  Goalkepper_stats.style.display = "none";
});


window.addEventListener("load", () => {
  // loading des joueurs principaux
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
  }

  // loading du gardien
  const goalkeepers = JSON.parse(localStorage.getItem("goalkeepers")) || [];
  if (goalkeepers.length > 0) {
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

  // loading des joueurs du banc
  const benchPlayers = JSON.parse(localStorage.getItem("benchPlayers")) || [];
  const bancSection = document.querySelector('.banc');
  
  benchPlayers.forEach(player => {
    const newPlayer = document.createElement('div');
    newPlayer.className = 'player flex flex-col justify-center';
    newPlayer.innerHTML = `
      <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_ballon_dor.webp');">
        <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="flex justify-center mt-6">
          <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player.image}">
        </div>
        <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1">
          ${player.name}
        </div>
        <div class="absolute bottom-6 w-full px-3">
          <div class="grid grid-cols-2 text-center text-xs font-bold">
            <div>
              <span class="text-yellow-400">${player.physique}</span>
              <span style="font-size: 8px;">PHY</span>
            </div>
            <div>
              <span class="text-yellow-400" style="font-size: 10px;">${player.shooting}</span>
              <span style="font-size: 8px;">SHO</span>
            </div>
            <div>
              <span class="text-yellow-400" style="font-size: 10px;">${player.passing}</span>
              <span style="font-size: 8px;">PAS</span>
            </div>
            <div>
              <span class="text-yellow-400" style="font-size: 10px;">${player.dribbling}</span>
              <span style="font-size: 8px;">DRI</span>
            </div>
          </div>
        </div>
      </div>
    `;
    bancSection.appendChild(newPlayer);
  });
});

// Gestion des boutons de suppression
document.addEventListener('click', function(e) {
  
  if (e.target.closest('.delete-btn')) {
    const btn = e.target.closest('.delete-btn');
    const card = btn.closest('.player');
    const playerPosition = card.classList[0];
    
    const playerImage = card.querySelector("img");
    const playerName = card.querySelector("#PlayerName") || card.querySelector("#Goalkepper_name");
    
    if (playerPosition === 'GB') {
      // Réinitialisation des stats du gardien
      card.querySelector(".DIV_goal").textContent = "?";
      card.querySelector(".KICK_goal").textContent = "?";
      card.querySelector(".RELF_goal").textContent = "?";
      card.querySelector(".PASS_goal").textContent = "?";
    } else {
      // Réinitialisation des stats des joueurs
      const stats = card.querySelectorAll(".PHY_PLYER_STAS, .SHO_PLYER_STAS, .PAS_PLYER_STAS, .DRI_PLYER_STAS");
      stats.forEach(stat => stat.textContent = "?");
    }
    
    if (playerName) playerName.textContent = "";
    if (playerImage) playerImage.src = "../images/inconnue.png";
    
    // Si c'est un joueur du banc, supprimer la carte
    if (card.closest('.banc')) {
      card.remove();
      // Mettre à jour localStorage
      const benchPlayers = JSON.parse(localStorage.getItem("benchPlayers")) || [];
      const updatedBenchPlayers = benchPlayers.filter(player => player.name !== playerName.textContent);
      localStorage.setItem("benchPlayers", JSON.stringify(updatedBenchPlayers));
    }
  }
});