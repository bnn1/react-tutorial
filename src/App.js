import React from 'react';

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
      <Book
        imgSrc={firstBook.imgSrc}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        imgSrc={secondBook.imgSrc}
        title={secondBook.title}
        author={secondBook.author}
      />
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
