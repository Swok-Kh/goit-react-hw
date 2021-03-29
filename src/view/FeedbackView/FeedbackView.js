import { useState } from 'react';
import FeedbackOptions from '../../components/FeedbackOptions';
import Section from '../../components/Section';
import Statistics from '../../components/Statistics';

const FeedbackView = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = feedback => {
    setOptions(prev => ({ ...prev, [feedback]: prev[feedback] + 1 }));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics {...options} />
      </Section>
    </>
  );
};

export default FeedbackView;
