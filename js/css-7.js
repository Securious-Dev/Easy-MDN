function classSelector1() {
    const classSel1 = document.querySelector("#class1");
    const classSel2 = document.querySelector("#class2");
    classSel1.classList.remove("cy");
    classSel1.classList.add("cy");
    classSel2.classList.add("cy");
}

function classSelector2() {
    const classSel1 = document.querySelector("#class1");
    const classSel2 = document.querySelector("#class2");
    classSel1.classList.remove("cy");
    classSel2.classList.remove("cy");
    classSel2.classList.add("cy");
}

function idSelector() {
    const idSel1 = document.querySelector("#i1");
    idSel1.classList.toggle("cy");
}

function attSelector1() {
    const ah = document.querySelector("#ah");
    ah.classList.toggle("cy");
}

function attSelector2() {
    const it = document.querySelector("#it");
    it.classList.toggle("wh");
}

function hovSelector() {
    const dh = document.querySelector("#dh");
    dh.classList.toggle("hov")
}