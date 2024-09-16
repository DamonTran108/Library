const myLibrary = [];

let form = document.getElementById("form");

let list = document.querySelector(".listOfBooks");


console.log(list.children);


function Book(title, author, numOfPages, beenRead) {

    this.title = title;

    this.author = author;

    this.beenRead = beenRead;



}


function addBookToLibrary() {

    


    let bookTitle = document.querySelector(".bookName").value;

    let bookAuthor = document.querySelector(".bookAuthor").value

    let beenRead = true;

    
    let book = new Book(bookTitle, bookAuthor, beenRead);

    myLibrary.push(book);
    


}



function getAllBooks(){

 

    



        
        let book = document.createElement("li");

        let bookTitle = document.createElement("div");

        bookTitle.innerHTML = JSON.stringify(myLibrary[myLibrary.length-1]);;

        book.appendChild(bookTitle);
        
        list.appendChild(book);

    
    





}


let addBookBtn = document.querySelector(".addBookBtn");


addBookBtn.addEventListener("click", (event) => {


    form.style.display="flex";



    
})



let submitBookBtn = document.querySelector(".submitBookBtn");


submitBookBtn.addEventListener("click", (event) => {


    addBookToLibrary();
    console.log("hi");

    console.log(myLibrary);

    form.style.display = "none"

    console.log(list.children);
    console.log(myLibrary);
    getAllBooks();

 
    let bookTitle = document.querySelector(".bookName").value;

    let bookAuthor = document.querySelector(".bookAuthor").value

    bookTitle.value = "";
    bookAuthor.value = "";


    event.preventDefault();
    
})

