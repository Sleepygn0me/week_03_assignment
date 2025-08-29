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
  stats.cookieCount = Number(parsed.cookieCount) || 0;
  stats.cps = Number(parsed.cps) || 0;
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
  console.log("interval:", stats.cookieCount, stats.cps);
}, 1000);

// =======Autoclicker and Enhanced Oven =======
function wrangleData(upgrades) {
  // Only keep Auto Clicker and Enhanced Oven
  return upgrades.filter((upgrade) => {
    const name = upgrade.name.trim().toLowerCase();
    return name === "auto-clicker" || name === "enhanced oven";
  });
}

async function getCookies() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  console.log("All upgrades", data);

  const filteredUpgrades = wrangleData(data);
  // Loop through filtered upgrades and create DOM elements
  filteredUpgrades.forEach((upgrade) => {
    const upgradeDiv = document.createElement("div");
    upgradeDiv.classList.add("upgrade");

    const name = document.createElement("h3");
    name.textContent = upgrade.name;
    const cost = document.createElement("p");
    cost.textContent = `Cost: ${upgrade.cost}`;
    const button = document.createElement("button");
    button.textContent = "Buy";

    button.addEventListener("click", () => {
      const costValue = parseFloat(upgrade.cost) || 0;
      const cpsValue = parseFloat(stats.cps) || 0.1;

      if (stats.cookieCount >= costValue) {
        stats.cookieCount -= costValue;
        stats.cps += cpsValue; // increase CPS
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
}

// Call the async function
getCookies();
updateDisplay();

//==========================================================
//game logic

// ====== Cookie click logic ======
cookieImg.addEventListener("click", () => {
  stats.cookieCount++;
  updateDisplay();
  localStorage.setItem("stats", JSON.stringify(stats)); // save progress
});
