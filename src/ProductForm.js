import React from "react";
import "./ProductForm.css"

class ProductForm extends React.Component {
    state = {
        name: undefined,
        author: undefined,
        price: undefined,
        priceWithTaxes: undefined
    }

    // unified state modifier. Here we pass the event and a key
    // identifying the part of the state we want to change
    changeFormData(e, key) {
        const newState = {...this.state}

        // here we modify they cloned state key for example newState["author"]
        // then we assign to it the form component value
        newState[key] = e.target.value

        // here we assign the form input value to its corresponding part
        // of the state
        this.setState(newState);
    }

    collectBookInfo(e) {
        // this is to prevent the form button to submit the form 
        // that's the default behaviour, hence to prevent that default behaviour
        // we have to call preventDefault
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

            // here we invoke the function passed from App to here
            // so we can pass the form values stored in the state
            // to App communicating both App and this component
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