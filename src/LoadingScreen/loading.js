import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id='blankOut' className='blankOut'>
                <h1 id='loading-message' className='loading-message'>Generating...</h1>
                <div className="load-wrapp">
                    <div class="load-1">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    </div>
                </div>);
            }
        
        }
export default Loading;