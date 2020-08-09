const shopCardsArray = [
  {
    style: "Real Teal",
    forWhom: "Men",
    onSale: false,
    description:
      "DESIGNED WITH 5-POCKET DENIM STYLING, DETAILS INCLUDE A ZIP FLY WITH METAL BUTTON CLOSURE, COIN POCKET AT THE LEFT HIP AND RVCA METAL RIVETS AND THE POCKETS.",
    imageUrl: "/images/realteal.jpg",
    price: "60.00",
  },
  {
    style: "Real Teal",
    forWhom: "Men",
    onSale: false,
    description:
      "DESIGNED WITH 5-POCKET DENIM STYLING, DETAILS INCLUDE A ZIP FLY WITH METAL BUTTON CLOSURE, COIN POCKET AT THE LEFT HIP AND RVCA METAL RIVETS AND THE POCKETS.",
    imageUrl: "/images/realteal.jpg",
    price: "60.00",
  },
  {
    style: "Real Teal",
    forWhom: "Men",
    onSale: false,
    description:
      "DESIGNED WITH 5-POCKET DENIM STYLING, DETAILS INCLUDE A ZIP FLY WITH METAL BUTTON CLOSURE, COIN POCKET AT THE LEFT HIP AND RVCA METAL RIVETS AND THE POCKETS.",
    imageUrl: "/images/realteal.jpg",
    price: "60.00",
  },
  {
    style: "Real Teal",
    forWhom: "Men",
    onSale: false,
    description:
      "DESIGNED WITH 5-POCKET DENIM STYLING, DETAILS INCLUDE A ZIP FLY WITH METAL BUTTON CLOSURE, COIN POCKET AT THE LEFT HIP AND RVCA METAL RIVETS AND THE POCKETS.",
    imageUrl: "/images/realteal.jpg",
    price: "60.00",
  },
];

const renderShopCards = ()=>{
  let domString = '';
  for(let i = 0; i < shopCardsArray.length; i++){
    domString += `<div class="card" style="width: 18rem;">
    <img src="${shopCardsArray.imageUrl}" class="card-img-top" alt="corduroy ">
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray.style}</h3>
      <p class="card-text">${shopCardsArray.description}</p>
      <h5 class="card-price">${shopCardsArray.price}</h5>
    </div>
  </div>
  `
  }
  printToDom('', domString)
}
