let navBar = document.querySelectorAll("nav a");
let skillsBar = document.querySelectorAll(".skill-progress");
// let skills = document.querySelectorAll('.skill');
let isVisible = [];
for(let i = 0; i < skillsBar.length;i++){
  isVisible.push(false);
}


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

function fillBar(bar){
  let barWidth = bar.getAttribute('data-val');
  let count = 0;
  let id = setInterval(function(){
    if(count == barWidth){
      clearInterval(id);
    }
    bar.style.width = count + '%';
    count++;
  },5);
}
/* This functions fills All bar Simontanously when skills container is visible
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
*/


document.addEventListener('scroll',function(){
  for(let i = 0; i < skillsBar.length;i++){
    if(!isVisible[i] && skillsBar[i].getBoundingClientRect().top < window.innerHeight){
      fillBar(skillsBar[i]);
      isVisible[i] = true;
    }else if(skillsBar[i].getBoundingClientRect().top > window.innerHeight){
      isVisible[i] = false;
    }
  }
})
smoothScroll();
initializeBar();
