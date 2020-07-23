let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
  // this.info = function () {
  //   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  // }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'not read');
addBookToLibrary('Northern Lights', 'Philip Pullman', 399, 'read');
addBookToLibrary('The Handmaid\'s Tale', 'Margaret Attwood', 311, 'not read');

function render(myLibrary) {

  const container = document.querySelector('.bookshelf');

  for (let index = 0; index < myLibrary.length; index++) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', `card-${index}`);

    const title = document.createElement('h2');
    title.textContent = myLibrary[index].title;
    const author = document.createElement('p');
    author.textContent = `By ${myLibrary[index].author}`;
    const pages = document.createElement('p');
    pages.textContent = `Pages: ${myLibrary[index].pages}`;
    const read = document.createElement('p');
    read.textContent = myLibrary[index].read;
    card.append(title, author, pages, read);

    container.append(card);
  }
}

render(myLibrary);
