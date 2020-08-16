# Week 5 - PANTS GROUP PROJECT
This was a collaborative effort to design a faux page displaying/selling a style of pants of our choice

## Motivation
The motivation behind this project was mainly to focus on the process of working in a group setting and planning appropriately for a big project. We wanted to make sure every step was planned out and that we worked together to achieve our end goal. We wanted to incorporate the use of wireframes, github project boards and the process of assigning and completing issue tickets.

## Build status
MVP complete, Just styling at this point

## Code Style
Vanilla Javascript ES6, HTML5, CSS3

## Screenshots
<img width="1264" alt="Screen Shot 2020-08-16 at 1 31 53 PM" src="https://user-images.githubusercontent.com/66916708/90341386-ed893e00-dfc4-11ea-898c-47e0d705182b.png">

<img width="1257" alt="Screen Shot 2020-08-16 at 1 32 05 PM" src="https://user-images.githubusercontent.com/66916708/90341395-fd088700-dfc4-11ea-825b-65f41b8fc238.png">

## Wireframe
https://www.figma.com/file/Zs4S6PVSQfUayPipagkaR5/Pants-Project?node-id=234746%3A463

## Features
This site features an image carosel of "on Sale" pants, Search functionality in the shop, The ability to add to the shop and reviews, and it's all run from a single JS page

## Code Example
```             // SHOP FUNCTIONALITY
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
```
## The Team
[Chris LoJacono](https://github.com/chrislojacono)
[Stephen Freeny](https://github.com/Srfreeny)
[Will Koptheimer](https://github.com/willkotheimer)
[Summer Duke](https://github.com/esrduke95)
