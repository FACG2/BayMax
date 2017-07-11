
window.addEventListener('scroll', function(e) {
  if(window.scrollY != 0){
    document.getElementsByTagName('nav')[0].classList.add('scrolledNav');
  }else {
    document.getElementsByTagName('nav')[0].classList.remove('scrolledNav');
  }
});
