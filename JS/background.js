const images = ["IMG_3534.JPG", "IMG_3537.JPG", "IMG_5446.JPG"];

const chosenimage = images[Math.floor((Math.random()*images.length))];
const bgimage = document.createElement("img");

bgimage.src = `IMG/${chosenimage}`;

document.body.appendChild(bgimage);