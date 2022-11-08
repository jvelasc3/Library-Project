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

  const removeDivs = document.querySelectorAll(".card");
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  let index = 0;
  myLibrary.forEach((myLibrarys) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    for (let key in myLibrarys) {
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrarys[key]}`;
      card.appendChild(para);
    }

    let delete_button = document.createElement("button");
    delete_button.classList.add("delete_button");
    delete_button.textContent = "Remove";
    delete_button.dataset.linkedArray = index;
    card.appendChild(delete_button);

    delete_button.addEventListener("click", removeFromLibrary);

    function removeFromLibrary() {
      let retrieveBookToRemove = delete_button.dataset.linkedArray;
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayBookOnPage();
    }
    index++;
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

const add_book = document.querySelector(".add-book");
add_book.addEventListener("click", popUpForm);

function popUpForm() {
  document.getElementById("data-form").style.display = "block";
}

const close_form_button = document.querySelector("#close-form");
close_form_button.addEventListener("click", closeForm);

function closeForm() {
  document.getElementById("data-form").style.display = "none";
}

const submit_form_button = document.querySelector("#submit-form");

submit_form_button.addEventListener("click", function (e) {
  e.preventDefault();
  intakeFormData();
});
