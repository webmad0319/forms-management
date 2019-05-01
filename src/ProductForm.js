import React from "react";
import "./ProductForm.css"

class ProductForm extends React.Component {
    state = {
        name: undefined,
        author: undefined,
        price: undefined,
        priceWithTaxes: undefined
    }

    changeBookName(e) {
        const theBookName = e.target.value

        this.setState({
            ...this.state,
            name: theBookName
        })
    }
    changeAuthorName(e) {
        const theAuthorName = e.target.value

        this.setState({
            ...this.state,
            author: theAuthorName
        })
    }
    changePrice(e) {
        const theNewPrice = e.target.value

        this.setState({
            ...this.state,
            price: theNewPrice
        })
    }

    collectBookInfo(e) {
        e.preventDefault();

        function addTaxes(price) {
            return price * 1.16
        }

        this.setState({
            ...this.state,
            priceWithTaxes: addTaxes(this.state.price)
        }, function () {
            console.log(this.state)
        })
    }

    render() {
        return (
            <form className="product-form">
                <label>Book name: </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="write a name"
                    value={this.state.name} 
                    onChange={(e) => this.changeBookName(e)} />

                <label>Book author: </label>
                <input 
                    type="text" 
                    name="author" 
                    value={this.state.author} 
                    onChange={(e) => this.changeAuthorName(e)} />

                <label>Book price: </label>
                <input 
                    type="text" 
                    name="price" 
                    value={this.state.price} 
                    onChange={(e) => this.changePrice(e)} />

                <button onClick={(e) => this.collectBookInfo(e)}>Collect book info!</button>

                <h1>Summary</h1>
                book name: {this.state.name}
                author name: {this.state.author}
                price: {this.state.price} eur
                price with taxes: {this.state.priceWithTaxes} eur
            </form>
        )
    }
}

export default ProductForm;