console.log("Debut de Programme");

const idConth1 = document.getElementById("idcontenth1");
const idContp = document.getElementById("idcontentp");
const idContbtn = document.getElementById("idcontentbtn");
const idContain = document.getElementById("idContainer");

const idCont = [idConth1, idContp, idContbtn];

let posX = 0;
let posY = 0;
let time = new Date();
let n = 0;
let var1Time = time.getTime();
let var2Time = 0;

console.log(var1Time);

const position = window.addEventListener("scroll", (element) => {
  posX = window.scrollX;
  posY = window.scrollY;

  if (posY % 10 == 0) {
    n++;
    console.log(posY, n);
  }
});

const basicFun = (element) => {
  if (posY > 100) {
    element.style.opacity = 0;
    element.style.transition = "1.5 ease-in";
  } else {
    element.style.opacity = 1;
    element.style.transition = "0.3s ease-out";
  }
};

const opa = window.addEventListener("scroll", () => {
  idCont.forEach((element) => basicFun(element));
});

idContbtn.onclick = function () {
  console.log(idContbtn);

  if (idContbtn.style.borderColor != "red") {
    idContbtn.style.color = "red";
    idContbtn.style.borderColor = "red";
  } else {
    idContbtn.style.color = "green";
    idContbtn.style.borderColor = "green";
  }
};

console.log("Fin de Programme");
