var addBtn = document.querySelector("#add-btn");
var arena = document.querySelector(".books-arena");

var modalForm = document.querySelector("#modal-form")

function Book(name, author, isRead, isFav) {
  this.name = name;
  this.author = author;
  this.isRead = isRead;
  this.isFav = isFav;

  this.updateBook = function (name, author) {
    this.author = author;
    this.name = name;
  }
}

var books = {}

var index = 0;

addBtn.addEventListener("click", () => {
  var name = document.querySelector("#book-name").value;
  var author = document.querySelector("#book-author").value;
  var read = document.querySelector("#read");
  var fav = document.querySelector("#fav");

  var b = new Book(name, author, read.checked, fav.checked);



  books[index] = b
  console.log(books);

  index++;

  updateDom(books, arena);


  document.querySelectorAll(".edit-btn").forEach(edit => {
    edit.addEventListener("click", () => {
      var clickedId = edit.parentElement.parentElement.id;
      document.querySelector("#id").value = clickedId;
      var currentBook;
      Object.entries(books).forEach(entry => {
        var [entryId, book] = entry

        if (clickedId == entryId) {
          console.log(clickedId);
          currentBook = book;
        }
      })
      console.log(currentBook);
      document.querySelector("#modal-book-name").value = currentBook.name;
      document.querySelector("#modal-book-author").value = currentBook.author;
      document.querySelector("#modal-form").style.display = "flex";
      document.querySelector("#modal-add-btn").addEventListener("click", () => {
        var updatedName = document.querySelector("#modal-book-name").value;
        var updatedAuthor = document.querySelector("#modal-book-author").value;
        currentBook.updateBook(updatedName, updatedAuthor);
        document.querySelector("#modal-form").style.display = "none";
        updateDom(books, arena);
      })

      document.querySelector("#modal-close-btn").addEventListener("click", () => {
        document.querySelector("#modal-form").style.display = "none";

      })
    })
  })
})


function updateDom(books, arena) {
  arena.innerHTML = "";
  Object.entries(books).forEach(entry => {
    var [id, book] = entry
    var statement = ""
    statement += `<div class="book" id="${id}">
          <div class="ls">
            <div class="book-name">${book.name}</div>
            <div class="book-author">${book.author}</div>
          </div>
        <div class='rs'>`;


    if (book.isFav) {
      statement += `<div class="heart-btn">❤️</div>`;
    }

    if (book.isRead) {
      statement += `<div class="read-btn">✅</div>`;
    }

    statement += `<div class="edit-btn">✏️</div>
        </div>
      </div>`;
    arena.innerHTML += statement
  })
}