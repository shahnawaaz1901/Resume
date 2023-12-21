let navBar = document.querySelectorAll("nav a");
let skillsBar = document.querySelectorAll(".skill-progress");
let isVisible = [];
for (let i = 0; i < skillsBar.length; i++) {
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
      let i = 1;
      let id = setInterval(function () {
        let distance = destinationElement.getBoundingClientRect();
        if (
          i >=
          distance.top /*|| distance.bottom == document.querySelector('body').getBoundingClientRect().bottom*/
        ) {
          clearInterval(id);
        }
        console.log(i);
        scrollBy(0, i);
        i += 5;
      }, 15);
    });
  }
}

function initializeBar() {
  for (let everyBar of skillsBar) {
    everyBar.style.width = 0;
  }
}

function fillBar(bar) {
  let barWidth = bar.getAttribute("data-val");
  let count = 0;
  let id = setInterval(function () {
    if (count == barWidth) {
      clearInterval(id);
    }
    bar.style.width = count + "%";
    count++;
  }, 5);
}

document.addEventListener("scroll", function () {
  for (let i = 0; i < skillsBar.length; i++) {
    if (
      !isVisible[i] &&
      skillsBar[i].getBoundingClientRect().top < window.innerHeight
    ) {
      fillBar(skillsBar[i]);
      isVisible[i] = true;
    } else if (skillsBar[i].getBoundingClientRect().top > window.innerHeight) {
      isVisible[i] = false;
    }
  }
});
smoothScroll();
initializeBar();

const sendButton = document.getElementById("sendBtn");
const userEmail = document.getElementById("email");
const userName = document.getElementById("name");
const msg = document.getElementById("msg");
sendButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const object = {
    name: userName.value,
    email: userEmail.value,
    massage: msg.value,
  };
  console.log(object);
  (userName.value = ""), (userEmail.value = ""), (msg.value = "");

  alert("ThankYou for ReachingOut We'll Connect you in a While");
  await fetch("https://resume-server-api.onrender.com/api/contact/sendMail", {
    method: "Post",
    body: JSON.stringify(object),
    headers: {
      "Content-Type": "application/json",
    },
  });
});
