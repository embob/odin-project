let myLibrary = [];

const bookshelf = document.querySelector('.bookshelf');
const addButton = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.close');
const submitButton = modal.querySelector('.submit');

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'not read');
addBookToLibrary('Northern Lights', 'Philip Pullman', 399, 'read');
addBookToLibrary('The Handmaid\'s Tale', 'Margaret Attwood', 311, 'not read');

function processArray(element, index) {
  const title = element.title;
  const author = element.author;
  const pages = element.pages;
  const read = element.read;
  const libraryIndex = index;
  renderNewBook(title, author, pages, read, libraryIndex);
}


function render(myLibrary) {
  myLibrary.forEach(processArray);
}

//

function renderNewBook(title, author, pages, read, index) {
  const book = document.createElement('div');
  book.classList.add('card');
  book.setAttribute('data-index', `${index}`);
  const button = document.createElement('button');
  button.classList.add('close', 'card__close');
  button.type = 'button';
  button.innerHTML = 'x';
  book.append(button);
  button.addEventListener('click', () => {
    button.closest('.card').remove();
    myLibrary.splice(index, 1);
  });

  const bookTitle = document.createElement('h2');
  bookTitle.textContent = title;
  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = `By ${author}`;
  const bookPages = document.createElement('p');
  bookPages.textContent = `Pages: ${pages}`;
  const bookRead = document.createElement('p');
  bookRead.textContent = read;
  book.append(bookTitle, bookAuthor, bookPages, bookRead);
  bookshelf.append(book);
  // cardCloseButtons();
}

function submitBook(event) {
  event.preventDefault();
  const form = document.querySelector('.book-form');
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  let read =  document.getElementById('read_state').value;

  if (read === 'on') {
    read = 'Read';
  } else {
    read = 'Unread';
  }

  form.reset();
  modal.classList.remove('modal--visible');
  addBookToLibrary(title, author, pages, read);
  const index = myLibrary.length - 1;
  renderNewBook(title, author, pages, read, index);
}

function toggleRead() {

}


render(myLibrary);

addButton.addEventListener('click', () => modal.classList.add('modal--visible'));
closeButton.addEventListener('click', () => modal.classList.remove('modal--visible'));
submitButton.addEventListener('click', submitBook);
