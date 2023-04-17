// sol-1
// let main = document.getElementById("main");
// let container = document.getElementById("Cardscontainer");
// let arr = [];

// class Products {
//   constructor(image, title, description, price) {
//     this.i = image;
//     this.t = title;
//     this.d = description;
//     this.p = price;
//   }
// }

// fetch("https://fakestoreapi.com/products?limit=20")
//   .then((res) => res.json())
//   .then((json) => {
//     for (i = 0; i < json.length; i++) {
//       let { image, title, description, price } = json[i];
//       let product = new Products(image, title, description, price);
//       // console.log(product);
//       arr.push(product);
//     }
//     render();
//     // console.log(arr[0].i);
//   });

// function render() {
//   for (i = 0; i < arr.length; i++) {
//     let cardDiv = document.createElement("div");
//     let cardImage = document.createElement("img");
//     let cardTitle = document.createElement("h2");
//     let cardDescription = document.createElement("p");
//     let cardPrice = document.createElement("h2");

//     cardImage.src = arr[i].i;
//     cardTitle.textContent = arr[i].t;
//     cardDescription.textContent = arr[i].d;
//     cardPrice.textContent = `${arr[i].p} $`;

//     cardDiv.className = "card";
//     // cardDiv.setAttributeNS;

//     // cardImage.style.width = "100px";

//     cardDiv.appendChild(cardImage);
//     cardDiv.appendChild(cardTitle);
//     cardDiv.appendChild(cardDescription);
//     cardDiv.appendChild(cardPrice);

//     container.appendChild(cardDiv);
//     main.appendChild(container);
//   }
// }

///////////////////

// sol-2

// let main = document.getElementById("main");
// let container = document.getElementById("Cardscontainer");
// let arr = [];

// class Cards {
//   constructor(image, title, description, price) {
//     this.i = image;
//     this.t = title;
//     this.d = description;
//     this.p = price;
//   }
// }

// fetch("https://fakestoreapi.com/products?limit=20")
//   .then((res) => res.json())
//   .then((json) => {
//     json.forEach((element, index) => {
//       arr.push(element);
//       let { image, title, description, price } = arr[index];
//       let card = new Cards(image, title, description, price);
//     });

//     render();
//     // console.log(arr[0]);
//   });
// // console.log(arr[0]);

// function render() {
//   for (i = 0; i < arr.length; i++) {
//     let cardDiv = document.createElement("div");
//     let cardImage = document.createElement("img");
//     let cardTitle = document.createElement("h2");
//     let cardDescription = document.createElement("p");
//     let cardPrice = document.createElement("h2");

//     cardImage.src = arr[i].image;
//     cardTitle.textContent = arr[i].title;
//     cardDescription.textContent = arr[i].description;
//     cardPrice.textContent = `${arr[i].price} $`;

//     cardDiv.className = "card";

//     cardDiv.appendChild(cardImage);
//     cardDiv.appendChild(cardTitle);
//     cardDiv.appendChild(cardDescription);
//     cardDiv.appendChild(cardPrice);

//     container.appendChild(cardDiv);
//     main.appendChild(container);
//   }
// }

///////////////////////////////////////////////

// sol-3

// let main = document.getElementById("main");
// let container = document.getElementById("Cardscontainer");
// let arr = [];

// class Cards {
//   constructor(image, title, description, price) {
//     this.i = image;
//     this.t = title;
//     this.d = description;
//     this.p = price;
//   }
// }

// fetch("https://fakestoreapi.com/products?limit=20")
//   .then((res) => res.json())
//   .then((json) => {
//     // console.log(json[0])
//     for (let i = 0; i < json.length; i++) {
//       let { image, title, description, price } = json[i];
//       let card = new Cards(image, title, description, price);
//       arr.push(card);
//     }
//     // console.log(arr[0]);
//     render();
//   });
// // console.log(arr);

// function render() {
//   arr.map((ele) => {
//     let cardDiv = document.createElement("div");
//     let cardImage = document.createElement("img");
//     let cardTitle = document.createElement("h2");
//     let cardDescription = document.createElement("p");
//     let cardPrice = document.createElement("h2");

//     cardImage.src = ele.i;
//     cardTitle.textContent = ele.t;
//     cardDescription.textContent = ele.d;
//     cardPrice.textContent = `${ele.p} $`;

//     cardDiv.className = "card";

//     cardDiv.appendChild(cardImage);
//     cardDiv.appendChild(cardTitle);
//     cardDiv.appendChild(cardDescription);
//     cardDiv.appendChild(cardPrice);

//     container.appendChild(cardDiv);
//     main.appendChild(container);

//     // console.log(ele.i);
//   });
// }

///////////////////////////////////////////////

let main = document.getElementById("main");
let container = document.getElementById("Cardscontainer");
let arr = [];

class Cards {
  constructor(image, title, description, price) {
    this.i = image;
    this.t = title;
    this.d = description;
    this.p = price;
  }
}

fetch("https://fakestoreapi.com/products?limit=20")
  .then((res) => res.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      let { image, title, description, price } = json[i];
      let card = new Cards(image, title, description, price);
      arr.push(card);
    }
    render();
  });

function render() {
  arr.map((ele) => {
    container.innerHTML += `<div class="card">
    <img src="${ele.i}" />
    <h2>${ele.t}</h2>
    <p>${ele.d}</p>
    <h2>${ele.p} $</h2>
  </div>`;
  });
}
