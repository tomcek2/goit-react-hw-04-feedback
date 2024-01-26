import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(prevGood => prevGood + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(prevBad => prevBad + 1);
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={option => {
            if (option === 'good') {
              handleGoodFeedback();
            } else if (option === 'neutral') {
              handleNeutralFeedback();
            } else if (option === 'bad') {
              handleBadFeedback();
            }
          }}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
