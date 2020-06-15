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

    console.log(response.data.articles.javascript)

    let cards = document.querySelector(".cards-container") 
    
    response.data.articles.javascript.forEach( item => {

    let jscard = document.createElement("div");
        jscard.classList.add("card")
        cards.appendChild(jscard)
    

    let Headline = document.createElement("div");
    Headline.classList.add("headline")
    Headline.textContent = item.headline
    jscard.appendChild(Headline)


    let Author = document.createElement("div")
    Author.classList.add("author")
    Headline.appendChild(Author)
    
    let pic = document.createElement("div");
    pic.classList.add("img-container")
    Author.appendChild(pic)
    let image = document.createElement("img");
    image.src = item.authorPhoto
    pic.appendChild(image)

    let Name = document.createElement("span");
    Name.textContent = "By " + item.authorName
    pic.appendChild(Name);
})

response.data.articles.bootstrap.forEach( item => {

    let bootcard = document.createElement("div");
        bootcard.classList.add("card")
        cards.appendChild(bootcard)
    

    let Headline = document.createElement("div");
    Headline.classList.add("headline")
    Headline.textContent = item.headline
    bootcard.appendChild(Headline)


    let Author = document.createElement("div")
    Author.classList.add("author")
    Headline.appendChild(Author)
    
    let pic = document.createElement("div");
    pic.classList.add("img-container")
    Author.appendChild(pic)
    let image = document.createElement("img");
    image.src = item.authorPhoto
    pic.appendChild(image)

    let Name = document.createElement("span");
    Name.textContent = "By " + item.authorName
    pic.appendChild(Name);
}) 
response.data.articles.jquery.forEach( item => {

    let jqcard = document.createElement("div");
        jqcard.classList.add("card")
        cards.appendChild(jqcard)
    

    let Headline = document.createElement("div");
    Headline.classList.add("headline")
    Headline.textContent = item.headline
    jqcard.appendChild(Headline)


    let Author = document.createElement("div")
    Author.classList.add("author")
    Headline.appendChild(Author)
    
    let pic = document.createElement("div");
    pic.classList.add("img-container")
    Author.appendChild(pic)
    let image = document.createElement("img");
    image.src = item.authorPhoto
    pic.appendChild(image)

    let Name = document.createElement("span");
    Name.textContent = "By " + item.authorName
    pic.appendChild(Name);
})
response.data.articles.node.forEach( item => {

    let nodecard = document.createElement("div");
        nodecard.classList.add("card")
        cards.appendChild(nodecard)
    

    let Headline = document.createElement("div");
    Headline.classList.add("headline")
    Headline.textContent = item.headline
    nodecard.appendChild(Headline)


    let Author = document.createElement("div")
    Author.classList.add("author")
    Headline.appendChild(Author)
    
    let pic = document.createElement("div");
    pic.classList.add("img-container")
    Author.appendChild(pic)
    let image = document.createElement("img");
    image.src = item.authorPhoto
    pic.appendChild(image)

    let Name = document.createElement("span");
    Name.textContent = "By " + item.authorName
    pic.appendChild(Name);
})

})
