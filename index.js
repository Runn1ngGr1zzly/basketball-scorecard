//Declare global variables
let homePoints = document.getElementById("home-points-text");
let guestPoints = document.getElementById("guest-points-text");
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let addOnePointHome = document.getElementById("add-one-point");
let addTwoPoints = document.getElementById("add-two-points");
let addThreePoints = document.getElementById("add-three-points");
let homeScore = 0;
let guestScore = 0;

//Arithamtic functions
function addOneHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function addThreeHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function addOneGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}