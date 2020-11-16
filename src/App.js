import React from 'react';
import { book1, book2, book3 } from './BOOKS.json';

// CSS
import './App.css';
// variables
const firstBook = {
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
  title: 'Dog Man',
  author: 'Dav Pilkey',
};
const secondBook = {
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/91nSi4sI-SL._AC_UL200_SR200,200_.jpg',
  title: '5.000 amazing things',
  author: 'National Geographic Kids',
};
const App = () => {
  return (
    <section className='book-list'>
      <Book imgSrc={book1.imgSrc} title={book1.title} author={book1.author} />
      <Book imgSrc={book2.imgSrc} title={book2.title} author={book2.author} />
      <Book imgSrc={book3.imgSrc} title={book3.title} author={book3.author} />
    </section>
  );
};

const Book = (props) => {
  let { imgSrc, title, author } = props;
  return (
    <article className='book'>
      <img src={imgSrc} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App;
