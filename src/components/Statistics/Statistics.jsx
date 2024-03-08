import css from './Statistics.module.scss';

const Statistics = ({ feedbacks, total, positivePercentage }) => {
    const { good, neutral, bad } = feedbacks;
    
    return (
            <ul className={css['list-paragraph']}>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {total}</p>
                </li>
                <li>
                    <p>Positive feedback: {positivePercentage}%</p>
                </li>
            </ul>
    );
};

export default Statistics;