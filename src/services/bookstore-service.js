import books from '../mock/books';

export default class BookstoreService {
  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 2000);
    });
  }
}
