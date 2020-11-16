import React from 'react';

// External file with all the books - BOOKS.json
import BOOKS from './BOOKS.json';

// CSS
import './App.css';

const App = () => {
  return (
    <section className='book-list'>
      {BOOKS.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  let { imgSrc, title, author } = props.book;
  return (
    <article className='book'>
      <img src={imgSrc} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App;
