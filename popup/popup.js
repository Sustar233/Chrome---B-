var bg = chrome.extension.getBackgroundPage(); 

window.addEventListener('load', function() {
  let btn = document.getElementById('clickMe')
  let inp = document.getElementById('myInput')
  let dis = document.getElementById('welcome')
  // dis.innerText = window.location
  btn.addEventListener('click', function() {
    bg.i = inp.value;
    dis.innerText = bg.i;
  })
})
