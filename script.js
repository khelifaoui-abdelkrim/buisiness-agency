/*let headers = document.querySelectorAll('.header');
let i=1;

setInterval(()=>{
  i++;
  let header = document.querySelector('.header.change');  
      header.classList.remove('change');
  if(i>headers.length){
    headers[0].classList.add('change');
    i=1;
  }
  else{
    header.nextElementSibling.classList.add('change');
  }
},3000)*/

//nav bar
const list = document.querySelector('.nav-list');
const btn = document.querySelector('.menu-btn');
const nav_list = document.querySelector('.nav-list');

btn.addEventListener('click',()=>{
  list.classList.toggle('change')
  btn.classList.toggle('change')
})
nav_list.addEventListener('click',()=>{
  list.classList.toggle('change')
  btn.classList.toggle('change')
})
//end of nav bar

//video 
const video = document.querySelector('.video')
const playBtn = document.querySelector('.play i')
const bar = document.querySelector('.control-bar')

const playPause = ()=>{
  if(video.paused){
    video.play()
    playBtn.className = 'far fa-pause-circle'
    video.style.opacity = '1';
  }else{
    video.pause()
    playBtn.className = 'far fa-play-circle'
    video.style.opacity = '.4';
  }
  
}

playBtn.addEventListener('click',()=>{
  playPause();
})

video.addEventListener("timeupdate",()=>{
  bar.style.width = `${(video.currentTime / video.duration)*100}%`
  if(video.ended){
    playBtn.className = 'far fa-play-circle'
    video.style.opacity ='.4'
  }
})

//end of video

//cards swiper (taken from swiper.js)
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 80,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
//end of cards swiper