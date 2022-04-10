const canvas = document.querySelector("#game");
const menu = document.querySelector("#menu");
const startBtn = document.querySelector("#start_game");
const ctx = canvas.getContext("2d");
const map1 = document.querySelector("#map1");
const map2 = document.querySelector("#map2");
const character = new Image();
character.src = "img/heroFrames.png";
let xPoc = 200;
let yPoc = 200;
let wPoc = 80;
let hPoc = 80;

const changeMap = (event) => {
  const element = event.target;
  if (element.id == "map1") {
    map2.classList.remove("selected");
    map1.classList.add("selected");
    document.body.className = "map1";
  } else {
    map1.classList.remove("selected");
    map2.classList.add("selected");
    document.body.className = "map2";
  }
};
map1.addEventListener("click", changeMap);
map2.addEventListener("click", changeMap);

async function game() {
  if (document.getElementById("nickname").value != "") {
    canvas.style.display = "block";
    menu.style.display = "none";
    start();
  } else {
    alert("Введите ваше имя");
  }
}

const start = () => {
  ctx.drawImage(character, xPoc, yPoc, wPoc, hPoc);
  function Movement() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let hasMoved = false;
    if (counter % 2 != 0) {
      if (keyPressed.w || keyPressed.ArrowUp || keyPressed.W) {
        moveCharacter(0, -PlSpeed, Up);
        hasMoved = true;
      } else if (keyPressed.s || keyPressed.ArrowDown || keyPressed.S) {
        moveCharacter(0, PlSpeed, Down);
        hasMoved = true;
      }
      if (keyPressed.a || keyPressed.ArrowLeft || keyPressed.A) {
        moveCharacter(-PlSpeed, 0, Left);
        hasMoved = true;
      } else if (keyPressed.d || keyPressed.ArrowRight || keyPressed.D) {
        moveCharacter(PlSpeed, 0, Right);
        hasMoved = true;
      }
      if (hasMoved) {
        frameCount++;
        if (frameCount >= PlFrames) {
          frameCount = 0;
          currentLoopIndex++;
          if (currentLoopIndex >= PlFrameCycle.length) {
            currentLoopIndex = 0;
          }
          if (PlFrameCycle[currentLoopIndex] == 3) {
          } else if (PlFrameCycle[currentLoopIndex] == 5);
        }
      }
      if (!hasMoved) {
        currentLoopIndex = 0;
      }
    }
    drawFrame(PlFrameCycle[currentLoopIndex], currentDirection, posX, posY);
    window.requestAnimationFrame(Movement);
    //
    update(); //враги

    EnemyCollision(); //враги

    Finish(); //финиш
    loadMonster(); //враги

    if (map == 1) {
      //для первой карты
      Collision();
      drawFinish(); //финиш
      FinishCollision(); //финиш
    } else {
      //для второй карты
      Collision2();
      drawFinish2();
      FinishCollision2();
    }
  }
};

startBtn.addEventListener("click", game);
