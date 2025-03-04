import Realm from 'realm';
import Book from './BookSchema';

const realm = new Realm({schema: [Book]});

export default realm;
