const BASE_URL = 'https://books-backend.p.goit.global/books';

const API_OPTIONS = {
  list: 'category-list',
  top: 'top-books',
  category: 'category?category=',
};

async function fetchBookList(option, select = '') {
  try {
    const response = await fetch(`${BASE_URL}/${option}${select}`);
    const list = await response.json();
    console.log(
      `data retrieving was succesfull: ${response.status} - ${response.statusText}`
    );
    return list;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

async function fetchBookById(bookId) {
  try {
    const response = await fetch(`${BASE_URL}/${bookId}`);
    const book = await response.json();
    console.log(
      `data retrieving was succesfull: ${response.status} - ${response.statusText}`
    );
    return book;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

export default { API_OPTIONS, fetchBookList, fetchBookById };
export { API_OPTIONS };
export { fetchBookList };
