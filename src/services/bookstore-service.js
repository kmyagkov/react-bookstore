import books from '../mock/books';

export default class BookstoreService {
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Request failed'));
        }

        resolve(books);
      }, 2000);
    });
  }
}
