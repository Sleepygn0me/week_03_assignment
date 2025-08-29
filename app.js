console.log("Hello world");

const stats = {
  cookieCount: 0,
  cps: 0,
};

// ========= DOM Elements =========
const cookieImg = document.querySelector(".cookieImg");
const cookieCounterl = document.getElementById("cookieCount");
const cpsl = document.getElementById("cps");
const shopContainer = document.getElementById("shop-container");

//===============load saved stats=============
const savedStats = localStorage.getItem("stats");
if (savedStats) {
  const parsed = JSON.parse(savedStats);
  stats.cookieCount = parseFloat(parsed.cookieCount) || 0;
  stats.cps = parseFloat(parsed.cps) || 0;
  console.log("Loaded stats:", stats);
}
function updateDisplay() {
  cookieCounterl.textContent = `Cookie count: ${stats.cookieCount.toFixed(1)}`;
  cpsl.textContent = `CPS: ${stats.cps.toFixed(1)}`;
}

//the interval
setInterval(function () {
  stats.cookieCount += stats.cps;
  updateDisplay();
  localStorage.setItem("stats", JSON.stringify(stats));
}, 1000);

fetch("https://cookie-upgrade-api.vercel.app/api/upgrades")
  .then((res) => res.json())
  .then((upgrades) => {
    // loop through upgrades and create DOM elements
    upgrades.forEach((upgrade) => {
      const upgradeDiv = document.createElement("div");
      upgradeDiv.classList.add("upgrade");
      const name = document.createElement("h3");
      name.textContent = upgrade.name;
      const cost = document.createElement("p");
      cost.textContent = `Cost: ${upgrade.cost}`;
      const button = document.createElement("button");

      button.textContent = "Buy";
      button.addEventListener("click", () => {
        const cost = parseFloat(upgrade.cost) || 0;
        const cpsValue = parseFloat(upgrade.cps) || 0;

        if (stats.cookieCount >= cost) {
          stats.cookieCount -= cost;
          stats.cps += cpsValue; // increase cps from upgrade
          updateDisplay();
          localStorage.setItem("stats", JSON.stringify(stats));
          console.log(`Purchased ${upgrade.name}:`, stats);
        } else {
          alert("Not enough cookies!");
        }
      });
      upgradeDiv.appendChild(name);
      upgradeDiv.appendChild(cost);
      upgradeDiv.appendChild(button);
      shopContainer.appendChild(upgradeDiv);
    });
  });
updateDisplay();

//==========================================================
//game logic

// ====== Cookie click logic ======
cookieImg.addEventListener("click", () => {
  stats.cookieCount++; // increase the count
  updateDisplay(); // refresh the DOM
  localStorage.setItem("stats", JSON.stringify(stats)); // save progress
});
