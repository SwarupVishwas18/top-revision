var addBtn = document.querySelector("#add-btn");
var arena = document.querySelector(".books-arena");

function Book(name, author, isRead, isFav) {
  this.name = name;
  this.author = author;
  this.isRead = isRead;
  this.isFav = isFav;

  this.updateBook = function (name, author, isRead, isFav) {
    this.author = author;
    this.name = name;
    this.isFav = isFav;
    this.isRead = isRead;
  }
}

var books = []

addBtn.addEventListener("click", () => {
  var name = document.querySelector("#book-name").value;
  var author = document.querySelector("#book-author").value;
  var read = document.querySelector("#read");
  var fav = document.querySelector("#fav");

  var b = new Book(name, author, read.checked, fav.checked);

  console.log(read.checked);

  console.log(b);

  books.push(b);

  arena.innerHTML = "";

  books.forEach(book => {
    var statement = ""
    statement += `<div class="book">
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

})