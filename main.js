const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

const reviewsArray = [
  {
    "name": "Alexander Solzenezen",
    "product": "classic pants",
    "rating": "5",
    "product": "Corduroys",
    "comment": "I love them."
  },
  {
    "name": "John Steinback",
    "product": "classic pants",
    "rating": "3",
    "product": "Corduroys",
    "comment": "Could've been better."
  },
  {
    "name": "William Faulkner",
    "product": "classic pants",
    "rating": "2",
    "product": "Corduroys",
    "comment": "I would've given three stars but the service wasn't good either."
  },
  {
    "name": "Djuna Barnes",
    "product": "classic pants",
    "rating": "5",
    "product": "Corduroys",
    "comment": "Best I ever got."
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
  </nav>`
  printToDom('navbar', domString)

}

const init = () => {
  renderNavbar();
}

init();