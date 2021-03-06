import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import ResultList from './ResultList/ResultList.js';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Tour from './Tour/tour.js';
import Loading from './LoadingScreen/loading.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: ['Calculus', 'Trigonometry', 'Algebra'],
      chosenTopics: [],
      loading: false
    };
    this.addProblems = this.addProblems.bind(this);
    this.increaseTopics = this.increaseTopics.bind(this);
    this.decreaseTopics = this.decreaseTopics.bind(this);
    this.makeProblemSet = this.makeProblemSet.bind(this);
    this.deleteTopic = this.deleteTopic.bind(this);
  }
  addProblems(term, quantity) {
    console.log('Add Problems is being called.')
    let newTopic = { term: term, quantity: quantity };
    console.log(newTopic);
    let oldTopics = this.state.chosenTopics;
    console.log(oldTopics);
    let emptyArray = [];
    
    for (let i = 0; i < oldTopics.length; i++) {
      console.log(oldTopics[i].term);
      console.log(newTopic.term);
      if (oldTopics[i].term === newTopic.term) {
        emptyArray.push('Duplicate!');
      }
    }
    console.log(emptyArray);
    if (emptyArray.length === 0) {
      let newTopics = oldTopics.push(newTopic);
      this.setState({ topics: newTopics });
      console.log(newTopic);
      console.log(this.state.chosenTopics);
    } 
  }
  increaseTopics(index) {
    console.log(index);
    let number = this.state.chosenTopics[index].quantity;
    number++;
    let chosenTopics = [...this.state.chosenTopics];

    let chosenItem = { ...chosenTopics[index] };

    chosenItem.quantity = number;

    chosenTopics[index] = chosenItem;

    this.setState({ chosenTopics });
  }
  decreaseTopics(index) {
    if (this.state.chosenTopics[index].quantity > 1) {
      console.log(index);
      let number = this.state.chosenTopics[index].quantity;
      number--;
      let chosenTopics = [...this.state.chosenTopics];

      let chosenItem = { ...chosenTopics[index] };

      chosenItem.quantity = number;

      chosenTopics[index] = chosenItem;

      this.setState({ chosenTopics });
    } else {
      console.log('This was reached!')
      this.setState((prevState) => (
        { chosenTopics: prevState.chosenTopics.filter((_, i) => i !== index) }
      ))
    }
  }
  deleteTopic(index) {
    this.setState((prevState) => (
      { chosenTopics: prevState.chosenTopics.filter((_, i) => i !== index) }
    ))
  }
  makeProblemSet() {
    this.setState({loading: true});
    console.log('This is working');
    for (let i = 0; i < this.state.chosenTopics.length; i++) {
      fetch('https://problems-backend.herokuapp.com/' + this.state.chosenTopics[i].term + '/' + this.state.chosenTopics[i].quantity, {
        method: 'POST',
      }).catch(err => {
        console.log('Nooooo!');
      })
    }
    fetch('https://problems-backend.herokuapp.com/problems', {
      method: 'GET'
    }).then(response => {
      return response.json();
    }).then(JSONresponse => {
      console.log(JSONresponse);
      let questions = {
        content: JSONresponse.problems, styles: {
          header: {
            fontSize: 22,
            bold: true
          },
          center: {
            fontSize: 30,
            bold: true,
            alignment: 'center'
          }
        }
      };
      
      pdfMake.createPdf(questions).download('Questions');
      let solutions = {
        content: JSONresponse.solutions, styles: {
          header: {
            fontSize: 22,
            bold: true
          },
          center: {
            fontSize: 30,
            bold: true,
            alignment: 'center'
          }
        }
      };
      pdfMake.createPdf(solutions).download('Solutions');
      pdfMake.createPdf(questions).open();
      this.setState({loading: false});
    }).catch(err => {
      console.log('Oh no!');
      this.setState({loading: false});
    })
    
  }
  render() {
    return (
      
      <div className="App">
        <Tour />

        {this.state.loading && (<Loading />)}
        <SearchBar handleClick={this.addProblems} />
        <ResultList results={this.state.chosenTopics} addQuantity={this.increaseTopics} reduceQuantity={this.decreaseTopics} delete={this.deleteTopic} />
        <a className='button' onClick={this.makeProblemSet}>GENERATE</a>
      </div>
    );
  }
}


export default App;