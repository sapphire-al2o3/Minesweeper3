const x = document.getElementById('sizeX');
const y = document.getElementById('sizeY');
const z = document.getElementById('sizeZ');
const m = document.getElementById('count');

const form = document.getElementById('custom_form');
const play = document.getElementById('play');

function getSaveKey() {
    return 'mine_settings';
}

function load() {
    const json = localStorage.getItem(getSaveKey());
    if (json) {
        const data = JSON.parse(json);
        if (data.custom.x > 0) x.value = data.custom.x;
        if (data.custom.y > 0) y.value = data.custom.y;
        if (data.custom.z > 0) z.value = data.custom.z;
        if (data.custom.m > 0) m.value = data.custom.m;
    }
}

function save() {
    const data = {
        custom: {
            x: x.value,
            y: y.value,
            z: z.value,
            m: m.value,
        }
    };
    
    localStorage.setItem(getSaveKey(), JSON.stringify(data));
}

load();

document.getElementById('custom').addEventListener('click', e => {
    form.classList.toggle('show');
}, false);

play.addEventListener('click', e => {
    save();
    play.href = `./game.html?x=${x.value}&y=${y.value}&z=${z.value}&m=${m.value}`;
}, false);
