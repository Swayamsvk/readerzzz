export const fetchBooksFromOpenLibrary = async (query: string) => {
  interface BookProps {
    _id: Number;
    title: String;
    author: String;
    description: String;
    coverUrl: String;
    isbn: Number;
    name: String;
  }
  try {
    let url =
      query === 'all'
        ? 'https://openlibrary.org/search.json?q=book' // Fetch all books
        : `https://openlibrary.org/subjects/${encodeURIComponent(query)}.json`; // Fetch books by genre

    const response = await fetch(url);

    const data = await response.json();

    console.log('THIS IS THE DATA', data);

    const books = query === 'all' ? data.docs : data.works;

    return books.map((book: any) => ({
      title: book.title,
      author:
        book.author_name?.join(', ') ||
        book.authors?.map((a: BookProps) => a.name).join(', ') ||
        'Unknown',
      description: book.first_sentence
        ? Array.isArray(book.first_sentence)
          ? book.first_sentence[0]
          : book.first_sentence
        : 'No description available',
      coverUrl:
        book.cover_i || book.cover_id
          ? `https://covers.openlibrary.org/b/id/${
              book.cover_i || book.cover_id
            }-L.jpg`
          : null,
      isbn: book.isbn ? book.isbn[0] : null,
    }));
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
