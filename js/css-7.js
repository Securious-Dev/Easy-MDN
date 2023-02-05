const classSel1 = document.querySelector("#class1");
const classSel2 = document.querySelector("#class2");
const b1 = document.querySelector("#c1");
const b2 = document.querySelector("#c2");

console.log(classSel1, b1);

function classSelector1() {
    classSel1.classList.remove("cy");
    classSel2.classList.remove("cy");
    classSel1.classList.add("cy");
};

function classSelector2() {
    classSel1.classList.remove("cy");
    classSel1.classList.add("cy");
    classSel2.classList.add("cy");
};

b1.addEventListener("click", classSelector1);
b2.addEventListener("click", classSelector2);