let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let newGameEl = document.getElementById("newGame-el")

let homescore =0
let guestscore=0
let totalscore =0


function addoneH(){
    homescore +=1
    homeScoreEl.textContent = homescore
}
function addtwoH(){
    homescore +=2
    homeScoreEl.textContent = homescore
}
function addthreeH(){
    homescore +=3
    homeScoreEl.textContent = homescore
}

function addoneG(){
    guestscore +=1
    guestScoreEl.textContent= guestscore
}

function addtwoG(){
    guestscore +=2
    guestScoreEl.textContent= guestscore
}

function addthreeG(){
    guestscore +=3
    guestScoreEl.textContent= guestscore
}

function newGame(){
   totalscore = 0
   homeScoreEl.textContent=totalscore
   guestScoreEl.textContent=totalscore
}
