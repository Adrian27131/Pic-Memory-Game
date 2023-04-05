const section = document.querySelector('section');
const playerTriesCount = document.querySelector ('span');
const playerTries = 3;
playerTriesCount.textContent = playerTries


const getData = () => [{}
  ,{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot1"},
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot2"},  
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot3"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot4"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot5"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot6"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot7"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot8"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot9"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot0"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpotd"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpotd"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot"}, 
{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot"}, 
];
const randomize = () => {
  const cardData = getData();
cardData.sort(() => Math.random() - 0.5);
return cardData;

};

const cardGenerator = () => {
const cardData = randomize ();
cardData.forEach((item) => {
  const card = document.createElement("div")
  const face = document.createElement("img")
  const back = document.createElement("div")
  card.classList = "card";
  face.classList = "face";
  back.classList = "back";
  face.src = item.imgSrc;
section.appendChild(card);
card.appendChild(face);
card.appendChild(back);
});
};

cardGenerator();