import React, { Component } from 'react';
import Book from './components/Book';
class App2 extends React.Component {
  constructor(props) {
    super(props);

    const book1 = {
      author: 'Frank Herbert',
      title: 'Dune',
      summary:
        "The story of a boy and a great family's ambitious attempt to realize mankind's most ancient and unattendable dream.",
    };

    const book2 = {
      author: 'Mur Lafferty',
      title: 'Six Wakes',
      summary:
        "A crew of clones awakens aboard a space ship to find they're being hunted-and any one of them could be a killer",
    };

    const book3 = {
      author: 'Yann Martel',
      title: 'Lif of Pi',
      summary:
        'An inspirational tale of survival, endurance, resiliance and faith',
    };
    this.booksArr = [book1, book2, book3];
  }

  render = () => {
    return (
      <div className="row" style={{ marginTop: 30 }}>
        <h4 className="text-success text-center">Bestsellers 2018</h4>
        {this.booksArr.map((book) => (
          <Book key={book.author} book={book} />
        ))}
      </div>
    );
  };
}

export default App2;
