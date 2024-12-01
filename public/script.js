const element = document.querySelector('.banc');

let scrollAnimation = element.animate(
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
    easing: 'linear'
  }
);
let  formation_4_3_3=`
    
<!-- Attaques -->
<div class="flex justify-center gap-4 flex-wrap Attaques">
    <!-- LW-player -->
    <div class="LW player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition" >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>

          <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>


          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
           
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400 " style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>

    <!-- ST-player -->
    <div class="ST player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition" >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
            
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>

    <!-- RW-player -->
    <div class="RW player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
            
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>
</div>

<!-- Midfielders -->
<div class="flex justify-center gap-4 flex-wrap Midfielders">
    <!-- CAM-player -->
    <div class="CAM player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
           
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>

    <!-- CM-player -->
    <div class="CM player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
             <!-- update Button -->
          </button>
           <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
            </svg>
            
          </button>
            <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
            
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>

    <!-- CDM-player -->
    <div class="CDM player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
           
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>
</div>

<!-- Defenders -->
<div class="flex justify-center gap-4">
    <!-- LB-player -->
    <div class="LB player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
            
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>

    <!-- CB-5-player -->
    <div class="CB-5 player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
            
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>

    <!-- CB-4-player -->
    <div class="CB-4 player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
            
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class=" PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>

    <!-- RB-player -->
    <div class="RB player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
          
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                    <span style="font-size: 8px;">PHY</span>
                </div>
                <div>
                    <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">SHO</span>
                </div>
                <div>
                    <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PAS</span>
                </div>
                <div>
                    <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">DRI</span>
                </div>
            </div>
        </div>
        </div>
      </div>
</div>

<!-- Goalkeeper -->
<div class="flex justify-center gap-4 flex-wrap">
    <!-- GOALKEEPER-player -->
    <div class="GB player flex flex-col justify-center">
        <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
          <!-- Delete Button -->
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           <!-- update Button -->
          </button>
          <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
           </svg>
           
         </button>
           <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
          <!-- Player Icon -->
          <div class="flex justify-center mt-6">
            <img class="goalkepper-image w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
          </div>
          <!-- Player Name -->
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="Goalkepper_name">
          
          </div>
          <!-- Player Statistics -->
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
                <div>
                  
                    <span class="text-yellow-400 DIV_goal">?</span>
                    <span style="font-size: 8px;">DIV</span>
                </div>
                <div>
                    <span class="text-yellow-400 KICK_goal" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">KICK</span>
                </div>
                <div>
                    <span class="text-yellow-400 RELF_goal" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">RELF</span>
                </div>
                <div>
                    <span class="text-yellow-400 PASS_goal" style="font-size: 10px;">?</span>
                    <span style="font-size: 8px;">PASS</span>
                </div>
            </div>
        </div>
        </div>
      </div>
</div>

`
let formation_4_4_2=`
    <!-- Attaques -->
<div class="flex justify-center gap-20 flex-wrap">
 <!-- LW-player -->
 <div class="LW player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition" >
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>
       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
        
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400 " style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>

 <!-- ST-player -->
 <div class="ST player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition" >
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>
       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
         
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>


</div>

<!-- Midfielders -->
<div class="flex justify-center gap-4 flex-wrap">
 <!-- CAM-player -->
 <div class="CAM player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>
       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
        
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>

 <!-- CM-player -->
 <div class="CM player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
          <!-- update Button -->
       </button>
        <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
           <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
         </svg>
         
       </button>
         <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
         
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>

 <!-- CDM-player -->
 <div class="CDM player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>
       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
        
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>

    <!-- RW-player -->
 <div class="RW player flex flex-col justify-center">
   <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
     <!-- Delete Button -->
     <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
       <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
       </svg>
     </button>
      <!-- update Button -->
     </button>
     <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
      </svg>
      
    </button>
      <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
     <!-- Player Icon -->
     <div class="flex justify-center mt-6">
       <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
     </div>
     <!-- Player Name -->
     <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
       
     </div>
     <!-- Player Statistics -->
     <div class="absolute bottom-6 w-full px-3">
       <div class="grid grid-cols-2 text-center text-xs font-bold">
           <div>
             
               <span class="PHY_PLYER_STAS text-yellow-400">?</span>
               <span style="font-size: 8px;">PHY</span>
           </div>
           <div>
               <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
               <span style="font-size: 8px;">SHO</span>
           </div>
           <div>
               <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
               <span style="font-size: 8px;">PAS</span>
           </div>
           <div>
               <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
               <span style="font-size: 8px;">DRI</span>
           </div>
       </div>
   </div>
   </div>
 </div>
</div>

<!-- Defenders -->
<div class="flex justify-center gap-4">
 <!-- LB-player -->
 <div class="LB player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>

       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
         
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>

 <!-- CB-5-player -->
 <div class="CB-5 player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>
       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
         
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>

 <!-- CB-4-player -->
 <div class="CB-4 player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>
       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
         
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class=" PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>

 <!-- RB-player -->
 <div class="RB player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>
       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="PlayerName">
       
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="PHY_PLYER_STAS text-yellow-400">?</span>
                 <span style="font-size: 8px;">PHY</span>
             </div>
             <div>
                 <span class="SHO_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">SHO</span>
             </div>
             <div>
                 <span class="PAS_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PAS</span>
             </div>
             <div>
                 <span class="DRI_PLYER_STAS text-yellow-400" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">DRI</span>
             </div>
         </div>
     </div>
     </div>
   </div>
</div>

<!-- Goalkeeper -->
<div class="flex justify-center gap-4 flex-wrap">
 <!-- GOALKEEPER-player -->
 <div class="GB player flex flex-col justify-center">
     <div class="relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
       <!-- Delete Button -->
       <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
        <!-- update Button -->
       </button>
       <button class="replace-btn absolute top-2 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-slate-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9a9 9 0 0 1 14 0l-3 3M19 15a9 9 0 0 1-14 0l3-3" />
        </svg>
        
      </button>
        <!-- New Modify Button -->
            <button class="modify-btn absolute top-0 left-14 bg-transparent text-black text-center   bg-blue-300  rounded-full p-1 hover:bg-yellow-600 transition max-sm:left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.121-2.121L9 15.414V17h1.586l7.536-7.536m-2.121-2.121L17 6.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-1.293 1.293" />
                     </svg>

            </button>
       <!-- Player Icon -->
       <div class="flex justify-center mt-6">
         <img class="goalkepper-image w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="../images/inconnue.png">
       </div>
       <!-- Player Name -->
       <div class="absolute bottom-[50px] w-full text-center font-bold text-base	 text-white pb-1" id="Goalkepper_name">
       
       </div>
       <!-- Player Statistics -->
       <div class="absolute bottom-6 w-full px-3">
         <div class="grid grid-cols-2 text-center text-xs font-bold">
             <div>
               
                 <span class="text-yellow-400 DIV_goal">?</span>
                 <span style="font-size: 8px;">DIV</span>
             </div>
             <div>
                 <span class="text-yellow-400 KICK_goal" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">KICK</span>
             </div>
             <div>
                 <span class="text-yellow-400 RELF_goal" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">RELF</span>
             </div>
             <div>
                 <span class="text-yellow-400 PASS_goal" style="font-size: 10px;">?</span>
                 <span style="font-size: 8px;">PASS</span>
             </div>
         </div>
     </div>
     </div>
   </div>
</div>
 `
     
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

