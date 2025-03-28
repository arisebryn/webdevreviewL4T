var button = document.getElementById('btn')
var title = document.getElementById('title')
var bg = document.getElementById('bg')

button.onclick = update

function update() {
  title.innerHTML = 'WELCOME TO SPRING!';
  button.style.backgroundColor = '#B0FF92'
  button.innerHTML = '🌸'
}