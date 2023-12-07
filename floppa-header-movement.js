const floppa = document.getElementById("floppa-header");
const letters = ['F', 'L', 'O', 'P', 'P', 'A'];

for (let i = 0; i < 6; i++) {
    setTimeout((index) => {
        floppa.textContent = floppa.textContent + letters[index];
    }, 500 * i, i);

}

setTimeout(() => {
    document.getElementById('cursor').remove()
}, 500 * 6)
