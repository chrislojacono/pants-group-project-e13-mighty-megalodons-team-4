"use strict";
const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};
// GLOBAL ITEMS NAVBAR/FOOTER
const renderLogo = () => {
  let domString = `<div class="logo d-flex">
  <img class="logoImage" src=/images/KIDROCKS.png alt="Sweet Logo">
  </div>`;
  printToDom("headerLogo", domString);
};

const renderNavbar = () => {
  let domString = `<nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-link index-link" href="/index.html">Home <span class="sr-only">(current)</span></a>
        <a id="shopsAll" class="nav-link  shops-link" href="/shop.html">Shop</a>
        <a class="nav-link bios-link" href="/bios.html">About Us</a>
        <a class="nav-link reviews-link" href="/reviews.html">Reviews</a>
        <a class="nav-link order-link" href="/order.html">Order</a>
        
      </div>
    </div>
  </nav>`;
  printToDom("navbar", domString);
};

const renderFooter = () => {
  let domString = `<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input id="emailInput" class="form-control mr-sm-2" type="search" placeholder="Enter your Email" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" id="email" type="submit">Subscribe</button>
  </form>
</nav>`;
  printToDom("footerInput", domString);
};
const renderShopFooter = () => {
  let domString = `<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
  <input id="emailInput" class="form-control mr-sm-2" type="search" placeholder="Enter your Email" aria-label="Search">
  <button class="btn btn-outline-success my-2 my-sm-0" id="email" type="submit">Subscribe</button>
  </form>
  <div id="contact"><button type="button" class="btn btn-info btn" data-toggle="modal" data-target="#contact-modal">Add Your Corduroys To the Shop!</button></div>
  <div id="contact-modal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <a class="close" data-dismiss="modal">×</a>
      <h3>Corduroy Info</h3>
    </div>
  <form id="contactForm" name="contact" role="form">
    <div class="modal-body">				
      <div class="form-group">
        <label for="name">Style of pants</label>
        <input id="styleInput" type="text" name="style" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Mens/Womens/Kids</label>
        <input id="forWhomInfo" type="text" name="mens/womens" class="form-control">
      </div>
      <div class="form-group">
        <label for="message">Price(Just enter a number value)</label>
        <input id="priceInfo" type="text" name="price" class="form-control">			
      </div>
      <div class="form-group">
        <label for="message">Copy Image Address</label>
        <input id="imageAddress" type="text" name="url" class="form-control">			
      </div>
      <div class="form-group">
        <label for="message">Description</label>
        <input id="descriptionInput" type="text" name="description" class="form-control">			
      </div>
      <div class="modal-footer">					
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button id="addCardToShopButton" class="btn btn-success" data-dismiss="modal">Add to Shop</button> 
      </div>
  </div>
  </form>
</div>
</div>
</nav>`;
  printToDom("shopFooterInput", domString);
};

