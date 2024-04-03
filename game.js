let gamearr = [];
let userarr = [];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

let color = ["red", "yellow", "green", "blue"];

document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("Game has been Startred");
    start = true;

    levelUp();
  }
});

function gflash(btn) {
  btn.classList.add("gameflash");
  setTimeout(function () {
    btn.classList.remove("gameflash");
  }, 250);
}

function uflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userarr = [];
  level++;
  h2.innerText = `Level ${level}`;

  let ranInd = Math.floor(Math.random() * 4);
  let ranClr = color[ranInd];
  let ranBtn = document.querySelector(`.${ranClr}`);
  gamearr.push(ranClr);

  gflash(ranBtn);
}

function checkAns(indx) {
  //let indx = level - 1;
  if (gamearr[indx] === userarr[indx]) {
    if (userarr.length == gamearr.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = ` Game over!!! <BR> Your score was <b> ${level} </b> <br> Press any key to START THE GAME`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    gameReset();
  }
}

function press(btn) {
  //console.log(this); // this= btn;
  uflash(this);

  //let userClr = btn.getAttribute('id');
  userarr.push(this.getAttribute("id"));

  checkAns(userarr.length - 1);
}

let button = document.querySelectorAll(".div");
for (b of button) {
  b.addEventListener("click", press);
}

function gameReset() {
  gamearr = [];
  userarr = [];
  level = 0;
  start = false;
}
