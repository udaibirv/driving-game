
var $car = document.querySelector('.car');
window.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowLeft') {
    $car.className = 'car' + '-west';
  } else if (e.code === 'ArrowRight') {
    $car.className = 'car' + '-east';
  } else if (e.code === 'ArrowUp') {
    $car.className = 'car' + '-north';
  } else if (e.code === 'ArrowDown') {
    $car.className = 'car' + '-south';
  }

});