const shopCardsArray = [
  {
    style: "Womens Mid Rise",
    forWhom: "Women",
    onSale: true,
    description:
      "A figure-balancing shape in soft-yet-substantial corduroy. Perfect for anyone",
    imageUrl: "/shopImages/dogtown.jpeg",
    price: 65.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },
  {
    style: "Forester Corduroys",
    forWhom: "Kids",
    onSale: false,
    description: "An overall for the coolest kid on the block",
    imageUrl: "/shopImages/newforest.jpg",
    price: 34.99,
    size: [" Small ", " Medium ", " Large"],
  },
  {
    style: "Shade Of Brown",
    forWhom: "Men",
    onSale: false,
    description:
      "Featuring a slim and straight fit with a medium rise and a straight leg, the men's cord jeans offer a tailored take on a classic cord, topping it off with signature trims.",
    imageUrl: "/shopImages/betterpic.jpg",
    price: 39.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },

  {
    style: "The Party Pants",
    forWhom: "Women",
    onSale: false,
    description:
      "The ultimate party pants. Instantly become the life of the party with these rockin corduroys featuring a classic bellbottom style.",
    imageUrl: "/shopImages/bellbottom.jpg",
    price: 99.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },
  {
    style: "Cowboy's Overall",
    forWhom: "Men",
    onSale: true,
    description:
      "The rowdiest overalls in all the west. From horseback to stick-ups at the bank, these corduroys will do it all!",
    imageUrl: "/shopImages/cowboy.jpg",
    price: 33.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },

  {
    style: "The Johna Wayne",
    forWhom: "Women",
    onSale: true,
    description:
      "The ultimate ribcage cord flare jean in camel. Ready to take over the wild west!",
    imageUrl: "/shopImages/womensbrown.jpeg",
    price: 44.99,
    size: [" XS ", " Small ", " Medium ", " Large "],
  },
  {
    style: "Wild West Corduroys",
    forWhom: "Women",
    onSale: true,
    description:
      "Saying, cute, comfortable, and durable pants, doesn't have to mean three different pairs. DOn't miss out!",
    imageUrl: "/shopImages/fittedwomens.jpg",
    price: 45.99,
    size: [" Small ", " Medium ", " Large"],
  },
  {
    style: "The Casual Corduroys",
    forWhom: "Men",
    onSale: true,
    description:
      "The Corduroys that are perfect for just kicking back and relaxing! Where these after a long day at work for the ultimate comfort feel.",
    imageUrl: "/shopImages/elastic.jpg",
    price: 45.99,
    size: [" Small ", " Medium ", " Large"],
  },
  {
    style: "Root Tootin Roys",
    forWhom: "Women",
    onSale: false,
    description:
      "Your favorite Sport Knit Pants in supple knit corduroy. Comfortable and cool.",
    imageUrl: "/shopImages/roottootin2.jpg",
    price: 81.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },
  {
    style: "Oregon Trail Roys",
    forWhom: "Kids",
    onSale: false,
    description:
      "If these corduroys can survive the oregon trail, then so can you!",
    imageUrl: "/shopImages/oregontrail.jpg",
    price: 85.99,
    size: [" Small ", " Medium ", " Large "],
  },
  {
    style: "Navy Cords",
    forWhom: "Kids",
    onSale: true,
    description:
      "A cool Navy blue, with functional pockets and a style that everyone will enjoy",
    imageUrl: "/shopImages/navymens.jpeg",
    price: 25.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },
  {
    style: "The Classic",
    forWhom: "Men",
    onSale: false,
    description:
      "Throwback cord and modern cut meet in the daggers pigment corduroy jeans.",
    imageUrl: "/shopImages/newclassic.jpeg",
    price: 69.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },
  {
    style: "Cool Cats",
    forWhom: "Kids",
    onSale: false,
    description:
      "Corduroys that will make your kids WAY cooler than you. You have been warned.",
    imageUrl: "/shopImages/kidscords22.jpg",
    price: 39.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },
  {
    style: "Cord Shorts",
    forWhom: "Women",
    onSale: false,
    description:
      "Corduroy shorts with enough pockets fpr all of your essentials!",
    imageUrl: "/shopImages/cordshorts2.jpg",
    price: 64.99,
    size: [" Small ", " Medium ", " XL "],
  },
  {
    style: "Real Teal",
    forWhom: "Men",
    onSale: false,
    description:
      "Designed with 5-pocket denim styling, details include a zip fly with a metal button closure, coin pocket at the left hip and metal rivets at the pockets.",
    imageUrl: "/shopImages/realteal.jpg",
    price: 59.99,
    size: [" Medium ", " Large ", " XL "],
  },
  {
    style: "Overall Cords",
    forWhom: "Kids",
    onSale: false,
    description: "An overall with jersery knit lining for the coolest kid on the block.",
    imageUrl: "/shopImages/jersey.jpg",
    price: 85.99,
    size: [" Small ", " Medium ", " Large ", " XL "],
  },
];

