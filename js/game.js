const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const map1 = document.querySelector("#map1");
const map2 = document.querySelector("#map2");

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
