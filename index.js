const myLibrary = [];

let form = document.getElementById("form");

let list = document.querySelector(".listOfBooks");

console.log(list.children);

function Book(title, author, numOfPages, beenRead, position) {
  this.title = title;

  this.author = author;

  this.numOfPages = numOfPages;

  this.beenRead = beenRead;

  this.position = position;
}

function getAuthor(myLibrary) {
  return myLibrary[myLibrary.length - 1].author;
}

function getPages(myLibrary) {
  return myLibrary[myLibrary.length - 1].numOfPages;
}

function getBeenRead(myLibrary) {
  return myLibrary[myLibrary.length - 1].beenRead;
}

function getBookTitle(myLibrary) {
  return myLibrary[myLibrary.length - 1].title;
}

function getBookPosition(myLibrary) {
  return myLibrary[myLibrary.length - 1].position;
}

function setReadStatus(position) {
  if (myLibrary[position].beenRead == "false") {
    myLibrary[position].beenRead = "true";

    console.log("set status to true");
  } else {
    myLibrary[position].beenRead = "false";
    console.log("set status to false");
  }
}

function addBookToLibrary() {
  let bookTitle = document.querySelector(".bookName").value;

  let bookAuthor = document.querySelector(".bookAuthor").value;

  let numOfPages = document.querySelector(".numOfPages").value;

  let beenRead = document.querySelector('input[name="beenRead"]:checked').value;

  let position = myLibrary.length;

  let book = new Book(bookTitle, bookAuthor, numOfPages, beenRead, position);

  myLibrary.push(book);
}

function getAllBooks() {
  let card = document.createElement("div");

  card.style.border = "1px solid black";

  card.style.display = "flex";

  card.style.justifyContent = "center";

  card.style.flexDirection = "column";

  card.style.alignItems = "center";

  let cardTitle = document.createElement("h3");

  cardTitle.innerHTML = "Book Name";

  let removeBtn = document.createElement("button");

  removeBtn.textContent = "REMOVE";

  removeBtn.id = myLibrary.length - 1;

  let detailsContainer = document.createElement("div");

  let authorContainer = document.createElement("div");

  let pagesContainer = document.createElement("div");

  let beenReadContainer = document.createElement("div");

  let authorLabel = document.createElement("label");
  let author = document.createElement("h4");

  let pagesLabel = document.createElement("label");
  let pages = document.createElement("h4");

  let beenReadLabel = document.createElement("label");
  let beenReadBtn = document.createElement("button");
  let beenRead = document.createElement("h4");

  beenReadBtn.id = myLibrary.length - 1;

  authorLabel.textContent = "Author Name:";
  pagesLabel.textContent = "Number Of Pages:";
  beenReadLabel.textContent = "Been Read:";

  author.textContent = "Author Name";
  pages.textContent = "Pages";
  beenRead.textContent = "Been Read";

  pagesContainer.display = "flex";
  pagesContainer.append(pagesLabel);
  pagesContainer.append(pages);

  authorContainer.display = "flex";
  authorContainer.append(authorLabel);
  authorContainer.append(author);

  beenReadContainer.display = "flex";
  beenReadContainer.append(beenReadLabel);
  beenReadContainer.append(beenReadBtn);
  beenReadContainer.append(beenRead);

  detailsContainer.append(authorContainer);
  detailsContainer.append(pagesContainer);
  detailsContainer.append(beenReadContainer);

  card.append(removeBtn);

  removeBtn.style.marginLeft = "auto";
  removeBtn.style.marginTop = "10px";
  removeBtn.style.marginRight = "10px";
  removeBtn.style.marginLeft = "10px";

  card.append(cardTitle);

  card.append(detailsContainer);

  let bookTitle = document.createElement("div");

  cardTitle.innerHTML = getBookTitle(myLibrary);

  author.innerHTML = getAuthor(myLibrary);

  pages.innerHTML = getPages(myLibrary);

  beenRead.innerHTML = getBeenRead(myLibrary);

  if (getBeenRead(myLibrary) == "false") {
    beenReadBtn.textContent = "true";
  } else {
    beenReadBtn.textContent = "false";
  }

  list.append(card);

  card.style.marginBottom = "2em";

  removeBtn.addEventListener("click", (event) => {
    console.log(event.target.id);

    removeBook(event.target.id);

    card.remove(event.target.id);

    console.log(myLibrary);
  });

  beenReadBtn.addEventListener("click", (event) => {
    console.log(event.target.id);

    changeReadStatus(event.target.id);

    beenRead.innerHTML = myLibrary[event.target.id].beenRead;

    console.log(myLibrary);

    if (beenRead.textContent == "false") {
      beenReadBtn.textContent = "true";
    } else {
      beenReadBtn.textContent = "false";
    }
  });
}

let addBookBtn = document.querySelector(".addBookBtn");

addBookBtn.addEventListener("click", (event) => {
  form.style.display = "flex";
});

let submitBookBtn = document.querySelector(".submitBookBtn");

submitBookBtn.addEventListener("click", (event) => {
  addBookToLibrary();

  form.style.display = "none";

  document.querySelector(".bookName").value = "";
  document.querySelector(".bookAuthor").value = "";
  var ele = document.getElementsByName("beenRead");
  for (var i = 0; i < ele.length; i++) ele[i].checked = false;

  event.preventDefault();

  getAllBooks();
});

function removeBook(position) {
  myLibrary.splice(position, 1);
}

function changeReadStatus(position) {
  setReadStatus(position);
}
