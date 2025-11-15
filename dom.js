// const titleText = document.getElementById("title");
// const btn = document.querySelector("#btn");

// titleText.textContent = "Welcome Wick!";

// btn.addEventListener("click", () => {
    // console.log("Btn clicked. Color is now red.");
    // titleText.style.color = "red";
// });

// const newElem = document.createElement("p"); // create
// newElem.textContent = "Konnichiwa"; // modify
// document.body.appendChild(newElem); // append

// const container = document.getElementById("container");
// const addBtn = document.getElementById("add");

// addBtn.addEventListener("click", () => {
    // const createCity = document.createElement("p");
    // createCity.textContent = "Tokyo";
    // container.appendChild(createCity);
// });

// const cities = ["Tokyo", "Osaka", "Kyoto"];

// cities.forEach(city => {
    // const element = document.createElement("li");
    // element.textContent = city;
    // container.appendChild(element);
// });

// const container = document.getElementById("container");
// const addBtn = document.getElementById("add");

// addBtn.addEventListener("click", () => {
    // const createP = document.createElement("p");
    // createP.textContent = "New City Added";
    // container.appendChild(createP);
// })

const container2 = document.getElementById("container2");
const clearBtn = document.getElementById("clear");

const cities = document.querySelectorAll(".city"); // selects all <p class="city"> elements
cities.forEach(cityElem => {
    cityElem.addEventListener("click", () => {
        cityElem.remove();
    });
});

clearBtn.addEventListener("click", () => {
    container2.innerHTML = "";
});

// first, grab the element from HTML
const formInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// handle "Add" button click
addBtn.addEventListener("click", () => {
    const inputText = formInput.value.trim();

    if (inputText === "") {
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = inputText;

    li.addEventListener("click", () => {
    li.remove();
    });

    todoList.appendChild(li);

    formInput.value = "";
    
    console.log("Todo text: ", inputText);
});




