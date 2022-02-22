let selectFacile = document.getElementById('facile');;

let selectMedia = document.getElementById('media');

let selectDifficile = document.getElementById('difficile');

let container = document.getElementById('container');

let difficoltá;

let classLevel;

let esito = document.getElementById('esito');

let cell = document.getElementsByClassName('cell');





function difficoltáFacile() {
    difficoltá = "facile";
    level = 100;
    classLevel = "facile";
    container.innerHTML = ``;
    for(let i = 1; i <= level; i++) {
        container.innerHTML += `<div class="cell ${classLevel}">${i}</div>`;
    }
    esito.innerHTML = `Hai selezionato la modalitá ${difficoltá}`;
}

function difficoltáMedia() {
    difficoltá = "media";
    level = 81;
    classLevel = "media";
    container.innerHTML = ``;
    for(let i = 1; i <= level; i++) {
        container.innerHTML += `<div class="cell ${classLevel}">${i}</div>`;
    }
    esito.innerHTML = `Hai selezionato la modalitá ${difficoltá}`;
}

function difficoltáDifficile() {
    difficoltá = "difficile";
    level = 49;
    classLevel = "difficile";
    container.innerHTML = ``;
    for(let i = 1; i <= level; i++) {
        container.innerHTML += `<div class="cell ${classLevel}">${i}</div>`;
    }
    esito.innerHTML = `Hai selezionato la modalitá ${difficoltá}`;
}



selectFacile.addEventListener("click", difficoltáFacile);

selectMedia.addEventListener("click", difficoltáMedia);

selectDifficile.addEventListener("click", difficoltáDifficile);





function activated() {
    cell.classList.add("activated");
}

cell.addEventListener("click", activated);