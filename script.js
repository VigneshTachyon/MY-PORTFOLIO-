// Typing Animation (Home Only)
if (document.getElementById("typing")) {

const text = [
  {word: "Frontend Developer", color: "#00ffff"},
  {word: "Web Designer", color: "#ff00ff"},
  {word: "< / > ", color: "#00ff88"}
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i].word;
  document.getElementById("typing").style.color = text[i].color;

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = currentText.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
}


// Dark / Light Mode
document.addEventListener("DOMContentLoaded", function(){
  const btn = document.getElementById("modeToggle");
  if(btn){
    btn.onclick = function(){
      document.body.classList.toggle("light-mode");
    }
  }
});

