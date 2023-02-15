const mySlider = document.getElementById("my-slider");
const sliderValue = document.getElementById("slider-value");
function slider(){
    valPercent = (mySlider.value / mySlider.max)*100;
    mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    sliderValue.textContent  = mySlider.value;
}
slider();


const botaomenu = document.querySelector('.menu')
const menu = document.querySelector('.menu-lateral')

botaomenu.addEventListener('click', () =>{
menu.classList.toggle('menu--ativo')
})