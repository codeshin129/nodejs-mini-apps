// Object destructuring
const product = {
  label: "some notebook",
  price: 2,
  stock: 200,
  salePrice: undefined,
  rating: 4.2,
};

// const { label: productLabel, price, rating = 5 } = product;

// console.log(productLabel);
// console.log(price);
// console.log(rating);

const transaction = (type, { label, stock, someProperty = 10 }) => {
  console.log(type, label, stock, someProperty);
};

transaction("order", product);
