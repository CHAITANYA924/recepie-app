let search = document.querySelector("#search");
let  btn = document.querySelector(".btn");
let head = document.querySelector(".head");
let content = document.querySelector(".content");
let showIng = document.querySelector(".showIng");

let fetchApi=async(input)=>{
  head.textContent ="data is loading..."
let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
let shoData = await data.json()
head.textContent="";
showData(shoData);
}

let showData=(item)=>{
  content.innerHTML="";
item.meals.forEach((meal)=>{
  console.log(meal)
let div = document.createElement("div");
div.classList.add("box")
div.innerHTML = mealItems(meal.strMealThumb,meal.strMeal,meal.strArea);
content.append(div);
let btn2 = document.createElement("button");
btn2.classList.add("btn2");
btn2.innerText= "recepie instructions"
div.append(btn2);
btn2.addEventListener("click",()=>{
showIng.classList.remove("none")
  showIng.innerHTML=`
  <h3>${meal.strArea}</h3>
  <p>${meal.strInstructions}</p>
 
  `
  button3();
})
})
}


let button3=()=>{
  let btn3= document.createElement("button");
  btn3.textContent = "X";
  btn3.classList.add("btn3")
  showIng.prepend(btn3);
  btn3.addEventListener("click",()=>{
    showIng.classList.add("none");
  })
  
}


let mealItems =(image,meal,area)=>{
  return `
  <img src="${image}" alt="">
<h2>${meal}</h2>
<h3>${area}</h3>
  
  `
}





btn.addEventListener("click",()=>{
  let input =search.value;
  fetchApi(input);
})