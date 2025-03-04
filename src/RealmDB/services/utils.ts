import {fetchBooksFromOpenLibrary} from '../../utils';
import Book from './BookSchema';
import realm from './Database';

export const saveBooksToRealm = async (query: string) => {
  const books = await fetchBooksFromOpenLibrary(query);

  interface BookProps {
    _id: Number;
    title: String;
    author: String;
    description: String;
    coverUrl: String;
    isbn: Number;
  }

  console.log('THESE ARE THE BOOKS 23445', books);

  realm.write(() => {
    books.forEach((book: BookProps) => {
      realm.create('Book', {
        _id: new Realm.BSON.ObjectId(),
        title: book.title,
        author: book.author,
        description: book.description,
        coverImage: book.coverUrl,
        isbn: book.isbn,
      });
    });
  });

  console.log('Books saved to Realm!');
};

export const getAllBooksFromRealm = () => {
  return realm.objects<Book>('Book');
};

export const clearAllBooks = () => {
  realm.write(() => {
    const allBooks = realm.objects(Book);
    realm.delete(allBooks); // Deletes all book entries
  });

  console.log('All books have been deleted from Realm.');
};
