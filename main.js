document.querySelector('.btn-menu').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('mostrar')
})

var card2 = document.querySelector(".card2");
var playing = false;

card2.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card2,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anime){
       playing = false;
    }
  });
});


