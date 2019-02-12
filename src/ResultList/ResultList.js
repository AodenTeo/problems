import React from 'react';
import './ResultList.css';
import SearchResult from '../SearchResult/SearchResult.js';

class ResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className='container'>
                <div className='results'>
                    <div className='resultText'>
                        <ol>
                            <li>
                                {
                                    this.props.results.map(result => {
                                        return <SearchResult key={Math.random()} list={this.props.results} result={result.term} quantity={result.quantity} addQuantity={this.props.addQuantity} reduceQuantity={this.props.reduceQuantity} />
                                    })
                                }
                            </li>

                        </ol>

                    </div>

                </div>

            </div>)


    }
}
export default ResultList;