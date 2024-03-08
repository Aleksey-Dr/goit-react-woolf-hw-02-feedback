import React from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedBackOptions from 'components/FeedBackOptions';

import css from 'components/App.module.scss';

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    // ================== LOGIC
    addFeedback = feedback => {
        this.setState(prevState => ({
            [feedback]: prevState[feedback] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () =>
        this.countTotalFeedback() !== 0
            ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
            : 0;
    // ================== /LOGIC

    render() {
        return (
            <div className={css.container}>
                <Section title={'Please leave feedback'}>
                    <FeedBackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.addFeedback}
                    />
                </Section>
                <Section title={'Statistics'}>
                    <Statistics
                        feedbacks={this.state}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </div>
        );
    };
};
