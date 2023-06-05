const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const search = (str) => {
  let results = [];
  let lowerStr = str.toLowerCase();

  for (let name of fruit) {
    if (name.toLowerCase().includes(lowerStr) && results.length < 10) {
      results.push(name);
    }
  }

  return results;
};

const searchHandler = (e) => {
  const inputVal = e.target.value;

  if (inputVal !== "" && inputVal !== " ") {
    const results = search(inputVal);
    showSuggestions(results, inputVal);
  }
};

const showSuggestions = (results, inputVal) => {
  suggestions.innerHTML = "";

  for (let result of results) {
    const li = document.createElement("li");
    li.textContent = result;
    suggestions.appendChild(li);
  }
};

const useSuggestion = (e) => {
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent;
    suggestions.innerHTML = "";
  }
};

const clearSuggestion = (e) => {
  if (!input.contains(e.target) && !suggestions.contains(e.target)) {
    suggestions.innerHTML = "";
  }
};

document.addEventListener("click", clearSuggestion);
input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
