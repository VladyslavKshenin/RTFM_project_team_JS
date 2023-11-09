import api from './books-api';
import markup from './markup';

async function topBooks() {
  const topBooks = await api.fetchBookList(api.API_OPTIONS.top);
  console.log(topBooks);
  topBooks.forEach(markup.insertCategoryBlocks);
}

topBooks();
