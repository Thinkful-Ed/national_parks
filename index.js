console.log(document);

// const header = document.querySelector("h1");
// console.log(header.innerText);

// Find an element with the class value.
const value = document.querySelector(".value");
// console.log(value);
// Find a <button> element.
const btn = document.querySelector("button");
// console.log(btn.outerHTML);
// Find an element with the class area.
const area = document.querySelector(".area-display .value");
// console.log(area);
// Find a <div> that is a descendant of an element with the class stat. (Hint: Look up descendant selectors in the documentation).
const descendant = document.querySelector(".stats div");
// console.log(descendant.innerHTML);
// Find an element with the class hello. Take careful note of what is returned there.
// console.log(document.querySelector(".hello"));

const allBtn = document.querySelectorAll("button");

// for (let el of allBtn.values()) console.log(el);

// Get a list of all the <div> elements containing ratings on the page. Log them to the console using the values() method.
const ratings = document.querySelectorAll(".rating-display");
// for (let rating of ratings.values()) console.log(rating);
// Get a list of all the <div> elements containing areas on the page. Log them to the console using a simple for loop.
const areas = document.querySelectorAll(".area-display");
// for (let area of areas.values()) console.log(area);

const description = document.querySelectorAll(".description-display");

for (let el of description.values()) {
  let text = el.innerText;
  if (text.length > 250) {
    text = text.slice(0, 250);
    text += '<a href="#">...</a>';
  }
  el.innerHTML = text;
}

const ratingsValue = document.querySelectorAll(".rating-display .value");

/* for (let rating of ratingsValue) {
  const ratingNum = Number(rating.innerText);

  if (ratingNum > 4.7) {
    // rating.style.fontWeight = "bold";
    // rating.style.color = "#3ba17c";
    rating.classList.toggle("high-rating");
    rating.classList.toggle("value");
  }
} */

const parks = document.querySelectorAll(".park-display");
const parkLength = parks.length;
const newEl = document.createElement("div");

newEl.innerText = `${parkLength} exciting parks to visit!`;
newEl.classList.add(".header-statement");

const header = document.querySelector("header");
header.appendChild(newEl);

const main = document.querySelector("main");
const firstPark = document.querySelector(".park-display");

// main.removeChild(firstPark);

const firstBtn = document.querySelectorAll(".rate-button");
allBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const parent = event.target.parentNode;
    parent.style.backgroundColor = "#c8e6c9";
  });
});

const nameSorter = document.getElementById("name-sorter");
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  main.innerHTML = "";
  const parksArr = Array.from(parks);
  parksArr.sort((a, b) => {
    const parkNameA = a.querySelector("h2");
    const parkNameb = b.querySelector("h2");
    return parkNameA.innerText.toLowerCase() > parkNameb.innerText.toLowerCase()
      ? 1
      : -1;
  });

  for (let el of parksArr) main.appendChild(el);
});

const rateSorter = document.getElementById("rating-sorter");
rateSorter.addEventListener("click", (event) => {
  event.preventDefault();
  main.innerHTML = "";
  const parksArr = Array.from(parks);

  parksArr.sort((a, b) => {
    const parkRateA = a.querySelector(".rating-display .value").innerText;
    const parkRateB = b.querySelector(".rating-display .value").innerText;

    return Number(parkRateA) > Number(parkRateB) ? -1 : 1;
  });

  for (let el of parksArr) main.appendChild(el);
});
