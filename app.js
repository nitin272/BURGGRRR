// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

var wholeWheatBun = 10;
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  if(state.Cheese){
    cheese.style.display = "inherit";
  }else{
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  if(state.Tomatoes){
    tomatoes.style.display = "inherit"
  }else{
    tomatoes.style.display = "none"
  }
}

function renderOnions() {
  let onions = document.querySelector("#onion");
  if(state.Onions){
    onions.style.display = "inherit"
  }else{
    onions.style.display = "none"
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if(state.Lettuce){
    lettuce.style.display = "inherit"
  }else{
    lettuce.style.display = "none"
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};
document.querySelector(".btn-cheese").onclick = function(){
  state.Cheese = !state.Cheese;
  renderAll();
}
document.querySelector(".btn-tomatoes").onclick = function(){
  state.Tomatoes = !state.Tomatoes;
  renderAll();
}

document.querySelector(".btn-onions").onclick = function(){
  state.Onions = !state.Onions;
  renderAll();
}
document.querySelector(".btn-lettuce").onclick = function(){
  state.Lettuce = !state.Lettuce;
  renderAll();
}
function renderButtons(){
  for(key in state){
    if(state[key]){
      console.log(state[key]);
      document.querySelector(".btn-" + key.toLowerCase()).classList.add("active")
    }else{
      document.querySelector(".btn-" + key.toLowerCase()).classList.remove("active")
    }
  }
}
function renderIngredientsBoard(){
  let i = 0;
  let elements = document.querySelectorAll(".items");
  for(key in state){
    if(state[key]){
      elements[i++].style.display = "inherit";
    }else{
      elements[i++].style.display = "none";
    }
  }
}
function renderPrice(){
  let totalPrice = 20;
  for(key in state){
    if(state[key]){
      totalPrice+= ingredients[key];
    }
  }
  document.querySelector("body > footer > div.Rectangle3 > div > p.price-details").innerHTML = "INR " + totalPrice;
}