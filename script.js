let myLibrary = [];

function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}

function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayBookOnPage();
}

function displayBookOnPage() {
  const books = document.querySelector(".books");

  myLibrary.forEach((myLibrarys) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    for (let key in myLibrarys) {
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrarys[key]}`;
      card.appendChild(para);
    }
  });
}

function intakeFormData() {
  let Title = document.getElementById("Title").value;
  let Author = document.getElementById("Author").value;
  let Pages = document.getElementById("Pages").value;
  let Read = document.getElementById("Read").value;

  if (Title == "" || Author == "" || Pages == "" || Read == "") {
    return;
  }

  addBookToLibrary(Title, Author, Pages, Read);

  document.getElementById("data-form").reset();
}

const submit_form_button = document.querySelector("#submit-form");

submit_form_button.addEventListener("click", function (e) {
  e.preventDefault();
  intakeFormData();
});
