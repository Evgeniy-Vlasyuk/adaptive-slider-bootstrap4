(function() {
  let btnHeader = document.querySelector('.wrapper-btn');
  let carousel = document.querySelector('.carousel');

  btnHeader.addEventListener('click', function() {
    btnHeader.classList.add('wrapper-btn_active');
    function delay() {
      carousel.classList.add('carousel_active');
    };
    setTimeout(delay, 5000);
  });
  
}());