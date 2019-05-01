import React from 'react';
import './App.css';
import ProductForm from './ProductForm';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ProductForm></ProductForm>
        <ProductForm></ProductForm>
      </React.Fragment>
    )
  }
}

export default App;
