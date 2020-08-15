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
    style: "Forester Corduroys",
    forWhom: "Kids",
    onSale: true,
    description: "A overall for the coolest kid on the block",
    imageUrl: "/shopImages/kidsgreen.jpeg",
    price: 34.99,
  },
  {
    style: "Shade Of Brown",
    forWhom: "Men",
    onSale: true,
    description:
      "Featuring a slim and straight fit with a medium rise and a straight leg, the men's cord jeans offer a tailored take on a classic cord, topping it off with signature trims.",
    imageUrl: "/shopImages/shadeofbrown.jpg",
    price: 39.99,
  },
  {
    style: "The Party Pants",
    forWhom: "Women",
    onSale: false,
    description:
      "The ultimate part pants. Instantly become the life of the party with these rockin corduroys",
    imageUrl: "/shopImages/partypants.jpeg",
    price: 99.99,
  },
  {
    style: "Cowboy's Overall",
    forWhom: "Men",
    onSale: true,
    description:
      "The rowdiest overalls in all the west. From horseback to stick-ups at the bank, these corduroys will do it all!",
    imageUrl: "/shopImages/cowboy.jpg",
    price: 33.99,
  },
  {
    style: "Womens Mid Rise",
    forWhom: "Women",
    onSale: false,
    description: "A figure-balancing shape in soft-yet-substantial corduroy.",
    imageUrl: "/shopImages/wmidrise.jpeg",
    price: 65.99,
  },
  {
    style: "The Johna Wayne",
    forWhom: "Women",
    onSale: false,
    description:
      "The ultimate ribcage cord flare jean in camel. Ready to take over the wild west!",
    imageUrl: "/shopImages/womensbrown.jpeg",
    price: 44.99,
  },
  {
    style: "Wild West Corduroys",
    forWhom: "Women",
    onSale: true,
    description:
      "Saying, cute, comfortable, and durable pants, doesn't have to mean three different pairs.",
    imageUrl: "/shopImages/fittedwomens.jpg",
    price: 45.99,
  },
  {
    style: "Root Tootin Roys",
    forWhom: "Women",
    onSale: false,
    description: "Your favorite Sport Knit Pants in supple knit corduroy.",
    imageUrl: "/shopImages/gold.jpeg",
    price: 81.99,
  },
  {
    style: "Oregon Trail Roys",
    forWhom: "Kids",
    onSale: false,
    description: "If these corduroys can survive the oregon trail, then so can you!",
    imageUrl: "/shopImages/oregontrail.jpg",
    price: 85.99,
  },
  {
    style: "Navy Cords",
    forWhom: "Kids",
    onSale: true,
    description: "A cool Navy blue, with functional pockets and a style that everyone will enjoy",
    imageUrl: "/shopImages/navymens.jpeg",
    price: 25.99,
  },
  {
    style: "The Classic",
    forWhom: "Men",
    onSale: false,
    description:
      "Throwback cord and modern cut meet in the daggers pigment corduroy jeans.",
    imageUrl: "/shopImages/classiccorduroy.jpg",
    price: 69.99,
  },
  {
    style: "Cool Cats",
    forWhom: "Kids",
    onSale: true,
    description: "Corduroys that will make your kids WAY cooler than you",
    imageUrl: "/shopImages/kids2.jpeg",
    price: 39.99,
  },
  {
    style: "Cord Shorts",
    forWhom: "Women",
    onSale: true,
    description: "Corduroy shorts with enough pockets fpr all of your essentials!",
    imageUrl: "/shopImages/shorts.jpeg",
    price: 64.99,
  },
  {
    style: "Real Teal",
    forWhom: "Men",
    onSale: false,
    description:
      "Designed with 5-pocket denim styling, details include a zip fly with a metal button closure, coin pocket at the left hip and metal rivets at the pockets.",
    imageUrl: "/shopImages/realteal.jpg",
    price: 59.99,
  },
  {
    style: "Overall Cords",
    forWhom: "Kids",
    onSale: false,
    description: "A overall for the coolest kid on the block",
    imageUrl: "/shopImages/kidsoverall.jpeg",
    price: 85.99,
  },
];
const buttonEvents = () => {
  if (document.getElementById('shop')) {
    renderShopCards(shopCardsArray)
    document.getElementById('searchBarInput').addEventListener('keyup', searchFunction)
  }
  if (document.getElementById('reviews')) {
    renderReviews();
    document.getElementById('addReview').addEventListener('click', reviewsForm);
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

const reviewsForm = () => {
  let reviewsFormTemplate = "";
  let avatarInputs = "";


  avatarInputs += `
  <form class="avatar" id="avatar">
    <input id="1" type="radio" name="avatar1" value="1" />
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
  <form id="reviewForm">
  <label for="avatar">Please choose an avatar:</label>
  <div class="form-check">
  ${avatarInputs}
  </div>
  
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Name">
  </div>
  <div class="form-group">
    <label for="product">Product Name</label>
    <input type="text" class="form-control" id="product" placeholder="Corduroys">
  </div>
  <div class="form-group">
  <label for="exampleFormControlSelect2">Give a star rating</label>
  <select class="form-control" id="numberOfStars">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>
<div class="form-group">
  <label for="exampleFormControlTextarea1">Comment</label>
  <textarea class="form-control" id="comment" rows="3"></textarea>
</div>
</form>
  <button type="submit" id="submit" class="btn btn-primary">Submit</button>
</form>
  `;

  printToDom("reviewFormDiv", reviewsFormTemplate);
  document.getElementById("submit").addEventListener('click', getReviewInfo);
  document.getElementById("reviewForm").addEventListener('click', addClicksToRadios);


}


const addClicksToRadios = (e) => {
  let classes = e.target.className;
  let radioClass = classes.replace("avatarStyle avatar-", "");
  var ele = document.getElementsByTagName('input');
  document.getElementById(radioClass).checked = true;
  if (radioClass != 1) {
    document.getElementById(1).checked = false;
  };



}


const getReviewInfo = (e) => {
  e.preventDefault();
  let buttonId = e.target.id;
  if (buttonId === "submit") {
    var ele = document.getElementsByTagName('input');

    //If select comes out as 3 it is 4, if 0 it is 1
    let rating = document.getElementById('numberOfStars').selectedIndex + 1;
    let avatar;
    // LOOP THROUGH EACH ELEMENT.


    let product = document.getElementById("product").value;

    let name = document.getElementById("name").value;


    for (i = 0; i < ele.length; i++) {

      if (ele[i].type == 'radio' && ele[i].checked) {
        console.log(ele[i].checked);
        avatar = `${ele[i].id}.jpg`;
      }
      // CHECK THE ELEMENT TYPE.



    }
    let comment = document.getElementById("comment").value;
    console.log("All the values current:")
    console.log(name, product, rating, avatar, comment);
    reviewsArray.push({
      name: name,
      rating: rating,
      product: product,
      comment: comment,
      avatar: avatar
    });

  }


  // Make on submit event listener and clear form and renderReviews();
};

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

const searchFunction = (e) => {
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
