let navBar = document.querySelectorAll("nav a");
let isVisible = false;
let skillsSection = document.querySelector(".skills-container");
let skillsBar = document.querySelectorAll(".skill-progress");

function smoothScroll() {
  for (let everyNav of navBar) {
    everyNav.addEventListener("click", function (e) {
      e.preventDefault();
      let destination = e.target.innerText.toLowerCase();
      if (destination == "home") {
        return;
      }
      let destinationElement = document.getElementById(destination);
      let id = setInterval(function () {
        let distance = destinationElement.getBoundingClientRect();
        if (distance.y <= 0) {
          clearInterval(id);
        }
        scrollBy(0, 10);
      }, 1);
    });
  }
}

function initializeBar() {
  for (let everyBar of skillsBar) {
    everyBar.style.width = 0;
  }
}

function fillBars(){
    for (let everyBar of skillsBar){
        let width = everyBar.getAttribute('data-val');
        let count = 0;
        let id = setInterval(function(){
            if(count == width){
                clearInterval(id);
            }
            everyBar.style.width = count + '%';
            count++;
        },6);
    }
}


document.addEventListener("scroll", function () {
  if (
    skillsSection.getBoundingClientRect().top < window.innerHeight &&
    isVisible == false
  ) {
    fillBars();
    isVisible = true;
  } else if (skillsSection.getBoundingClientRect().top > window.innerHeight) {
    isVisible = false;
  }
});

smoothScroll();
initializeBar();
