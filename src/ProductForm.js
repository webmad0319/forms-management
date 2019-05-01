import React from "react";
import "./ProductForm.css"

class ProductForm extends React.Component {
    state = {
        name: undefined,
        author: undefined,
        price: undefined,
        priceWithTaxes: undefined
    }

    changeFormData(e, key) {
        const newState = {...this.state}
        newState[key] = e.target.value

        this.setState(newState);
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
            //here you'd call axios.post for example
            // axios.post("localhost:3000/books/new", this.state)
            // console.log(this.state)
            this.props.newBook(this.state)
        })
    }

    render() {
        return (
            <form className="product-form">
                <h1>Your shop is {this.props.bookShop}</h1>
                <label>Book name: </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="write a name"
                    value={this.state.name} 
                    onChange={(e) => this.changeFormData(e, 'name')} />

                <label>Book author: </label>
                <input 
                    type="text" 
                    name="author" 
                    value={this.state.author} 
                    onChange={(e) => this.changeFormData(e, 'author')} />

                <label>Book price: </label>
                <input 
                    type="text" 
                    name="price" 
                    value={this.state.price} 
                    onChange={(e) => this.changeFormData(e, 'price')} />

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