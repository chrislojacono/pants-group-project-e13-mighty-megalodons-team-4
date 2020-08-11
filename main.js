const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

const reviewsArray = [
  {
    name: "Alexander Solzenezen",
    product: "classic pants",
    rating: 5,
    product: "Corduroys",
    comment: "I love them."
  },
  {
    name: "John Steinback",
    product: "classic pants",
    rating: 3,
    product: "Corduroys",
    comment: "Could've been better."
  },
  {
    name: "William Faulkner",
    product: "classic pants",
    rating: 2,
    product: "Corduroys",
    comment: "I would've given three stars but the service wasn't good either."
  },
  {
    name: "Djuna Barnes",
    product: "classic pants",
    rating: 5,
    product: "Corduroys",
    comment: "Best I ever got."
  }
];

const renderNavbar = () => {
  domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-link" href="/index.html">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="/shop.html">Shop</a>
        <a class="nav-link" href="/bios.html">About Us</a>
        <a class="nav-link" href="/reviews.html">Reviews</a>
        <a class="nav-link" href="/order.html">Order</a>
        
      </div>
    </div>
  </nav>`;
  printToDom("navbar", domString);
};
const shopCardsArray = [
  {
    style: "Real Teal",
    forWhom: "Men",
    onSale: false,
    description:
      "Designed with 5-pocket denim styling, details include a zip fly with a metal button closure, coin pocket at the left hip and metal rivets at the pockets.",
    imageUrl: "/images/realteal.jpg",
    price: "60.00",
  },
  {
    style: "Shade Of Brown",
    forWhom: "Men",
    onSale: true,
    description:
      "Featuring a slim and straight fit with a medium rise and a straight leg, the men's cord jeans offer a tailored take on a classic cord, topping it off with signature trims.",
    imageUrl: "/images/shadeofbrown.jpg",
    price: "40.00",
  },
  {
    style: "The Classic",
    forWhom: "Men",
    onSale: false,
    description:
      "Throwback cord and modern cut meet in the daggers pigment corduroy jeans.",
    imageUrl: "/images/classiccorduroy.jpg",
    price: "70.00",
  },
  {
    style: "Womens Mid Rise",
    forWhom: "Women",
    onSale: false,
    description: "A figure-balancing shape in soft-yet-substantial corduroy.",
    imageUrl: "/images/wmidrise.jpeg",
    price: "60.00",
  },
  {
    style: "Womens Sport Knit",
    forWhom: "Women",
    onSale: true,
    description: "Your favorite Sport Knit Pants in supple knit corduroy.",
    imageUrl: "/images/wsportknit.jpeg",
    price: "45.00",
  },
];

const bioCardArray = [
  {
    photo: "/images/JohnWayne.jpg",
    name: "Captain Yeehaw",
    title: "Captain Corduroy",
    bio:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
  {
    photo: "/images/ClintEastwood.jpg",
    name: "Corduroy Chris",
    title: "Chief Corduroy Officer",
    bio:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
  },
  {
    photo: "/images/ChuckNorris.png",
    name: "Rootin Tootin Ralph",
    title: "Security",
    bio:
      "Bring to the table win-win survival strategies to ensure proactive domination."
  },
  {
    photo: "/images/hobbyhorse.jpg",
    name: "Sammy Sheriff",
    title: "Head of Marketing",
    bio:
      "User generated content in real-time will have multiple touchpoints for offshoring."
  },
];

const renderShopCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${shopCardsArray[i].imageUrl}" class="card-img-top" alt="corduroy ">
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
  }
  printToDom("shopCardsSection", domString);
};

const renderBioCards = () => {
  let domString = "";
  for (let i = 0; i < bioCardArray.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${bioCardArray[i].photo}" class="card-img-top" alt="cowboy">
    <div class="card-body">
      <h4 class="card-title">${bioCardArray[i].name}</h4>
      <h6 class="card-title">${bioCardArray[i].title}</h6>
      <p class="card-text">${bioCardArray[i].bio}</p>
    </div>
  </div>`;
  }
  printToDom("bioCards", domString);
}

const init = () => {
  renderNavbar();
  renderShopCards();
  renderBioCards();
};

init();
