import React from 'react';

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    key = "good"

    // ================== STYLES
    stylesContainer = {
        marginRight: '40px',
        marginLeft: '40px',
    };

    stylesListBtn = {
        display: 'flex',
        paddingBottom: '16px',
        listStyle: 'none',
        borderBottom: '1px solid black',
    };

    stylesListBtnItem = {
        marginRight: '24px',
    };

    stylesBtn = {
        width: '180px',
        height: '60px',
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: 'transparent',
        boxShadow: "0px 2px 12px rgba(46, 47, 66, 0.08), 0px 2px 2px rgba(46, 47, 66, 0.16), 0px 4px 2px rgba(46, 47, 66, 0.08)",
        color: 'white',
        fontSize: '18px',
        fontWeight: '100',
    };

    stylesListParagraph = {
        listStyle: 'none',
    };
    // ================== /STYLES

    // ================== LOGIC
    handlerClick = (evt) => {
        const keyValue = evt.currentTarget.name;
        
        this.setState((prevState) => ({
            [keyValue]: prevState[keyValue] + 1,
        }));
    };
    // ================== /LOGIC

    render() {
        return (
            <div style={this.stylesContainer}>
                <h1>Please leave feedback</h1>
                <ul style={this.stylesListBtn}>
                    <li style={this.stylesListBtnItem}>
                        <button
                            name={'good'}
                            onClick={this.handlerClick}
                            type="button"
                            style={this.stylesBtn}
                        >
                            Good
                        </button>
                    </li>
                    <li style={this.stylesListBtnItem}>
                        <button
                            name={'neutral'}
                            onClick={this.handlerClick}
                            type="button"
                            style={this.stylesBtn}
                        >
                            Neutral
                        </button>
                    </li>
                    <li>
                        <button
                            name={'bad'}
                            onClick={this.handlerClick}
                            type="button"
                            style={this.stylesBtn}
                        >
                            Bad
                        </button>
                    </li>
                </ul>
                <h2>Statistics</h2>
                <ul style={this.stylesListParagraph}>
                    <li>
                        <p>Good: {this.state.good}</p>
                    </li>
                    <li>
                        <p>Neutral: {this.state.neutral}</p>
                    </li>
                    <li>
                        <p>Bad: {this.state.bad}</p>
                    </li>
                </ul>
            </div>
        );
    }
}
