const x = document.getElementById('sizeX');
const y = document.getElementById('sizeY');
const z = document.getElementById('sizeZ');
const m = document.getElementById('count');

const form = document.getElementById('custom_form');
const play = document.getElementById('play');

document.getElementById('custom').addEventListener('click', e => {
    form.classList.toggle('show');
}, false);

play.addEventListener('click', e => {
    play.href = `./game.html?x=${x.value}&y=${y.value}&z=${z.value}&m=${m.value}`;
}, false);
