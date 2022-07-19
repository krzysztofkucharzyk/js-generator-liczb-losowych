let btn = document.querySelector('button');

btn.addEventListener('click', genLiczbe);

function genLiczbe() {
    let liczba = document.getElementById('liczba');
    let gL = ((Math.random() * 100) + 1);

    gL = Math.floor(gL);

    return liczba.innerText = 'Twoja losowa liczba to: ' + gL;
}