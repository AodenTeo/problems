import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { term: '', quantity: '0' };
		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.enterPressed = this.enterPressed.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
	}
	handleSearch(event) {

		console.log('handleSearch');
		if (this.state.term) {
			this.props.handleClick(this.state.term, this.state.quantity);
		} else {
			alert('You need to select a topic');
		}

	}
	enterPressed(event) {
		const code = event.keyCode || event.which;
		if (code === 13) {
			this.handleSearch();
		}

	}
	handleChange(event) {


		this.setState({ term: event.target.value })
	}
	handleNumber(event) {
		let number = event.target.value
		if (number === "" || event.target.value == undefined) {
			number = '0'
		} 

		this.setState({ quantity: number })
	}
	render() {
		return (
		<div id='wrapper'>
		<div className="SearchBar">
			<div className="styled-select green rounded">
				<div className='center'>
					<select placeholder="Search For A Topic" onChange={this.handleChange} onKeyDown={this.enterPressed} >
						<option value="">Select Topic</option>
						<option value="Trigonometry">Trigonometry</option>
						<option value='Algebra'>Algebra</option>
						<option value='Geometry'>Geometry</option>
						<option value='Arithmetic'>Arithmetic</option>
						<option value='Chemistry'>Chemistry</option>
					</select>
				</div>

			</div>
			<input className = 'inputField' placeholder='Quantity' type='number' min='1' onChange={this.handleNumber} onKeyDown={this.enterPressed} />

			

			
		</div>
	
		<a id='addTopic'onClick={this.handleSearch} onKeyDown={this.enterPressed}>ADD TOPIC</a>

		
		</div>);
	}
}
export default SearchBar;