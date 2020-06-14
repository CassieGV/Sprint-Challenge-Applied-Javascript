// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date, temp) {
    let header = document.createElement("div");
    header.classList.add("header");

    let Date = document.createElement("span");
    Date.classList.add("date");
    Date.textContent = date
    header.appendChild(Date);

    let title = document.createElement("h1");
    title.textContent = "Lambda Times"
    header.appendChild(title);

    let Temp = document.createElement("span")
    Temp.classList.add("temp");
    Temp.textContent = temp
    header.appendChild(Temp);

    return header;
}

