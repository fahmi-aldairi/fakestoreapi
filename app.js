// class Card {
//   constructor(title, price, description, image) {
//     this.t = title;
//     this.p = price;
//     this.d = description;
//     this.i = image;
//   }
// }
let arr = [];

fetch("https://fakestoreapi.com/products?limit=20")
  .then((res) => res.json())
  .then((json) =>
    json.parse().array.forEach((element) => {
      arr.push(element);
    })
  );

// console.log(arr);
