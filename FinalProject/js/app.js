var textWrapper = document.querySelector('.firstAnimation');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.firstAnimation .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 150 * (i + 1)
  }).add({
    targets: '.firstAnimation .letter',
    opacity: 1, 
    duration: 900,
    easing: "easeOutExpo",
    delay: 1000,
    complete: function (anim) {
      console.log("Animation complete!");
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');
    setTimeout(function() {
        content.classList.add('hidden');
    }, 6000);
});
console.log("Welcome to Museful Mindscape");

Jump('.textContent',{
  duration: 1000,
  offset: 0,
  callback: null,
  easing: 'easeInOutQuad',
  a11y: false
});



//source code for animation: referred to Codepen.io