let delete_btn=document.querySelectorAll(".delete-btn");

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

const bancSection = document.querySelector('.banc');

AddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let goalkeepers = JSON.parse(localStorage.getItem("goalkeepers")) || [];

  if (position.value.endsWith("GB") ) {
    
    //console.log(Goalkepper_name);
    
          if(goalkeepers.length > 0){

            const newPlayerCard = document.createElement('div');
            newPlayerCard.className = 'player flex flex-col justify-center';
            newPlayerCard.innerHTML = `
              <div class="banc-player  relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_ballon_dor.webp');">
                <button class="delete-btn btn-test absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div class="flex justify-center mt-6">
                  <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player_image_input.value}">
                </div>
                <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1" id="PlayerName">
                  ${name_input.value.trim()} 
                </div>
                <div class="absolute bottom-6 w-full px-3">
                  <div class="grid grid-cols-2 text-center text-xs font-bold">
                    <div>
                      <span class="text-yellow-400">${diving_stas_input.value || "0"}</span>
                      <span style="font-size: 8px;">DIV</span>
                    </div>
                    <div>
                      <span class="text-yellow-400" style="font-size: 10px;">${kicking_stas_input.value || "0"}</span>
                      <span style="font-size: 8px;">KICK</span>
                    </div>
                    <div>
                      <span class="text-yellow-400" style="font-size: 10px;">${reflexes_stas_input.value || "0"}</span>
                      <span style="font-size: 8px;">RELF</span>
                    </div>
                    <div>
                      <span class="text-yellow-400" style="font-size: 10px;">${Passing_stas_input.value || "0"}</span>
                      <span style="font-size: 8px;">PASS</span>
                    </div>
                  </div>
                </div>
              </div>
            `;
            bancSection.appendChild(newPlayerCard);
      
            // add banc player to localestorage
            const benchPlayer = {
              role: "bench-goalkepper",
              image: player_image_input.value,
              name: name_input.value.trim(),
              physique: Passing_stas_input.value || "0",
              shooting: kicking_stas_input.value || "0",
              dribbling: reflexes_stas_input.value || "0",
              passing: Passing_stas_input.value || "0"
            };
      
            let benchPlayers = JSON.parse(localStorage.getItem("benchPlayers")) || [];
            benchPlayers.push(benchPlayer);
            localStorage.setItem("benchPlayers", JSON.stringify(benchPlayers));
      
            
          }else if(Goalkepper_name.textContent && Goalkepper_name.textContent.trim() === "" && goalkeepers.length == 0){
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
        
          
            goalkeepers.push(goalkeeper);
            localStorage.setItem("goalkeepers", JSON.stringify(goalkeepers));
          }


  } else if (!position.value.endsWith("nothing")) {
    
    let className = position.value;
    let playerElement = document.querySelector(`.${className}`);
    const playerName = playerElement.querySelector("#PlayerName");

    if (playerName.textContent && playerName.textContent.trim() !== "") {
      // create  banc carte

      const newPlayerCard = document.createElement('div');
      newPlayerCard.className = 'player flex flex-col justify-center';
      newPlayerCard.innerHTML = `
        <div class="banc-player  relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_ballon_dor.webp');">
          <button class="delete-btn btn-test absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player_image_input.value}">
          </div>
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1" id="PlayerName">
            ${name_input.value.trim()}
          </div>
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
              <div>
                <span class="text-yellow-400">${document.querySelector("#Physique").value || "0"}</span>
                <span style="font-size: 8px;">PHY</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${document.querySelector("#Shoting").value || "0"}</span>
                <span style="font-size: 8px;">SHO</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${document.querySelector("#Passing").value || "0"}</span>
                <span style="font-size: 8px;">PAS</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${document.querySelector("#Dribbling").value || "0"}</span>
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
        post:position.value,
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
  window.location.reload();
});


window.addEventListener("load", () => {
  //console.log(repmlacer_btn[0].parentElement);
  
  formation_select.value=localStorage.getItem("formation");


  const formation = localStorage.getItem("formation");
  if (formation == '4-3-3'){
    formation_container.innerHTML=formation_4_3_3;
  }else if(formation == '4-4-2'){
    formation_container.innerHTML=formation_4_4_2;
  }


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
  let benchPlayers = JSON.parse(localStorage.getItem("benchPlayers")) || [];
  let benchPlayers_replaced = JSON.parse(localStorage.getItem("bench-replaced")) || [];
  const bancSection = document.querySelector('.banc');
  
  benchPlayers= benchPlayers.concat(benchPlayers_replaced);


  
  benchPlayers.forEach(player => {
    const newPlayer = document.createElement('div');
    newPlayer.className = 'player flex flex-col justify-center';
    if(player.role === 'bench'){

      newPlayer.innerHTML = `
        <div class="banc-player relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_ballon_dor.webp');">
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player.image}">
          </div>
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1" >
           <span id="PlayerName"> ${player.name} </span> <span class="text-cyan-400" style="font-size: 8px;"> ${player.post}</span>
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
      // met a jour carte en cas de goalkepper
    } else if(player.role === 'bench-goalkepper'){
      newPlayer.innerHTML = `
        <div class="banc-player relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_ballon_dor.webp');">
          <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex justify-center mt-6">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player.image}">
          </div>
          <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1" >
            <span id="PlayerName"> ${player.name} </span> <span class="text-green-500" style="font-size: 8px;">(GB)</span>
          </div>
          <div class="absolute bottom-6 w-full px-3">
            <div class="grid grid-cols-2 text-center text-xs font-bold">
              <div>
                <span class="text-yellow-400">${player.physique}</span>
                <span style="font-size: 8px;">DIV</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${player.shooting}</span>
                <span style="font-size: 8px;">KICK</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${player.passing}</span>
                <span style="font-size: 8px;">RELF</span>
              </div>
              <div>
                <span class="text-yellow-400" style="font-size: 10px;">${player.dribbling}</span>
                <span style="font-size: 8px;">PASS</span>
              </div>
            </div>
          </div>
        </div>
      `;

      bancSection.appendChild(newPlayer);

    }else{

      newPlayer.innerHTML = `
      <div class="banc-player relative w-[130px] h-[180px] max-sm:w-[100px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_ballon_dor.webp');">
        <button class="delete-btn absolute top-2 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="flex justify-center mt-6">
          <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player.image}">
        </div>
        <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1" >
          <span id="PlayerName"> ${player.name} </span> <span class="text-green-500" style="font-size: 8px;">(Replaced)</span>
        </div>
        <div class="absolute bottom-6 w-full px-3">
          <div class="grid grid-cols-2 text-center text-xs font-bold">
            <div>
              <span class="text-yellow-400">${player.physique}</span>
              <span style="font-size: 8px;">DIV</span>
            </div>
            <div>
              <span class="text-yellow-400" style="font-size: 10px;">${player.shooting}</span>
              <span style="font-size: 8px;">KICK</span>
            </div>
            <div>
              <span class="text-yellow-400" style="font-size: 10px;">${player.passing}</span>
              <span style="font-size: 8px;">RELF</span>
            </div>
            <div>
              <span class="text-yellow-400" style="font-size: 10px;">${player.dribbling}</span>
              <span style="font-size: 8px;">PASS</span>
            </div>
          </div>
        </div>
      </div>
    `;

    bancSection.appendChild(newPlayer);


    }
  });



});

