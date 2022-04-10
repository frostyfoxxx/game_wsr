const canvas = document.querySelector("#game");
const menu = document.querySelector("#menu");
const startBtn = document.querySelector("#start_game");
const ctx = canvas.getContext("2d");
const map1 = document.querySelector("#map1");
const map2 = document.querySelector("#map2");
const character = new Image();
let selectedMap = false;
character.src = "/img/character.png";
let xPoc = 200;
let yPoc = 200;
let wPoc = 80;
let hPoc = 80;
let speed = 10;
let background = new Image();
background.src = "/img/map.jpg";

const changeMap = (event) => {
  const element = event.target;
  if (element.id == "map1") {
    map2.classList.remove("selected");
    map1.classList.add("selected");
    document.body.className = "map1";
    selectedMap = true;
  } else {
    map1.classList.remove("selected");
    map2.classList.add("selected");
    document.body.className = "map2";
    selectedMap = true;
  }
};
map1.addEventListener("click", changeMap);
map2.addEventListener("click", changeMap);

async function game() {
  document.addEventListener("keydown", control);
  if (document.getElementById("nickname").value != "" && selectedMap === true) {
    canvas.style.display = "block";
    menu.style.display = "none";
    render();
  } else {
    alert("Введите ваше имя или выберите карту");
  }
}

function render() {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(character, xPoc, yPoc, wPoc, hPoc);
}

function control(e) {
  xPoc = Math.max(0, Math.min(canvas.width - wPoc, xPoc));
  yPoc = Math.max(0, Math.min(canvas.height - hPoc, yPoc));
  if (e.keyCode == 37) {
    xPoc -= speed;
  } else if (e.keyCode == 38) {
    yPoc -= speed;
  } else if (e.keyCode == 39) {
    xPoc += speed;
  } else if (e.keyCode == 40) {
    yPoc += speed;
  }
}
