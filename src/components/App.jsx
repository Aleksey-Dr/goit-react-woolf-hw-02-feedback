import React from 'react';

import 'components/App.styled.css';

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    // ================== LOGIC
    addFeedback = evt => {
        const keyValue = evt.currentTarget.name;

        this.setState(prevState => ({
            [keyValue]: prevState[keyValue] + 1,
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
            <div className={'container'}>
                <h1>Please leave feedback</h1>
                <ul className={'list-btn'}>
                    <li className={'list-btn-item'}>
                        <div className="wrapper">
                            <button
                                name={'good'}
                                onClick={this.addFeedback}
                                type="button"
                                className={'btn'}
                            >
                                <svg
                                    width="180px"
                                    height="60px"
                                    viewBox="0 0 180 60"
                                >
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                </svg>
                                Good
                            </button>
                        </div>
                    </li>
                    <li className={'list-btn-item'}>
                        <div className="wrapper">
                            <button
                                name={'neutral'}
                                onClick={this.addFeedback}
                                type="button"
                                className={'btn'}
                            >
                                <svg
                                    width="180px"
                                    height="60px"
                                    viewBox="0 0 180 60"
                                >
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                </svg>
                                Neutral
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="wrapper">
                            <button
                                name={'bad'}
                                onClick={this.addFeedback}
                                type="button"
                                className={'btn'}
                            >
                                <svg
                                    width="180px"
                                    height="60px"
                                    viewBox="0 0 180 60"
                                >
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                </svg>
                                Bad
                            </button>
                        </div>
                    </li>
                </ul>
                <h2>Statistics</h2>
                <ul className={'list-paragraph'}>
                    <li>
                        <p>Good: {this.state.good}</p>
                    </li>
                    <li>
                        <p>Neutral: {this.state.neutral}</p>
                    </li>
                    <li>
                        <p>Bad: {this.state.bad}</p>
                    </li>
                    <li>
                        <p>Total: {this.countTotalFeedback()}</p>
                    </li>
                    <li>
                        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
                    </li>
                </ul>
            </div>
        );
    }
}
