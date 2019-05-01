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
    // here we extract from the state and clone all the books
    var booksIncludingNewBook = [...this.state.books]
    // adding a new books coming from ProductForm
    booksIncludingNewBook.push(newBookDetails)

    // we re-add in the state all the books including the new one
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
        {/* here we pass via props a function of this current class to its child via the newBook prop */}
        {/* the state of the form of ProductForms gets passed here */}
        <ProductForm bookShop="fnac callao" newBook={(newBook) => this.addNewBook(newBook)}></ProductForm>

        <ProductForm bookShop="puerta de sol" newBook={(newBook) => this.addNewBook(newBook)}></ProductForm>
      </React.Fragment>
    )
  }
}

export default App;
