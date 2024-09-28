const myLibrary = [];

let form = document.getElementById("form");

let list = document.querySelector(".listOfBooks");

console.log(list.children);

function Book(title, author, numOfPages, beenRead) {
  this.title = title;

  this.author = author;

  this.numOfPages = numOfPages;

  this.beenRead = beenRead;
}

function getAuthor(myLibrary) {
  return myLibrary[myLibrary.length - 1].author;
}

function getPages(myLibrary) {
  return myLibrary[myLibrary.length - 1].pages;
}

function getBeenRead(myLibrary) {
  return myLibrary[myLibrary.length - 1].beenRead;
}

function getBookTitle(myLibrary) {
  return myLibrary[myLibrary.length - 1].bookTitle;
}

function addBookToLibrary() {
  let bookTitle = document.querySelector(".bookName").value;

  let bookAuthor = document.querySelector(".bookAuthor").value;

  let numOfPages = document.querySelector(".numOfPages").value;

  let beenRead = document.querySelector('input[name="beenRead"]:checked').value;

  console.log(bookTitle);
  console.log(bookAuthor);
  console.log(numOfPages);
  console.log(beenRead);

  let book = new Book(bookTitle, bookAuthor, numOfPages, beenRead);

  myLibrary.push(book);
}

function getAllBooks() {
  let card = document.createElement("div");

  card.style.border = "1px solid black";

  card.style.display = "flex";

  card.style.flexDirection = "column";

  card.style.alignItems = "center";

  let cardTitle = document.createElement("h3");

  cardTitle.innerHTML = "Book Name";

  let detailsContainer = document.createElement("div");

  let authorContainer = document.createElement("div");

  let pagesContainer = document.createElement("div");

  let beenReadContainer = document.createElement("div");

  let authorLabel = document.createElement("label");
  let author = document.createElement("h4");

  let pagesLabel = document.createElement("label");
  let pages = document.createElement("h4");

  let beenReadLabel = document.createElement("label");
  let beenRead = document.createElement("h4");

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
  beenReadContainer.append(beenRead);

  detailsContainer.append(authorContainer);
  detailsContainer.append(pagesContainer);
  detailsContainer.append(beenReadContainer);

  card.append(cardTitle);

  card.append(detailsContainer);

  let book = document.createElement("li");

  let bookTitle = document.createElement("div");

  cardTitle.innerHTML = getBookTitle(myLibrary);

  author.innerHTML = getAuthor(myLibrary);

  pages.innerHTML = getPages(myLibrary);

  beenRead.innerHTML = getBeenRead(myLibrary);

  bookTitle.innerHTML = JSON.stringify(myLibrary[myLibrary.length - 1]);

  list.append(card);

  book.appendChild(bookTitle);

  list.appendChild(book);
}

let addBookBtn = document.querySelector(".addBookBtn");

addBookBtn.addEventListener("click", (event) => {
  form.style.display = "flex";
});

let submitBookBtn = document.querySelector(".submitBookBtn");

submitBookBtn.addEventListener("click", (event) => {
  addBookToLibrary();
  console.log(myLibrary);

  form.style.display = "none";

  console.log(list.children);
  console.log(myLibrary);

  document.querySelector(".bookName").value = "";
  document.querySelector(".bookAuthor").value = "";
  var ele = document.getElementsByName("beenRead");
  for (var i = 0; i < ele.length; i++) ele[i].checked = false;

  event.preventDefault();

  getAllBooks();
});
