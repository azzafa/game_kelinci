const rumput = document.querySelectorAll('.rumput');
const kelinci = document.querySelectorAll('.kelinci');
const papanSkor = document.querySelector('.papan-skor');

let rumputSebelumnya;
let selesai;
let skor;

function randomRumput(rumput) {
  const r = Math.floor(Math.random() * rumput.length);
  const rRandom = rumput[r];
  if (rRandom == rumputSebelumnya) {
    randomRumput(rumput);
  }
  rumputSebelumnya = rRandom;
  return rRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanKelinci() {
  const rRandom = randomRumput(rumput);
  const wRandom = randomWaktu(300, 1000);
  rRandom.classList.add('muncul');
  setTimeout(() => {
    rRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanKelinci();
    }
  }, wRandom);
}

function go() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanKelinci();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  papanSkor.textContent = skor;
}

kelinci.forEach((k) => {
  k.addEventListener('click', pukul);
});
