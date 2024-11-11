function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
 
  navLinks.classList.toggle('-translate-y-96');
  navLinks.classList.toggle('opacity-0');

  // Call rotateICON to rotate the icon
  rotateICON();
}

function rotateICON() {
  const div = document.getElementById('rotateicon');
  div.classList.toggle('rotate-90');
}
