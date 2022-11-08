let myLibrary = [];

function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}

function addBookToLibrary(Title, Author, Pages, Read) {
  const book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayOnPage();
}

function displayOnPage() {
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
      let para = document.createElement("p");
      para.textContent = `${key}: ${myLibrarys[key]}`;
      card.appendChild(para);
    }

    const read_button = document.createElement("button");
    read_button.classList.add("read_button");
    read_button.textContent = "Read ";
    read_button.dataset.linkedArray = index;
    card.appendChild(read_button);

    read_button.addEventListener("click", readStatus);

    function readStatus() {
      let retrieveBookToToggle = read_button.dataset.linkedArray;
      Book.prototype = Object.create(Book.prototype);
      const toggleBook = new Book();

      if (myLibrary[parseInt(retrieveBookToToggle)].Read == "Yes") {
        toggleBook.Read = "No";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
      } else if (myLibrary[parseInt(retrieveBookToToggle)].Read == "No") {
        toggleBook.Read = "Yes";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
      }

      displayOnPage();
    }

    const delete_button = document.createElement("button");
    delete_button.classList.add("delete_button");
    delete_button.textContent = "Remove";
    delete_button.dataset.linkedArray = index;
    card.appendChild(delete_button);

    delete_button.addEventListener("click", removeFromLibrary);

    function removeFromLibrary() {
      let retrieveBookToRemove = delete_button.dataset.linkedArray;
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayOnPage();
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

const submit_form = document.querySelector("#submit-form");

submit_form.addEventListener("click", function (event) {
  event.preventDefault();
  intakeFormData();
  closeForm();
});

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
