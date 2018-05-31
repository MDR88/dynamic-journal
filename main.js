var title = document.getElementById("title");
var content = document.getElementById("content");
var submit = document.getElementById("submit");

var counter = 1;

function populateCard() {
    let card = document.createElement("div");
    card.id = counter;

    let titleDiv = document.createElement("div");
    titleDiv.style.backgroundColor = "black";
    titleDiv.style.height = "80px";
    let cardTitle = document.createElement("h2");
    cardTitle.textContent = title.value;
    cardTitle.style.color = "White";
    cardTitle.style.fontSize = "1.3em";
    cardTitle.style.width = "50%";
    cardTitle.style.margin = "auto";
    cardTitle.style.padding = "10px";
    cardTitle.style.textAlign = "center";


    titleDiv.appendChild(cardTitle);

    let bodyDiv = document.createElement("div");
    bodyDiv.style.backgroundImage = "url('bookBack.jpg')";
    bodyDiv.style.backgroundSize = "1000px 750px";
    bodyDiv.style.backgroundPosition = "-10px -10px"

    let contentMain = document.createElement("p");
    contentMain.textContent = content.value;

    let date = new Date();
    let dateElement = document.createElement("p");
    dateElement.textContent = date;

    card.style.margin = "2em";
    card.style.border = "3px dotted black";
    card.style.padding = "0";


    card.appendChild(titleDiv);
    bodyDiv.appendChild(contentMain);
    bodyDiv.appendChild(document.createElement("br"));
    bodyDiv.appendChild(dateElement);
    card.appendChild(bodyDiv);
    document.getElementById("contentArea").appendChild(card);

    counter++;
}

submit.addEventListener("click", populateCard);