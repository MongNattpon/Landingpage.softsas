const Menu = document.getElementById("ham__menu");
const PopupMenu = document.getElementById("menu-p");
const counters = document.querySelectorAll(".counter");
const wpCounter = document.querySelector("#wpCounter");
const rootEl = document.documentElement
const showarrow = document.getElementById("Arrow");
let acc = document.getElementsByClassName("accordion");
let i;




// Back to top 
window.addEventListener("scroll",()=>{
   const scrollTotal= rootEl.scrollHeight - rootEl.clientHeight
   if(rootEl.scrollTop/scrollTotal == 1){
    showarrow.classList.add("actop")
   }else if(rootEl.scrollTop/scrollTotal < 1){
    showarrow.classList.remove("actop")
    Menu.classList.remove("open")
    PopupMenu.classList.remove("active-popup")
        
   }
})

showarrow.addEventListener("click",()=>{
   window.scrollTo({
     top: 0,
     behavior : "smooth",        
   })
})




//  scroll Animation
let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (entry.isIntersecting){
      let speed = 200;
      counters.forEach((counter) => {
        function UpdateCounter() {
          const targetNumber = +counter.dataset.target;
          const initialNumber = +counter.innerText;
          const incPerCount = Math.ceil(targetNumber / speed);
              
          if (initialNumber < targetNumber) {
             counter.innerText = initialNumber + incPerCount;
            setTimeout(() => {
              UpdateCounter();
            }, 55); 
          }
        }
        UpdateCounter();
      });
    }

    
  },

  {
    root: null,
    threshold: 0.4,
  }
);
CounterObserver.observe(wpCounter);




// How To Accordion;
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.height === "100px") {
      panel.style.height = "";
    } else {
      panel.style.height = "100px";
    }
  });
}


// How to Create HambeugerMenu
Menu.addEventListener("click", () => {
  if (Menu.classList.contains("open")) {
    Menu.classList.remove("open");
    PopupMenu.classList.remove("active-popup");
       
  } else {
    Menu.classList.add("open");
    PopupMenu.classList.add("active-popup");
  }
});
