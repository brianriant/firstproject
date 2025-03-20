//when writing javascript, where do I start
//what actions can a user take in My app?
//1. player can make a game move
//2. new round 
//3  reset current game
//4. toggle the menu
//use Wikipedia to learn MVC pertern


const menu = document.querySelector('.menu')
const menuItems = menu.querySelector('.items')

menu.addEventListener("click",  event => {
  menuItems.classList.toggle("hidden");
})

//best practices