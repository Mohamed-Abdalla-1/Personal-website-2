const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var array;


array = ['https://wallpaperaccess.com/full/180132.jpg', 'https://images.prismic.io/mystique%2F42e105a3-4e03-4789-954a-2ca02f2db73c_tower+bridge+exhibition.jpg?auto=compress%2Cformat&h=573&q=75&fit=crop&ar=16%3A9&fm=webp', 'https://media.cntraveler.com/photos/55c8be0bd36458796e4ca38a/master/pass/london-eye-2-cr-getty.jpg'];
let element_images = document.getElementById('images');
element_images.setAttribute("src", array[0]);


document.getElementById('pre').addEventListener('click', (event) => {
  array.unshift(array.slice(-1)[0]);
  let element_images2 = document.getElementById('images');
  element_images2.setAttribute("src", array.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  array.push(array.shift());
  let element_images3 = document.getElementById('images');
  element_images3.setAttribute("src", array[0]);

});