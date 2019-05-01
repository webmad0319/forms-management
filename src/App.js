import React from 'react';
import './App.css';
import ProductForm from './ProductForm';

class App extends React.Component {
  state = {
    books: [
      {
        id: 100,
        name: "el nombre de la rosa",
        price: 20,
        author: "umberto eco"
      },
      {
        id: 200,
        name: "the bible",
        price: 10,
        author: "mixed authors"
      }
    ]
  }

  addNewBook(newBookDetails) {
    var booksIncludingNewBook = [...this.state.books]
    booksIncludingNewBook.push(newBookDetails)
    this.setState({
      ...this.state,
      books: booksIncludingNewBook
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Books iteration in APP</h1>
        <ul>
          {
            this.state.books.map(book => <li key={book.id}>{book.name} - {book.price} eur</li>)
          }
        </ul>
        <hr></hr>
        <ProductForm bookShop="fnac callao" newBook={(newBook) => this.addNewBook(newBook)}></ProductForm>

        <ProductForm bookShop="puerta de sol" newBook={(newBook) => this.addNewBook(newBook)}></ProductForm>
      </React.Fragment>
    )
  }
}

export default App;
