const body = document.body;
const header = document.querySelector("nav");
const main = document.querySelector("body");
const headerHeight = document.querySelector("nav").offsetHeight;

main.style.top = headerHeight + "px";
header.classList.remove("scroll-down");
let lastScroll = 0;
let opacity = 1;

// //random background image
let backgroundimg = document.getElementById("newhome");

// let randomImage = images[randomNum];
// let artbackground = document.getElementById("artnewhome");

//
// artbackground.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+randomImage+")";
let images = ["/arts_compressed/1darkpainting.jpg", "/arts_compressed/bridge.jpg", "/arts_compressed/cliff.jpg", "/arts_compressed/roof.jpg",   "/arts_compressed/tower.jpg",  "/arts_compressed/010.jpg", "/arts_compressed/RedCottage.jpg"]
let randomNum = Math.floor(Math.random() * images.length);
//let randomNum = 0
let randomImage = images[randomNum];
function scrollfunction(e){
    let currentScroll = window.pageYOffset;
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("newhome");
    if (opacity> 0.5){
        opacity -= 0.01;
    }
    target.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, "+opacity+"), rgba(0, 0, 0, "+opacity+") ), url("+randomImage+")";
    var xvalue = "center";
    var factor = .5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " -" + yvalue + "px";
    // console.log("current: ", currentScroll);
    // console.log("last: ", lastScroll);
    if(window.location.pathname == "/arts.html"){
        return
    }
    if (currentScroll > window.innerWidth / 2 - 90) {
        // scrolled down -- header hide
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    } else if (currentScroll < window.innerWidth / 2 - 90){
        // scrolled up -- header show
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
}
window.addEventListener("scroll", scrollfunction)

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', 
    function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior : 'smooth'});
    });
});

// const moreclass = document.querySelector('#more-classes')

// moreclass.addEventListener('click', 
//     function(){
//         moreclass.classList.toggle('open');
// });

function parallax() {
    var s = document.getElementById("floater");
  var yPos = 0 - window.pageYOffset/5;  
  s.style.top = 50 + yPos + "%"; }

window.addEventListener("scroll", function(){
    parallax(); 
});




window.onload = function(e) {
    scrollfunction(true);
    //call scrollfunction 50 times with 0.01 seconds interval
    for (var i = 50; i < 100; i++) {
        setTimeout(scrollfunction, i * 20);
    }
  };
//   $(window).load(function() {
//     $("body").removeClass("preload");
//   });

// //load image slowly
//   $(document).ready(function() {
//     window.onload = function() {$('.fade_img').hide().fadeIn(1000);};
//   });



    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log(galleryItems);

    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.querySelector('#fullscreen-image img');
    const closeButton = document.getElementById('close-button');
  
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        console.log('Gallery item clicked');
        fullscreenImage.src = item.querySelector('img').src;
        fullscreenOverlay.style.display = 'flex';
      });
    });
  
    closeButton.addEventListener('click', () => {
      fullscreenOverlay.style.display = 'none';
    });
