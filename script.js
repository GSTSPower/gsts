const left = document.querySelector('.arrow-left')
const right = document.querySelector('.arrow-right')
const container = document.querySelector('.slider-container')


// let offset = 0;


// right.addEventListener('click', () => {
//   offset += 700;
//   if (offset > 700) {
//     offset = 0
//   }
//   container.style.left = -offset + 'px';
// })

// left.addEventListener('click', () => {
//   offset -= 700;
//   if (offset < 0) {
//     offset = 700
//   }
//   container.style.left = -offset + 'px';
// })

let slideIndex = 1;
showSlides(slideIndex);

right.addEventListener ("click", function () {
  showSlides(slideIndex += 1);
  makeTimer();//Пересоздаем интервал если производится нажатие 
});

left.addEventListener ("click", function () {
  showSlides(slideIndex -= 1);
  makeTimer();//Пересоздаем интервал если производится нажатие 
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";    
  }
 var timer = 0;
 makeTimer(); //Создаем интервал 
 function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },7000);
  }
  
  
 //Таймер, (чтобы было удобнее считать время) можно удалить
 var seconds = 5;
 setInterval(()=>{
    seconds = seconds - 1;
    if(!seconds){seconds = 5;}
        document.getElementById("timeVisual").innerHTML = seconds
 },1000)
