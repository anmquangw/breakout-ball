let state = document.querySelector('.state');
let info = state.querySelector('.info');
let player__list = state.querySelector('.player__list');
let name__form = state.querySelector('.name__form');
let name__field = name__form.querySelector('.name__field');

let game__over = document.querySelector('.game__over');
let count__down = game__over.querySelector('.count__down');

name__field.value = localStorage.getItem('name');;

function isData(state = false){
  if(!state)
    info.innerHTML = "<h1>can't connect to db<h1>";
  return false;
}

function gameOver(){
  localStorage.setItem('isRun', false);
  localStorage.setItem('total', score);
  control();
  let count = 0;
  game__over.classList.remove('hiden');
  setInterval(() => {
    count++;
    count__down.innerHTML = `${count}`;

    if(count == 3){
      document.location.reload();
      return;
    }
  }, 1000);
}

name__form.addEventListener('submit', e => {
  e.preventDefault();
  state.classList.toggle("hiden");
  let name = name__field.value;

  localStorage.setItem('name', name);
  localStorage.setItem('isRun', true);
  begin(true);
})