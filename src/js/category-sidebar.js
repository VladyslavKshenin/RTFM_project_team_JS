const ctgList = document.querySelector('.ctg-list');

function fetchCategories() {
  return fetch('https://books-backend.p.goit.global/books/category-list').then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

export { fetchCategories };
