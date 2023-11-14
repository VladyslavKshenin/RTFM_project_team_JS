export default function getRefs() {
  return {
    // home page wrapper for dynamically rendered book collections
    bookCollectionWrapper: document.querySelector('.book-collection-wrapper'),
    //category sidebar
    ctgList: document.querySelector('.ctg-list'),
    ctgName: document.querySelector('.selected-ctg-name'),
  };
}
