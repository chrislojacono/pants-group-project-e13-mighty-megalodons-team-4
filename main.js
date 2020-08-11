const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

const renderNavbar = () => {
  domString = `<nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-link" href="/index.html">Home <span class="sr-only">(current)</span></a>
        <a id="shopsAll" class="nav-link" href="/shop.html">Shop</a>
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
    imageUrl: "/shopImages/realteal.jpg",
    price: 60.0,
  },
  {
    style: "Shade Of Brown",
    forWhom: "Men",
    onSale: true,
    description:
      "Featuring a slim and straight fit with a medium rise and a straight leg, the men's cord jeans offer a tailored take on a classic cord, topping it off with signature trims.",
    imageUrl: "/shopImages/shadeofbrown.jpg",
    price: 40.0,
  },
  {
    style: "The Classic",
    forWhom: "Men",
    onSale: false,
    description:
      "Throwback cord and modern cut meet in the daggers pigment corduroy jeans.",
    imageUrl: "/shopImages/classiccorduroy.jpg",
    price: 70.0,
  },
  {
    style: "Womens Mid Rise",
    forWhom: "Women",
    onSale: false,
    description: "A figure-balancing shape in soft-yet-substantial corduroy.",
    imageUrl: "/shopImages/wmidrise.jpeg",
    price: 60.0,
  },
  {
    style: "The Johna Wayne",
    forWhom: "Women",
    onSale: false,
    description:
      "The ultimate ribcage cord flare jean in camel. Ready to take over the wild west!",
    imageUrl: "/shopImages/womensbrown.jpeg",
    price: 85.0,
  },
  {
    style: "Wild West Corduroys",
    forWhom: "Women",
    onSale: true,
    description:
      "Saying, cute, comfortable, and durable pants, doesn't have to mean three different pairs.",
    imageUrl: "/shopImages/fittedwomens.jpg",
    price: 45.0,
  },
  {
    style: "Root Tootin Roys",
    forWhom: "Women",
    onSale: false,
    description: "Your favorite Sport Knit Pants in supple knit corduroy.",
    imageUrl: "/shopImages/gold.jpeg",
    price: 85.0,
  },
  {
    style: "Cool Cats",
    forWhom: "Kids",
    onSale: true,
    description: "Corduroys that will make your kids WAY cooler than you",
    imageUrl: "/shopImages/kids2.jpeg",
    price: 40.0,
  },
  {
    style: "Cord Shorts",
    forWhom: "Women",
    onSale: true,
    description: "Corduroy shorts with enough pockets fpr all of your essentials!",
    imageUrl: "/shopImages/shorts.jpeg",
    price: 65.0,
  },
  {
    style: "Overall Cords",
    forWhom: "Kids",
    onSale: false,
    description: "A overall for the coolest kid on the block",
    imageUrl: "/shopImages/kidsoverall.jpeg",
    price: 85.0,
  },
];
const buttonEvents = () => {
  if (document.getElementById('shop')) {
    renderShopCards(shopCardsArray)
    document.getElementById('searchBarInput').addEventListener('keyup', searchFunction)
  }
  if (document.getElementById('reviews')) {
    renderReviews()
  }
  if (document.getElementById('dropdown')) {
    document.getElementById('allButton').addEventListener('click', renderAllCards)
    document.getElementById('mensButton').addEventListener('click', renderMensCards)
    document.getElementById('womensButton').addEventListener('click', renderWomensCards)
    document.getElementById('kidsButton').addEventListener('click', renderKidsCards)
  }

};

const renderShopCards = (array) => {
  let domString = "";
  for (let i = 0; i < array.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="img-container" style="background-image: url(${array[i].imageUrl})">
    </div>
    <div class="card-body">
      <h3 class="card-title">${array[i].style}</h3>
      <p class="card-text">${array[i].description}</p>
      <h5 class="card-price">$${array[i].price}</h5>
    </div>
  </div>
  `;
  }
  printToDom("shopCardsSection", domString);
};
const renderMensCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === 'Men') {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
      <div class="card-body">
        <h3 class="card-title">${shopCardsArray[i].style}</h3>
        <p class="card-text">${shopCardsArray[i].description}</p>
        <h5 class="card-price">$${shopCardsArray[i].price}</h5>
      </div>
    </div>
    `;
    }
    printToDom("shopCardsSection", domString);
  }

}
const renderWomensCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === 'Women') {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
    }
    printToDom("shopCardsSection", domString);
  }

}
const renderKidsCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === 'Kids') {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
    }
    printToDom("shopCardsSection", domString);
  }

}
const renderAllCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
    }
    printToDom("shopCardsSection", domString);
  }

const reviewsArray = [
  {
    name: "John Wayne",
    product: "classic pants",
    rating: 5,
    product: "Corduroys",
    comment: "Hey Pawdna. I love them.",
    avatar: "10.jpg"
  },
  {
    name: "Gayle Davis",
    rating: 3,
    product: "Corduroys",
    comment: "Could've been better.",
    avatar: "12.jpg"
  },
  {
    name: "Nell Oday",
    rating: 5,
    product: "Corduroys",
    comment: "Best I ever got.",
    avatar: "8.jpeg"
  },
  {
    name: "Gabby Hayes",
    rating: 2,
    product: "Corduroys",
    comment: "I would've given three stars but the service wasn't good either.",
    avatar: "5.jpg"
  }

];

const renderReviews = () => {
  let domString = "";
  for (let i = 0; i < reviewsArray.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="images/reviewAvatars/${reviewsArray[i].avatar}" class="card-img-top" alt="">
    <div class="card-body">
      <h3 class="card-title">${reviewsArray[i].name}</h3>
      <p class="card-text">${reviewsArray[i].product}</p>
      <h5 class="card-price">${reviewsArray[i].comment}</h5>
      <div class="row lead">
        <div id="stars" class="starrr"></div>
        You gave a rating of <span id="count">${reviewsArray[i].rating}</span> star(s)
      </div>
    </div>
  </div>
  `;
  }
  printToDom("reviewsSection", domString);
};

const searchFunction = (e)=>{
  const searchId = e.target.value.toLowerCase()
  const filteredPants = shopCardsArray.filter((shopCardsArray) => {
    return (shopCardsArray.style.toLowerCase().includes(searchId) || shopCardsArray.description.toLowerCase().includes(searchId)
    )
  })
  renderShopCards(filteredPants)
}




const init = () => {
  renderNavbar();
  buttonEvents();

};

init();
