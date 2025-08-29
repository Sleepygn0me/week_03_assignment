console.log("Hello world");

const stats = {
  cookieCount: 0,
  cps: 0,
};

const savedStats = localStorage.getItem("stats");
if (savedStats) {
  const parsed = JSON.parse(savedStats);
  stats.cookieCount = parsed.cookieCount || 0;
  stats.cps = parsed.cps || 0;
  console.log("Loaded stats:", stats);
}
//=======================================================
//shop upgrades
//fetch the upgrades from the API
//API url: https://cookie-upgrade-api.vercel.app/api/upgrades

//To create multiple elements in a more convenient way, loops are your friend.
// create DOM elements to contain the upgrades data
// create an element
// assign the value to its text content
// append it to the DOM
// after you complete this task, you should see the upgrades on your website
// ========= DOM Elements =========
const cookieImg = document.querySelector(".cookieImg");
const cookieCountEl = document.getElementById("cookieCount");
const cpsEl = document.getElementById("cps");
const shopContainer = document.getElementById("shop-container");

//====================================================
//the interval
setInterval(function () {
  cookieCount += cps;
  //update the text content in the DOM with the new values
  //save the new values in local storage
}, 1000);

//==========================================================
//game logic

function updateDisplay() {
  cookieCountEl.textContent = `Cookie count: ${stats.cookieCount}`;
  cpsEl.textContent = `CPS: ${stats.cps}`;
}

// ====== Cookie click logic ======
cookieImg.addEventListener("click", () => {
  stats.cookieCount++; // increase the count
  updateDisplay(); // refresh the DOM
  localStorage.setItem("stats", JSON.stringify(stats)); // save progress
});

// ====== Initial render ======
updateDisplay();
//when the user clicks on the buy button in an upgrade in the shop, the cookieCount value goes down, and the cps value goes up

//you will need functions to contain the game logic.
//to create the logic of the shop, you could have a function per upgrade
//since we are using local storage, make sure that the local storage values are updated after the user buys an upgrade OR when the user clicks on the cookie
