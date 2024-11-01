const quote = document.querySelector(".text-area");
const author = document.querySelector(".author");
const btnContainer = document.querySelector(".btn-container");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    person: "Dalai Lama",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    person: "Buddha",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    person: "Steve Jobs",
  },
];

const changeQoute = () => {
  let random = Math.floor(Math.random() * 10);

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].person;
};

btnContainer.addEventListener("click", changeQoute);
