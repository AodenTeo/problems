import React from 'react';
import './SearchResult.css';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: this.props.result, quantity: this.props.quantity };
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.delete = this.delete.bind(this);
    }
    increaseQuantity() {
        console.log(this.props.list);
        console.log(typeof this.props.list);
        console.log({ term: this.props.result, quantity: this.props.quantity });
        let index = this.props.list.map(function (e) { return e.term; }).indexOf(this.props.result);
        this.props.addQuantity(index);

    }
    decreaseQuantity() {
        let index = this.props.list.map(function (e) { return e.term; }).indexOf(this.props.result);
        this.props.reduceQuantity(index);
    }
    delete() {
        let index = this.props.list.map(function (e) { return e.term; }).indexOf(this.props.result);
        this.props.delete(index);
    }


    render() {
        console.log('This is running!')
        return (<div id='singleElement' className='gridContainer'><div><p id='resultText'>{this.state.result}</p></div><div><p>{this.state.quantity}</p></div> <div><p><a id='addTag' onClick={this.increaseQuantity}>+</a>   <a id='removeTag' onClick={this.decreaseQuantity}>–</a></p></div><div><p><a id='deleteTag' onClick={this.delete}>Remove</a></p></div> </div>);
    }
}
export default SearchResult;