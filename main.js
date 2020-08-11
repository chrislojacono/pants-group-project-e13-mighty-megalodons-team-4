const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

const renderNavbar = () => {
  domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
    price: 60.00
  },
  {
    style: "Shade Of Brown",
    forWhom: "Men",
    onSale: true,
    description:
      "Featuring a slim and straight fit with a medium rise and a straight leg, the men's cord jeans offer a tailored take on a classic cord, topping it off with signature trims.",
    imageUrl: "/shopImages/shadeofbrown.jpg",
    price: 40.00
  },
  {
    style: "The Classic",
    forWhom: "Men",
    onSale: false,
    description:
      "Throwback cord and modern cut meet in the daggers pigment corduroy jeans.",
    imageUrl: "/shopImages/classiccorduroy.jpg",
    price: 70.00
  },
  {
    style: "Womens Mid Rise",
    forWhom: "Women",
    onSale: false,
    description:
      "A figure-balancing shape in soft-yet-substantial corduroy.",
    imageUrl: "/shopImages/wmidrise.jpeg",
    price: 60.00
<<<<<<< HEAD
  },
  {
    style: "The Johna Wayne",
    forWhom: "Women",
    onSale: false,
    description:
      "The ultimate ribcage cord flare jean in camel. Ready to take over the wild west!",
    imageUrl: "/shopImages/womensbrown.jpeg",
    price: 85.00
  },
  {
    style: "Wild West Corduroys",
    forWhom: "Women",
    onSale: true,
    description:
      "Saying, cute, comfortable, and durable pants, doesn't have to mean three different pairs.",
    imageUrl: "/shopImages/fittedwomens.jpg",
    price: 45.00
  },
  {
=======
  },
  {
    style: "The Johna Wayne",
    forWhom: "Women",
    onSale: false,
    description:
      "The ultimate ribcage cord flare jean in camel. Ready to take over the wild west!",
    imageUrl: "/shopImages/womensbrown.jpeg",
    price: 85.00
  },
  {
    style: "Wild West Corduroys",
    forWhom: "Women",
    onSale: true,
    description:
      "Saying, cute, comfortable, and durable pants, doesn't have to mean three different pairs.",
    imageUrl: "/shopImages/fittedwomens.jpg",
    price: 45.00
  },
  {
>>>>>>> master
    style: "Wild West Corduroys",
    forWhom: "Women",
    onSale: true,
    description:
      "Your favorite Sport Knit Pants in supple knit corduroy.",
    imageUrl: "/shopImages/wsportknit.jpeg",
    price: 45.00
<<<<<<< HEAD
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
=======
>>>>>>> master
  },
];
const buttonEvents = () => {
  if (document.getElementById('shop')) {
    renderShopCards()
  }
  if (document.getElementById('reviews')) {
    renderReviews()
  }
  if (document.getElementById('dropdown')) {
    document.getElementById('allButton').addEventListener('click', renderShopCards)
    document.getElementById('mensButton').addEventListener('click', renderMensCards)
    document.getElementById('womensButton').addEventListener('click', renderWomensCards)
    document.getElementById('kidsButton').addEventListener('click', renderKidsCards)
  }
}

const buttonEvents = ()=> {
  if(document.getElementById('shop')){
    renderShopCards()
  }
  if(document.getElementById('dropdown')){
    document.getElementById('allButton').addEventListener('click', renderShopCards)
   document.getElementById('mensButton').addEventListener('click', renderMensCards)
   document.getElementById('womensButton').addEventListener('click', renderWomensCards)
   document.getElementById('kidsButton').addEventListener('click', renderKidsCards)
  }
}

const renderShopCards = () => {
<<<<<<< HEAD
  
=======

>>>>>>> master
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${shopCardsArray[i].imageUrl}" class="card-img-top" alt="corduroy ">
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
  }
  printToDom("shopCardsSection", domString);

};
const renderMensCards = () => {
<<<<<<< HEAD
    let domString = "";
    for (let i = 0; i < shopCardsArray.length; i++) {
      if(shopCardsArray[i].forWhom === 'Men'){
=======
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === 'Men') {
>>>>>>> master
      domString += `<div class="card" style="width: 18rem;">
      <img src="${shopCardsArray[i].imageUrl}" class="card-img-top" alt="corduroy ">
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
<<<<<<< HEAD
  
=======

>>>>>>> master
}
const renderWomensCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
<<<<<<< HEAD
    if(shopCardsArray[i].forWhom === 'Women'){
    domString += `<div class="card" style="width: 18rem;">
=======
    if (shopCardsArray[i].forWhom === 'Women') {
      domString += `<div class="card" style="width: 18rem;">
>>>>>>> master
    <img src="${shopCardsArray[i].imageUrl}" class="card-img-top" alt="corduroy ">
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
<<<<<<< HEAD
  }
  printToDom("shopCardsSection", domString);
}
=======
    }
    printToDom("shopCardsSection", domString);
  }
>>>>>>> master

}
const renderKidsCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
<<<<<<< HEAD
    if(shopCardsArray[i].forWhom === 'Kids'){
    domString += `<div class="card" style="width: 18rem;">
=======
    if (shopCardsArray[i].forWhom === 'Kids') {
      domString += `<div class="card" style="width: 18rem;">
>>>>>>> master
    <img src="${shopCardsArray[i].imageUrl}" class="card-img-top" alt="corduroy ">
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
<<<<<<< HEAD
  }
  printToDom("shopCardsSection", domString);
}

}
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
  
  buttonEvents();
=======
    }
    printToDom("shopCardsSection", domString);
  }

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
  printToDom("reviews", domString);
};




const init = () => {
  renderNavbar();
  buttonEvents();

>>>>>>> master
};

init();
