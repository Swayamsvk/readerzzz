import Realm from 'realm';

class Book extends Realm.Object<Book> {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  author!: string;
  description?: string;
  coverImage?: string;
  isbn?: string;

  static schema: Realm.ObjectSchema = {
    name: 'Book',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      author: 'string',
      description: 'string?',
      coverImage: 'string?',
      isbn: 'string?',
    },
  };
}

export default Book;
