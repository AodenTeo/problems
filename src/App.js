import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import ResultList from './ResultList/ResultList.js';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: ['Calculus', 'Trigonometry', 'Algebra'],
      chosenTopics: []
    };
    this.addProblems = this.addProblems.bind(this);
    this.increaseTopics = this.increaseTopics.bind(this);
    this.decreaseTopics = this.decreaseTopics.bind(this);
    this.makeProblemSet = this.makeProblemSet.bind(this);
    this.deleteTopic = this.deleteTopic.bind(this);
  }
  addProblems(term, quantity) {
    let newTopic = { term: term, quantity: quantity };
    let oldTopics = this.state.chosenTopics;
    let newTopics = oldTopics.push(newTopic);
    this.setState({ topics: newTopics });
    console.log(newTopic);
    console.log(this.state.chosenTopics);
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
    }).catch(err => {
      console.log('Oh no!');
    })
  }



  render() {
    return (
      <div className="App">
        <SearchBar handleClick={this.addProblems} />
        <ResultList results={this.state.chosenTopics} addQuantity={this.increaseTopics} reduceQuantity={this.decreaseTopics} delete={this.deleteTopic} />
        <a id='button' onClick={this.makeProblemSet}>GENERATE</a>
      </div>
    );
  }
}


export default App;