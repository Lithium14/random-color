const color = document.getElementById('color');
const button = document.getElementById('button');
const stopRandomColor = document.getElementById('stopRandomColor');


changeRGB();
// Generate with button
// button.addEventListener('click', () => {
//   changeRGB();
// })
// Or with Interval automatically
let changeColorByInterval = setInterval(() => {
  changeRGB();
}, 3000);

function changeRGB() {
  const col1 = getRandomRGB();
  const col2 = getRandomRGB();
  const col3 = getRandomRGB();

  const colorString = `rgb(${col1},${col2},${col3})`;

  document.body.style.background = colorString;
  color.innerHTML = colorString;

  stopRandomColor.addEventListener('click', () => {
    if(stopRandomColor.innerHTML == 'Je veux cette couleur !') {
      clearInterval(changeColorByInterval);
      stopRandomColor.innerHTML = 'Relancer';
    } else {
      window.location.reload()
    }
  });


}

getRandomRGB();
function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}