const bioCardArray = [
  {
    photo: "/images/Dalton_Wilcox.jpg",
    name: "Captain Yeehaw",
    title: "Captain Corduroy",
    bio:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
  },
  {
    photo: "/images/ClintEastwood.jpg",
    name: "Corduroy Chris",
    title: "Chief Corduroy Officer",
    bio:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
  {
    photo: "/images/ChuckNorris.png",
    name: "Rootin Tootin Ralph",
    title: "Security",
    bio:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
  },
  {
    photo: "/images/hobbyhorse.jpg",
    name: "Sammy Sheriff",
    title: "Head of Marketing",
    bio:
      "User generated content in real-time will have multiple touchpoints for offshoring.",
  },
];
// ALL CLICKS AND SINGLE PAGE FUNCTION CALLS
const buttonEvents = () => {
  if (document.getElementById("shop")) {
    document.querySelector(".shops-link").style.backgroundColor = '#B09182';
    renderShopCards(shopCardsArray);

    renderShopFooter();

    document
      .getElementById("searchBarInput")
      .addEventListener("keyup", searchFunction);
    document
      .getElementById("shopFooterInput")
      .addEventListener("click", captureNewProduct);
    document
      .getElementById("shopFooterInput")
      .addEventListener("click", renderAllCards);
    document
      .getElementById("shopFooterInput")
      .addEventListener("click", alertUser);
  }
  if (document.getElementById("reviews")) {
    renderReviews();
    renderReviewForm();
    renderFooter();
    document.querySelector(".reviews-link").style.backgroundColor = '#B09182';
    document.getElementById("footerInput").addEventListener("click", alertUser);
  }
  if (document.getElementById("bioPage")) {
    renderBioCards();
    renderFooter();
    document.querySelector(".bios-link").style.backgroundColor = '#B09182';
    document.getElementById("footerInput").addEventListener("click", alertUser);
  }
  if (document.getElementById("homePage")) {
    renderFooter();
    onSaleCarosel();
    document.querySelector(".index-link").style.backgroundColor = '#B09182';
    document.getElementById("footerInput").addEventListener("click", alertUser);
  }
  if (document.getElementById("dropdown")) {
    document
      .getElementById("allButton")
      .addEventListener("click", renderAllCards);
    document
      .getElementById("mensButton")
      .addEventListener("click", renderMensCards);
    document
      .getElementById("womensButton")
      .addEventListener("click", renderWomensCards);
    document
      .getElementById("kidsButton")
      .addEventListener("click", renderKidsCards);
  }
  if (document.getElementById("orderPage")) {
    renderFooter();
    document.querySelector(".order-link").style.backgroundColor = '#B09182';
    document.getElementById("footerInput").addEventListener("click", alertUser);
  }
  
  if (document.getElementById('orderButtons')) {
    document.getElementById('calculateButton').addEventListener('click', calculateTotal);
    document.getElementById('submitButton').addEventListener('click', submitOrderForm);
  };

}

const alertUser = (e) => {
  const buttonType = e.target.id;
  let emailInput1 = document.getElementById("emailInput").value;
  if (buttonType === "email") {
    if (emailInput1 === "") {
      alert("Please enter an E-mail!");
    } else {
      alert("Thank you for subscribing");
    }
  }
};

// HOMEPAGE CAROSEL
const onSaleCarosel = () => {
  let domString = "";
  let saleBoolean = true
  domString += `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">`;

  for (let i = 0; i < shopCardsArray.length; i++) {

    if (shopCardsArray[i].onSale && saleBoolean) {
      domString += `<div class="carousel-item active">
                      <img class="d-block w-100" src="${shopCardsArray[i].imageUrl}" alt="First slide">
                    </div>`;

      saleBoolean = false;
    } else if (shopCardsArray[i].onSale) {
      domString += `<div class="carousel-item">
                      <img class="d-block w-100" src="${shopCardsArray[i].imageUrl}" alt="First slide">
                    </div>`;
    }

  }

  domString += `</div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`;
  printToDom("onSale", domString);
};
// SHOP PAGE
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
      <div class="dropdownCard">
      <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sizes
      </button>
      <div id="sizeDropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      ${array[i].size}
      </div>
      </div>
    </div>
  </div>
  `;
  }

  printToDom("shopCardsSection", domString);
};
const renderMensCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === "Men") {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
      <div class="card-body">
        <h3 class="card-title">${shopCardsArray[i].style}</h3>
        <p class="card-text">${shopCardsArray[i].description}</p>
        <h5 class="card-price">$${shopCardsArray[i].price}</h5>
        <div class="dropdownCard">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sizes
        </button>
        <div id="sizeDropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        ${shopCardsArray[i].size}
        </div>
        </div>
      </div>
    </div>
    `;
    }
    printToDom("shopCardsSection", domString);
  }
};
const renderWomensCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === "Women") {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
      <div class="card-body">
        <h3 class="card-title">${shopCardsArray[i].style}</h3>
        <p class="card-text">${shopCardsArray[i].description}</p>
        <h5 class="card-price">$${shopCardsArray[i].price}</h5>
        <div class="dropdownCard">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sizes
        </button>
        <div id="sizeDropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        ${shopCardsArray[i].size}
        </div>
        </div>
      </div>
    </div>
    `;
    }
    printToDom("shopCardsSection", domString);
  }
};
const renderKidsCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === "Kids") {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
      <div class="card-body">
        <h3 class="card-title">${shopCardsArray[i].style}</h3>
        <p class="card-text">${shopCardsArray[i].description}</p>
        <h5 class="card-price">$${shopCardsArray[i].price}</h5>
        <div class="dropdownCard">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sizes
        </button>
        <div id="sizeDropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        ${shopCardsArray[i].size}
        </div>
        </div>
      </div>
    </div>
    `;
    }
    printToDom("shopCardsSection", domString);
  }
};
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
      <div class="dropdownCard">
      <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sizes
      </button>
      <div id="sizeDropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      ${shopCardsArray[i].size}
      </div>
      </div>
    </div>
  </div>
  `;
  }
  printToDom("shopCardsSection", domString);
};

//ORDER FORM JS

const populateForm = () => {
  const selectStyle = document.getElementById('selectStyle');
  const selectSize = document.getElementById('selectSize');
  const selectColor = document.getElementById('selectColor');
  const selectQuantity = document.getElementById('selectQuantity');
    
    for (let i = 0; i < shopCardsArray.length; i++) {
      let option = document.createElement("OPTION"),
        txt = document.createTextNode(shopCardsArray[i].style);
      option.appendChild(txt);
      selectStyle.insertBefore(option, selectStyle.lastChild);

      // switch(formPopulation) {
        
      // }
      
      // const input = document.querySelector('input');
      // const log = document.getElementById('calcTotal');
      
      // input.addEventListener('input', updateValue);
      // function updateValue(e) {
      //   log.textContent = e.target.value;
      // }
  }
}

// selectElement.addEventListener('change', (event) => {
//   const result = document.querySelector('selectSize');
//   result.textContent = `You like ${event.target.value}`;
// });

const canPopulateForm = () => {
  if (document.getElementById('orderForm')) {
    populateForm();
  }
}

const submitOrderForm = (event) => {
  document.getElementById('orderForm').reset();
  alert('Thank you for your order!');
};


const calculateTotal = (event) => {
  
}


//  REVIEW SECTION
const reviewsArray = [
  {
    name: "John Wayne",
    product: "classic pants",
    rating: 5,
    product: "Corduroys",
    comment: "Hey Pawdna. I love them.",
    avatar: "10.jpg",
  },
  {
    name: "Gayle Davis",
    rating: 3,
    product: "Corduroys",
    comment: "Could've been better.",
    avatar: "12.jpg",
  },
  {
    name: "Nell Oday",
    rating: 5,
    product: "Corduroys",
    comment: "Best I ever got.",
    avatar: "8.jpg"
  },
  {
    name: "Gabby Hayes",
    rating: 2,
    product: "Corduroys",
    comment: "I would've given three stars but the service wasn't good either.",
    avatar: "5.jpg",
  },
];

const renderReviewForm = () => {
  let reviewsFormTemplate = "";
  let avatarInputs = "";

  avatarInputs += `
  <form class="avatar" id="avatar">
    <input id="1" type="radio" name="avatar" value="1" checked="checked" />
    <label class="avatarStyle avatar-1" for="avatar"></label>
    <input id="2" type="radio" name="avatar" value="2" />
    <label class="avatarStyle avatar-2"for="avatar"></label>
    <input  id="3" type="radio" name="avatar" value="3" />
    <label class="avatarStyle avatar-3" for="avatar"></label>
    <input id="4" type="radio" name="avatar" value="4" />
    <label class="avatarStyle avatar-4" for="avatar"></label>
    <input  id="5" type="radio" name="avatar" value="5" />
    <label class="avatarStyle avatar-5" for="avatar"></label>
    <input id="6" type="radio" name="avatar" value="6" />
    <label class="avatarStyle avatar-6" for="avatar"></label>
    <input  id="7" type="radio" name="avatar" value="7" />
    <label class="avatarStyle avatar-7" for="avatar"></label>
    <input id="8" type="radio" name="avatar" value="8" />
    <label class="avatarStyle avatar-8" for="avatar"></label>
    <input  id="9" type="radio" name="avatar" value="9" />
    <label class="avatarStyle avatar-9" for="avatar"></label>
    <input id="10" type="radio" name="avatar" value="10" />
    <label class="avatarStyle avatar-10" for="avatar"></label>
    <input  id="11" type="radio" name="avatar" value="11" />
    <label class="avatarStyle avatar-11" for="avatar"></label>
    <input id="12" type="radio" name="avatar" value="12" />
    <label class="avatarStyle avatar-12"for="avatar"></label>
    </form>
    
    `;

  reviewsFormTemplate = `
  
    <form id="reviewForm" class="reviewsInput">
    <h5 class="reviews-titles">Give your own review!</h5>
    <h6 class="reviews-titles">To start, choose an avatar:</h6>
    <div class="form-check reviewsInput">
    ${avatarInputs}
    </div>
    <div class="form-group reviewsInput">
    <h6 class="reviews-titles">Now we'll just be requesting a little information...</h6></label>
    </div>
    <div class="form-group reviewsInput">
      <label for="name">Name</label>
      <input type="text" class="form-control input-group" id="name" aria-describedby="name" placeholder="Enter Name">
    </div>
    
    <div class="form-group reviewsInput">
      <label for="product">Product Name</label>
      <input type="text" class="form-control" id="product" placeholder="Corduroys">
    </div>
    <div class="form-group reviewsInput">
    <label for="exampleFormControlSelect2">Give a star rating</label>
    <select class="form-control" id="numberOfStars">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="container">
    <span id="rateMe4"  class="feedback"></span>
  </div>
  <div class="form-group reviewsInput">
    <label for="exampleFormControlTextarea1">Comment</label>
    <textarea class="form-control" id="comment" rows="3" placeholder="Describe your experience:"></textarea>
  </div>
  <div class="form-group reviewsInput">
  <button type="submit" id="submit" class="btn btn-primary">Submit</button>
  </div>
  <div class="shim"></div>
  </form>
    `;


  printToDom("reviewFormDiv", reviewsFormTemplate);
  document.getElementById("submit").addEventListener("click", getReviewInfo);
  document
    .getElementById("reviewForm")
    .addEventListener("click", addClicksToRadios);
};

const addClicksToRadios = (e) => {
  let classes = e.target.className;
  console.log(classes);
  let radioClass = classes.replace("avatarStyle avatar-", "");
  //var ele = document.getElementsByTagName('input');
  document.getElementById(radioClass).checked = true;
  console.log(document.getElementById(radioClass));
}

const getReviewInfo = (e) => {
  e.preventDefault();
  let buttonId = e.target.id;
  if (buttonId === "submit") {
    var ele = document.getElementsByTagName('input');
    let rating = document.getElementById('numberOfStars').selectedIndex + 1;
    let avatar;
    let product = document.getElementById("product").value;
    let name = document.getElementById("name").value;
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].type == 'radio' && ele[i].checked) {
        console.log(ele[i].checked);
        avatar = `${ele[i].id}.jpg`;
      }
    }
    let comment = document.getElementById("comment").value;
    reviewsArray.push({
      name: name,
      rating: rating,
      product: product,
      comment: comment,
      avatar: avatar,
    });

    //clear values:
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].type == 'radio' && ele[i].checked) {
        ele[i].checked = false;
      }
    }
    document.getElementById("name").value = '';
    document.getElementById("product").value = '';
    document.getElementById("numberOfStars").selectedIndex = 0;
    document.getElementById("comment").value = '';
    renderReviews();
  }


};

const renderReviews = () => {
  let starString = "";
  let domString = "";

  for (let i = 0; i < reviewsArray.length; i++) {
    starString += "";
    for (let point = 1; point <= reviewsArray[i].rating; point++) {

      if (point <= reviewsArray[i].rating) {
        starString += `<span class="fa fa-star checked"></span>`;
      } else {
        starString += `<span class="fa fa-star"></span>`;
      }
    }
    domString += `<div class="card" style="width: 14rem;">
    <img src="images/reviewAvatars/${reviewsArray[i].avatar}" class="card-img-top" alt="">
    <div class="card-body">
    <div class="name-product-holder">
      <h4 class="card-title">${reviewsArray[i].name}</h4>
      <div class="card-text">${reviewsArray[i].product}</div>
    </div>
      <div class="rating-container">
      <h5 class="review-comment">${reviewsArray[i].comment}</h5>
      <div class="star-container">
      <div id="rating-title">Rating:</div>
      <div id="stars" class="starrr">${starString}</div>
      </div>
        </div>
    </div>
  </div>
  
  `;
    starString = '';
  }
  printToDom("reviewsSection", domString);

};


// BIO PAGE
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
};
// SHOP FUNCTIONALITY
const searchFunction = (e) => {
  const searchId = e.target.value.toLowerCase();
  const filteredPants = shopCardsArray.filter((shopCardsArray) => {
    return (
      shopCardsArray.style.toLowerCase().includes(searchId) ||
      shopCardsArray.description.toLowerCase().includes(searchId)
    );
  });
  renderShopCards(filteredPants);
};

const captureNewProduct = (e) => {
  let buttonId = e.target.id;
  if (buttonId === "addCardToShopButton") {
    const pantsStyle = document.querySelector("#styleInput").value;
    const forWhomInput = document.querySelector("#forWhomInfo").value;
    const priceInput = document.querySelector("#priceInfo").value;
    const imageInput = document.querySelector("#imageAddress").value;
    const descriptionInput1 = document.querySelector("#descriptionInput").value;
    let newCardObject = {
      style: pantsStyle,
      forWhom: forWhomInput,
      onSale: false,
      description: descriptionInput1,
      imageUrl: imageInput,
      price: priceInput,
    };
    shopCardsArray.push(newCardObject);
  }
};

const init = () => {
  renderNavbar();
  renderLogo();
  buttonEvents();
  canPopulateForm();
  calculateTotal();
};

init();