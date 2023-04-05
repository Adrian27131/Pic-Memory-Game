const section = document.querySelector('section');
const playerTriesCount = document.querySelector ('span');
const playerTries = 3;
playerTriesCount.textContent = playerTries


const getData = () => [{}
,{ imgSrc: "./images/images/03910032-2.jpg", name: "flowerpot1"},
{ imgSrc: "./images/images/03930028.jpg", name: "Park"},  
{ imgSrc: "./images/images/03930028.jpg", name: "Park"}, 
{ imgSrc: "./images/images/03940030.jpg", name: "Waterfall"}, 
{ imgSrc: "./images/images/03940030.jpg", name: "Waterfall"}, 
{ imgSrc: "./images/images/04450015.jpg", name: "Gravestone"}, 
{ imgSrc: "./images/images/04450015.jpg", name: "Gravestone"}, 
{ imgSrc: "./images/images/04440019.jpg", name: "Hawk"}, 
{ imgSrc: "./images/images/04440019.jpg", name: "Hawk"}, 
{ imgSrc: "./images/images/03930002.jpg", name: "sunset"}, 
{ imgSrc: "./images/images/03930002.jpg", name: "sunset"}, 
{ imgSrc: "./images/images/04440034.jpg", name: "pineapple"}, 
{ imgSrc: "./images/images/04440034.jpg", name: "pineapple"}, 
{ imgSrc: "./images/images/05460013.jpg", name: "Nikon-Me"},  
{ imgSrc: "./images/images/05460013.jpg", name: "Nikon-Me"}, 
];
const randomize = () => {
  const cardData = getData();
cardData.sort(() => Math.random() - 0.5);
return cardData;

};

const cardGenerator = () => {
const cardData = randomize ();
const cards = document.querySelectorAll(".card")
cardData.forEach((item) => {
  const card = document.createElement("div")
  const face = document.createElement("img")
  const back = document.createElement("div")
  card.classList = "card";
  face.classList = "face";
  back.classList = "back";
  face.src = item.imgSrc;
  card.setAttribute('name', item.name);
section.appendChild(card);
card.appendChild(face);
card.appendChild(back);


card.addEventListener('click', (i) => {
card.classList.toggle('toggleCard');
checkCards(i);
});
});
};
const checkCards = (i) => {
  const clickedCard = i.target;
  clickedCard.classList.add("flipped");
  const flippedCard = document.querySelectorAll (".flipped")
if (flippedCard.length === 2){
  if (
    flippedCard[0].getAttribute('name') ===
    flippedCard[1].getAttribute('name')
    ) {
    console.log("Right Guess");
  } else {
    console.log("Wrong Guess");
    flippedCard.forEach(card => {
      card.classList.remove("flipped");
      setTimeout(() => card.classList.remove("toggleCard"), 1000);
    })
  }
}
};

cardGenerator();