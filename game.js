const board = document.querySelector(".board");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const restart = document.querySelector(".restart");

const result = document.querySelector(".result");

board.addEventListener("click", playGame);
document.addEventListener("DOMContentLoaded", getItems);
restart.addEventListener("click", deleteStorage);

function playGame(e) {
  let play = true;
  restart.classList.add("btn-ani");

  checkWinner();
  playerMove(e);
  checkWinner();

  if (
    !(
      (box1.classList.contains("selected") ||
        box1.classList.contains("cselected")) &&
      (box2.classList.contains("selected") ||
        box2.classList.contains("cselected")) &&
      (box3.classList.contains("selected") ||
        box3.classList.contains("cselected")) &&
      (box4.classList.contains("selected") ||
        box4.classList.contains("cselected")) &&
      (box5.classList.contains("selected") ||
        box5.classList.contains("cselected")) &&
      (box6.classList.contains("selected") ||
        box6.classList.contains("cselected")) &&
      (box7.classList.contains("selected") ||
        box7.classList.contains("cselected")) &&
      (box8.classList.contains("selected") ||
        box8.classList.contains("cselected")) &&
      (box9.classList.contains("selected") ||
        box9.classList.contains("cselected"))
    )
  ) {
    computerPlay(e);
    checkWinner();
  }
}

function computerPlay(e) {
  let selections = true;

  while (selections) {
    const com = Math.ceil(Math.random() * 9);
    const selectedBox = document.querySelector(`.box${com}`);
    if (
      selectedBox.classList.contains("selected") ||
      selectedBox.classList.contains("cselected")
    ) {
      continue;
    } else if (
      !selectedBox.classList.contains("selected") ||
      !selectedBox.classList.contains("cselected")
    ) {
      selectedBox.classList.add("cselected");
      selectedBox.innerHTML = '<i class="fa-regular fa-circle"></i>';
      selection = false;
      saveGame(selectedBox.classList[0]);
      break;
    }
  }
}

function playerMove(e) {
  if (
    !(
      e.target.classList.contains("selected") ||
      e.target.classList.contains("cselected")
    )
  ) {
    e.target.classList.add("selected");
    e.target.innerHTML = '<i class="fa-solid fa-x"></i>';
    saveGame(e.target.classList[0]);
    console.log(e.target);
  }
}

function checkWinner() {
  if (
    box1.classList.contains("selected") &&
    box2.classList.contains("selected") &&
    box3.classList.contains("selected")
  ) {
    result.innerHTML = "You Won!";
    return false;
  } else if (
    box1.classList.contains("cselected") &&
    box2.classList.contains("cselected") &&
    box3.classList.contains("cselected")
  ) {
    result.innerHTML = "You Lost!";
    return false;
  } else if (
    box4.classList.contains("cselected") &&
    box5.classList.contains("cselected") &&
    box6.classList.contains("cselected")
  ) {
    result.innerHTML = "You Lost!";
    return false;
  } else if (
    box4.classList.contains("selected") &&
    box5.classList.contains("selected") &&
    box6.classList.contains("selected")
  ) {
    result.innerHTML = "You Won!";
    return false;
  } else if (
    box7.classList.contains("cselected") &&
    box8.classList.contains("cselected") &&
    box9.classList.contains("cselected")
  ) {
    result.innerHTML = "You Lost!";
    return false;
  } else if (
    box7.classList.contains("selected") &&
    box8.classList.contains("selected") &&
    box9.classList.contains("selected")
  ) {
    result.innerHTML = "You Won!";
    return false;
  } else if (
    box1.classList.contains("cselected") &&
    box4.classList.contains("cselected") &&
    box7.classList.contains("cselected")
  ) {
    result.innerHTML = "You Lost!";
    return false;
  } else if (
    box1.classList.contains("selected") &&
    box4.classList.contains("selected") &&
    box7.classList.contains("selected")
  ) {
    result.innerHTML = "You Won!";
    return false;
  } else if (
    box2.classList.contains("cselected") &&
    box5.classList.contains("cselected") &&
    box8.classList.contains("cselected")
  ) {
    result.innerHTML = "You Lost!";
    return false;
  } else if (
    box2.classList.contains("selected") &&
    box5.classList.contains("selected") &&
    box8.classList.contains("selected")
  ) {
    result.innerHTML = "You Won!";
    return false;
  } else if (
    box3.classList.contains("cselected") &&
    box6.classList.contains("cselected") &&
    box9.classList.contains("cselected")
  ) {
    result.innerHTML = "You Lost!";
    return false;
  } else if (
    box3.classList.contains("selected") &&
    box6.classList.contains("selected") &&
    box9.classList.contains("selected")
  ) {
    result.innerHTML = "You Won!";
    return false;
  } else if (
    box3.classList.contains("cselected") &&
    box5.classList.contains("cselected") &&
    box7.classList.contains("cselected")
  ) {
    result.innerHTML = "You Lost!";
    return false;
  } else if (
    box3.classList.contains("selected") &&
    box5.classList.contains("selected") &&
    box7.classList.contains("selected")
  ) {
    result.innerHTML = "You Won!";
    return false;
  } else if (
    box1.classList.contains("selected") &&
    box5.classList.contains("selected") &&
    box9.classList.contains("selected")
  ) {
    result.innerHTML = "You Won!";
    return false;
  } else if (
    box1.classList.contains("cselected") &&
    box5.classList.contains("cselected") &&
    box9.classList.contains("cselected")
  ) {
    result.innerHTML = "You Lost!";
    return false;
  } else if (
    (box1.classList.contains("selected") ||
      box1.classList.contains("cselected")) &&
    (box2.classList.contains("selected") ||
      box2.classList.contains("cselected")) &&
    (box3.classList.contains("selected") ||
      box3.classList.contains("cselected")) &&
    (box4.classList.contains("selected") ||
      box4.classList.contains("cselected")) &&
    (box5.classList.contains("selected") ||
      box5.classList.contains("cselected")) &&
    (box6.classList.contains("selected") ||
      box6.classList.contains("cselected")) &&
    (box7.classList.contains("selected") ||
      box7.classList.contains("cselected")) &&
    (box8.classList.contains("selected") ||
      box8.classList.contains("cselected")) &&
    (box9.classList.contains("selected") ||
      box9.classList.contains("cselected"))
  ) {
    result.innerHTML = "It's a Draw!";
    return false;
  }
  return true;
}

function saveGame(box) {
  let boxes;

  if (localStorage.getItem("boxes") == null) {
    boxes = [];
  } else {
    boxes = JSON.parse(localStorage.getItem("boxes"));
  }

  boxes.push(box);
  localStorage.setItem("boxes", JSON.stringify(boxes));
}

function getItems() {
  let boxes;

  if (localStorage.getItem("boxes") == null) {
    boxes = [];
  } else {
    boxes = JSON.parse(localStorage.getItem("boxes"));
    restart.classList.add("btn-ani");
  }

  for (let i = 0; i < boxes.length; i++) {
    const box = document.querySelector(`.${boxes[i]}`);
    if (i % 2 != 0) {
      box.classList.add("cselected");
      box.innerHTML = '<i class="fa-regular fa-circle"></i>';
    } else {
      box.classList.add("selected");
      box.innerHTML = '<i class="fa-solid fa-x"></i>';
    }
  }
}

function deleteStorage() {
  localStorage.clear();
}
