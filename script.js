const next = document.querySelector("[data-next]");
const prev = document.querySelector("[data-prev]");
const dotsContainer = document.querySelector("[data-dots]");
const slides = document.querySelectorAll("[data-slide]");

let index = 0;

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.setAttribute("class", "dot");
  dot.setAttribute("id", "dot");
  dotsContainer.append(dot);
}

const dots = document.querySelectorAll("#dot");
dots.forEach((dot, i)=>{
    dot.addEventListener('click', (e) =>{
        index = i;
        dotSlide();
    })
})

dotSlide();

function dotSlide(){
    dots.forEach((dot, i) => {
        if (dot.classList.contains("active")) {
          dot.classList.remove("active");
        }
        if (i == index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
      
      slides.forEach((slide, i) => {
        if (slide.classList.contains("active")) {
          slide.classList.remove("active");
        }
        if (i == index) {
          slide.classList.add("active");
        }
      });
}

next.addEventListener("click", () => {
  incr();
});

prev.addEventListener("click", () => {
  decr();
});

function incr() {
  index++;
  if (index == slides.length) {
    index = 0;
  }
  dotSlide();
}

function decr() {
  if (index == 0) {
    index = slides.length;
  }
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  dotSlide();
}

setInterval(()=>{
    incr();
},3000);