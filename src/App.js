import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOption';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Card from './components/Card';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return bad + good + neutral;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total === 0 ? 0 : Math.floor((good / total) * 100);
  }
  handleFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Card>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Card>
    );
  }
}

export default App;