// btn DELETE / REMPLACE 
const deleteButtons = document.querySelectorAll('.delete-btn, .banc .delete-btn');

let repmlacer_btn = document.querySelectorAll(".replace-btn");
let alert_suppression=document.querySelector("#alert-suppression");
let modal_modif=document.querySelector("#editModal")
document.addEventListener('click', function(e) {
  //console.log(e.target);
  if (e.target.closest('.delete-btn')) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce joueur ?") == true) {
      alert_suppression.style.display='block'
      const btn = e.target.closest('.delete-btn');
      const card = btn.closest('.player');
      const playerPosition = card.classList[0];
      const playerImage = card.querySelector("img");
      const playerName = card.querySelector("#PlayerName") || card.querySelector("#Goalkepper_name");
      
      if (card.closest('.banc')) {
        const playerNameText = playerName.textContent.trim();
        let benchPlayers = JSON.parse(localStorage.getItem("benchPlayers")) || [];
        const updatedBenchPlayers = benchPlayers.filter(player => player.name !== playerNameText);
        localStorage.setItem("benchPlayers", JSON.stringify(updatedBenchPlayers));
  
        let benchPlayers_replaed = JSON.parse(localStorage.getItem("bench-replaced")) || [];
        const updatedBenchPlayers_replaced = benchPlayers_replaed.filter(player => player.name !== playerNameText);
        localStorage.setItem("bench-replaced", JSON.stringify(updatedBenchPlayers_replaced));
        
        card.remove();
      } else if (playerPosition === 'GB') {
        const goalieNameText = playerName.textContent.trim();
        
        playerName.textContent = "";
        playerImage.src = "../images/inconnue.png";
        card.querySelector(".DIV_goal").textContent = "?";
        card.querySelector(".RELF_goal").textContent = "?";
        card.querySelector(".PASS_goal").textContent = "?";
        card.querySelector(".KICK_goal").textContent = "?";
  
        let goalkeepers = JSON.parse(localStorage.getItem("goalkeepers")) || [];
        const updatedGoalkeepers = goalkeepers.filter(player => player.name !== goalieNameText);
        localStorage.setItem("goalkeepers", JSON.stringify(updatedGoalkeepers));
      } else {
        const playerNameText = playerName.textContent.trim();
        
        playerName.textContent = "";
        playerImage.src = "../images/inconnue.png";
        const stats = card.querySelectorAll(".PHY_PLYER_STAS, .SHO_PLYER_STAS, .PAS_PLYER_STAS, .DRI_PLYER_STAS");
        stats.forEach(stat => stat.textContent = "?");
  
        let players = JSON.parse(localStorage.getItem("players")) || [];
        const updatedPlayers = players.filter(player => player.name !== playerNameText);
        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        
        setTimeout(() => {
          alert_suppression.style.display='none'
        }, 2000);
      }
    }
  
    // BTN REMPLACEMENT 
  }else if((e.target.closest('.replace-btn'))){
    btn=e.target.closest('.replace-btn');
    
   // bancplayers_replaced :   replaced players localesorage
    
    // normal players
    benchPlayersList.innerHTML += '';
    modal.style.display='flex'


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

    // tritement dyal swiched players (li knty derthom f  TEST bash nswitcher bin players li officiel o dyal banc) 

    bancplayers_replaced.forEach(player => {
      // pour afficher bancplayers  f model
      const playercard_rempl_replaced = document.createElement('div');
      playercard_rempl_replaced.className = 'bench-player-card test cursor-pointer hover:scale-105 transition-transform';
      playercard_rempl_replaced.innerHTML = `
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



      playercard_rempl_replaced.addEventListener("click", () => {
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


        let player_replaed_temp = JSON.parse(localStorage.getItem("bench-replaced")) || [];
        player_replaed_temp.push(playerToBench);
        localStorage.setItem("bench-replaced", JSON.stringify(player_replaed_temp));


     

        
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

        const updatedBenchPlayers_temp = bancplayers_replaced.filter(p => p.name !== player.name);
   
        localStorage.setItem("benchPlayers", JSON.stringify(updatedBenchPlayers_temp));
    

        modal.classList.add('hidden');
        window.location.reload();
      });




      benchPlayersList.appendChild(playercard_rempl_replaced);
    });
    
  }else if ((e.target.closest('.modify-btn'))){

    modal_modif.style.display='flex'
    btn=e.target.closest('.modify-btn');
   // console.log(btn.parentElement);
    let NameBeforeModif=btn.parentElement.querySelector("#PlayerName") || btn.parentElement.querySelector("#Goalkepper_name");
    let ImageBeforeModif=btn.parentElement.querySelector("img").src;
    let physiqueBeforeModif=btn.parentElement.querySelector(".PHY_PLYER_STAS") || btn.parentElement.querySelector(".DIV_goal");
    let ShotingBeforeModif=btn.parentElement.querySelector(".SHO_PLYER_STAS")|| btn.parentElement.querySelector(".KICK_goal");
    let PassingBeforeModif=btn.parentElement.querySelector(".PAS_PLYER_STAS")|| btn.parentElement.querySelector(".RELF_goal");
    let DribllingBeforeModif=btn.parentElement.querySelector(".DRI_PLYER_STAS")|| btn.parentElement.querySelector(".PASS_goal");
    
    document.querySelector("#editName").value=NameBeforeModif.textContent
    document.querySelector("#editImage").value=ImageBeforeModif;
    document.querySelector("#Physique-modifier").value=physiqueBeforeModif.textContent;
    document.querySelector("#Shoting-modifier").value=ShotingBeforeModif.textContent;
    document.querySelector("#Passing-modifier").value=PassingBeforeModif.textContent;
    document.querySelector("#Dribbling-modifier").value=DribllingBeforeModif.textContent;



    let players = JSON.parse(localStorage.getItem("players")) || [];
    if(players.find(p => p.name === NameBeforeModif.textContent)!=undefined){

      let PlayerUpdated = players.find(p => p.name === NameBeforeModif.textContent);
      //let roleupdated=PlayerUpdated.role
      //console.log("Afterxx",PlayerUpdated);
   document.querySelector("#Modifier-btn-form").addEventListener("click",()=>{
  
    if (PlayerUpdated) {
      PlayerUpdated.name = document.querySelector("#editName").value;
      PlayerUpdated.image = document.querySelector("#editImage").value;
      PlayerUpdated.physique = document.querySelector("#Physique-modifier").value;
      PlayerUpdated.shooting = document.querySelector("#Shoting-modifier").value;
      PlayerUpdated.passing = document.querySelector("#Passing-modifier").value;
      PlayerUpdated.dribbling = document.querySelector("#Dribbling-modifier").value;
    }
    
  
  
        
  
   localStorage.setItem("players", JSON.stringify(players));
   window.location.reload()
   })
    }else{
      
      
      let goalkeepers = JSON.parse(localStorage.getItem("goalkeepers")) || [];

      let goalupdated = goalkeepers.find(p => p.name ===  btn.parentElement.querySelector("#Goalkepper_name").textContent);
      //let roleupdated=goalupdated.role
      console.log("After",goalupdated);
   document.querySelector("#Modifier-btn-form").addEventListener("click",()=>{
  
    if (goalupdated) {
      goalupdated.name = document.querySelector("#editName").value;
      goalupdated.image = document.querySelector("#editImage").value;
      goalupdated.physique = document.querySelector("#Physique-modifier").value;
      goalupdated.shooting = document.querySelector("#Shoting-modifier").value;
      goalupdated.passing = document.querySelector("#Passing-modifier").value;
      goalupdated.dribbling = document.querySelector("#Dribbling-modifier").value;
    }
    
  
  
        
  
   localStorage.setItem("goalkeepers", JSON.stringify(goalkeepers));
   window.location.reload()
   })


    }

 }
});

// let btn_delete_banc=document.querySelectorAll("#delete-btn-banc");
//  console.log(btn_delete_banc);
  
// btn_delete_banc.forEach((btn)=>{
//   btn.addEventListener("click",()=>{
//     console.log(btn);
//   })
// })






const modal = document.getElementById('replacementModal');
const closeModal = document.getElementById('closeModal');
const bancplayers = JSON.parse(localStorage.getItem("benchPlayers")) || [];
const bancplayers_replaced = JSON.parse(localStorage.getItem("bench-replaced")) || [];
const benchPlayersList = document.getElementById('benchPlayersList');

// apres une erreur lors de changement de formation  ce algo ne fonctione pas

// repmlacer_btn.forEach((btn) => {

//   btn.addEventListener("click", () => {
  
    
//     benchPlayersList.innerHTML = '';
//     modal.classList.remove('hidden');

//     bancplayers.forEach(player => {
//       const playercard_rempl = document.createElement('div');
//       playercard_rempl.className = 'bench-player-card test cursor-pointer hover:scale-105 transition-transform';
//       playercard_rempl.innerHTML = `
//         <div class="banc-player relative w-[130px] h-[180px] rounded-[12px] overflow-hidden shadow-lg text-white bg-cover bg-center" style="background-image: url('../assets/examples/badge_total_rush.webp');">
//           <div class="flex justify-center mt-6">
//             <img class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg" src="${player.image}">
//           </div>
//           <div class="absolute bottom-[50px] w-full text-center font-bold text-base text-white pb-1" id="PlayerName">${player.name}</div>
//           <div class="absolute bottom-6 w-full px-3">
//             <div class="grid grid-cols-2 text-center text-xs font-bold">
//               <div><span class="text-yellow-400">${player.physique}</span><span style="font-size: 8px;">PHY</span></div>
//               <div><span class="text-yellow-400">${player.shooting}</span><span style="font-size: 8px;">SHO</span></div>
//               <div><span class="text-yellow-400">${player.passing}</span><span style="font-size: 8px;">PAS</span></div>
//               <div><span class="text-yellow-400">${player.dribbling}</span><span style="font-size: 8px;">DRI</span></div>
//             </div>
//           </div>
//         </div>
//       `;

//       playercard_rempl.addEventListener("click", () => {
//         const originalPlayer = btn.closest('.player');
//         if (!originalPlayer) return;

//         const oldName = originalPlayer.querySelector("#PlayerName").textContent.trim();
//         const originalImage = originalPlayer.querySelector("img").src;
//         const originalPhysique = originalPlayer.querySelector(".PHY_PLYER_STAS").textContent;
//         const originalShooting = originalPlayer.querySelector(".SHO_PLYER_STAS").textContent;
//         const originalPassing = originalPlayer.querySelector(".PAS_PLYER_STAS").textContent;
//         const originalDribbling = originalPlayer.querySelector(".DRI_PLYER_STAS").textContent;

//         originalPlayer.querySelector("#PlayerName").textContent = player.name;
//         originalPlayer.querySelector("img").src = player.image;
//         originalPlayer.querySelector(".PHY_PLYER_STAS").textContent = player.physique;
//         originalPlayer.querySelector(".SHO_PLYER_STAS").textContent = player.shooting;
//         originalPlayer.querySelector(".PAS_PLYER_STAS").textContent = player.passing;
//         originalPlayer.querySelector(".DRI_PLYER_STAS").textContent = player.dribbling;

 
//         const playerToBench = {
//           role: originalPlayer.classList[0], 
//           image: originalImage,
//           name: oldName,
//           physique: originalPhysique,
//           shooting: originalShooting,
//           passing: originalPassing,
//           dribbling: originalDribbling
//         };

//         let benchPlayers = JSON.parse(localStorage.getItem("benchPlayers")) || [];
//         console.log(bancplayers);
        
//         benchPlayers.push(playerToBench);


//         // console.log("after",benchPlayers);
//         // console.log("t--",playerToBench);
        
        
//         localStorage.setItem("benchPlayers", JSON.stringify(benchPlayers));

//         // if( localStorage.setItem("benchPlayers", JSON.stringify(benchPlayers))){
          
//         //   console.log("added");
//         // }else{
//         //   console.log("error");
          
//         // }
        
//         let players = JSON.parse(localStorage.getItem("players")) || [];
//         const playerToUpdate = players.find(p => p.name === oldName);
//         if (playerToUpdate) {
//           playerToUpdate.name = player.name;
//           playerToUpdate.image = player.image;
//           playerToUpdate.physique = player.physique;
//           playerToUpdate.shooting = player.shooting;
//           playerToUpdate.passing = player.passing;
//           playerToUpdate.dribbling = player.dribbling;
//         }

//         localStorage.setItem("players", JSON.stringify(players));

//         const updatedBenchPlayers = bancplayers.filter(p => p.name !== player.name);
//         localStorage.setItem("benchPlayers", JSON.stringify(updatedBenchPlayers));

//         modal.classList.add('hidden');
//       });

//       benchPlayersList.appendChild(playercard_rempl);
//     });
//   });
// });

// btn FERMER le model
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  window.location.reload()
});
document.querySelector("#closeEditModal").addEventListener('click', () => {
  modal_modif.classList.add('hidden');
  window.location.reload()
});
document.querySelector(".close_alert").addEventListener('click', () => {
  alert_suppression.style.display='none'
});




// traitement de changement de formation
let formation_select=document.querySelector("#formation");
let formation_container=document.querySelector(".player-form");


formation_select.addEventListener("change", () => {
  localStorage.setItem("formation", formation_select.value);
  window.location.reload()

});
