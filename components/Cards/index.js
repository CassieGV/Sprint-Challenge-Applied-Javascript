// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(function(response) {
        console.log(response.data.articles)
    })

function CreateCard(headline, author, name) {
    let card = document.createElement("div");
    card.classList.add("card")
    

    let Headline = document.createElement("div");
    Headline.classList.add("headline")
    Headline.textContent = headline


    let Author = document.createElement("div")
    Author.classList.add("author")
    
    let pic = document.createElement("div");
    pic.classList.add("img-container")
    Author.appendChild(pic)
    let image = document.createElement("img");
    image.src = author
    pic.appendChild(image)

    let Name = document.createElement("span");
    Name.textContent = "By " + name
    pic.appendChild(Name);
}