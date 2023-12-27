const form = document.getElementById('form');
const bookInput = document.getElementById('input');
const authorInput = document.getElementById('input2');
const books = document.getElementById('books');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addBook();
});

const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function () {
    addBook();
});

function addBook() {
    const book = bookInput.value.trim();
    const author = authorInput.value.trim();

    if (book !== '' && author !== '') {
        const item = document.createElement('li');
        const bookSpan = document.createElement('span');
        bookSpan.textContent = `${book} by ${author}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';

        deleteButton.addEventListener('click', function () {
            books.removeChild(item); // Use 'books' instead of 'todosList'
        });

        item.appendChild(bookSpan);
        item.appendChild(deleteButton);

        books.appendChild(item);

        // Clear input fields
        bookInput.value = '';
        authorInput.value = '';
    }
}
