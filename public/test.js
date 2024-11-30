   bancplayers.forEach(player => {
      // pour afficher bancplayers  f model
      const playercard_rempl = document.createElement('div');
      playercard_rempl.className = 'bench-player-card test cursor-pointer hover:scale-105 transition-transform';
      playercard_rempl.innerHTML = `
        <div class="banc-player relative w-[130px] h-[180px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player.image}">
          </div>
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1" >${player.name}</div>
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
              <div><span class="text-yellow-400">${player.physique}</span><span style="font-size: 8px;">PHY</span></div>
              <div><span class="text-yellow-400">${player.shooting}</span><span style="font-size: 8px;">SHO</span></div>
              <div><span class="text-yellow-400">${player.passing}</span><span style="font-size: 8px;">PAS</span></div>
              <div><span class="text-yellow-400">${player.dribbling}</span><span style="font-size: 8px;">DRI</span></div>
            </div>
          </div>
        </div>
      `;
      


      playercard_rempl.addEventListener("click", () => {
        const originalPlayer = btn.closest('.player');
      
        
        if (!originalPlayer) return;
;
        const oldName = originalPlayer.querySelector("#PlayerName").textContent.trim();
        const originalImage = originalPlayer.querySelector("img").src;
        const originalPhysique = originalPlayer.querySelector(".PHY_PLYER_STAS").textContent;
        const originalShooting = originalPlayer.querySelector(".SHO_PLYER_STAS").textContent;
        const originalPassing = originalPlayer.querySelector(".PAS_PLYER_STAS").textContent;
        const originalDribbling = originalPlayer.querySelector(".DRI_PLYER_STAS").textContent;
        
        




      // console.log(oldplayer);
       


        originalPlayer.querySelector("#PlayerName").textContent = player.name;
        originalPlayer.querySelector("img").src = player.image;
        originalPlayer.querySelector(".PHY_PLYER_STAS").textContent = player.physique;
        originalPlayer.querySelector(".SHO_PLYER_STAS").textContent = player.shooting;
        originalPlayer.querySelector(".PAS_PLYER_STAS").textContent = player.passing;
        originalPlayer.querySelector(".DRI_PLYER_STAS").textContent = player.dribbling;

 

        const playerToBench = {
          role: originalPlayer.classList[0], 
          image: originalImage,
          name: oldName,
          physique: originalPhysique,
          shooting: originalShooting,
          passing: originalPassing,
          dribbling: originalDribbling
        };


        let player_replaed = JSON.parse(localStorage.getItem("bench-replaced")) || [];
        player_replaed.push(playerToBench);
        localStorage.setItem("bench-replaced", JSON.stringify(player_replaed));

     

        
        let players = JSON.parse(localStorage.getItem("players")) || [];
        const playerToUpdate = players.find(p => p.name === oldName);
        if (playerToUpdate) {
          playerToUpdate.name = player.name;
          playerToUpdate.image = player.image;
          playerToUpdate.physique = player.physique;
          playerToUpdate.shooting = player.shooting;
          playerToUpdate.passing = player.passing;
          playerToUpdate.dribbling = player.dribbling;
        }

        localStorage.setItem("players", JSON.stringify(players));

        const updatedBenchPlayers = bancplayers.filter(p => p.name !== player.name);
       
        localStorage.setItem("benchPlayers", JSON.stringify(updatedBenchPlayers));

        modal.classList.add('hidden');
        window.location.reload();
      });

      benchPlayersList.appendChild(playercard_rempl);

      
    });