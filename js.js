let list = document.querySelectorAll('.list');
let openClose = document.querySelector('.openClose');
let container = document.querySelector('.container');

openClose.onclick = function() {
  openClose.classList.toggle('changeColor');
  container.classList.toggle('containerWidth');
}

for (i=0;i<list.length;i++) {
  list[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  })
}