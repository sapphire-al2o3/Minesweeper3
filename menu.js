const x = document.getElementById('sizeX');
const y = document.getElementById('sizeY');
const z = document.getElementById('sizeZ');
const m = document.getElementById('count');

const form = document.getElementById('custom_form');

document.getElementById('custom').addEventListener('click', e => {
    form.classList.toggle('show');
}, false);

document.getElementById('play').addEventListener('click', e => {
    document.getElementById('play').href = `./index.html?x=${x.value}&y=${y.value}&z=${z.value}&m=${m.value}`;
}, false);
