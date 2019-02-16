import Joyride from 'react-joyride';
import React from 'react';

export class Tour extends React.Component {
  state = {
    run: true, 
    steps: [
      {
        target: 'body',
        content: 'Welcome, click on the red dot for your tutorial!',
        placement: 'center',
        locale: { skip: <strong aria-label="skip">SKIP</strong> }
        
      },
      {
        target: '.center',
        content: 'Use this field to select the topics that you would like to work on.',
        placement: 'bottom-end',
      },
      {
        target: '.inputField',
        content: 'In this field, you can set the number of questions that you would like from each topic.',
        placement: 'bottom-end'
      },
      {
        target: '#addTopic',
        content: 'Click here to add a topic.',
        placement: 'top'
      },
      {
        target: '.container',
        content: 'In this field, you can see the topics you have selected so far.',
        placement: 'top'
      },
      {
        target: '#button',
        content: 'Once you\'re done, click here to generate a problem set! Two pdfs will be generated, one containing questions and the other containing the problems.',
        placement: 'top'
      }
    ]
  };
  componentWillUnmount() {
      this.setState({run: false});
  }

  render () {
    const { steps } = this.state;

    return (
      <div className="app">
        <Joyride
          steps={steps}
          showProgress
          showSkipButton
        />

      </div>
    );
  }
}

export default Tour;
