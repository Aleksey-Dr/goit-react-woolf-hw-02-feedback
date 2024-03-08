import css from './FeedBackOptions.module.scss';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css['list-btn']}>
            {options.map(option => {
                return (
                    <li key={option} className={css['list-btn-item']}>
                        <div className={css.wrapper}>
                            <button
                                onClick={() => onLeaveFeedback(option)}
                                type="button"
                                className={css.btn}
                            >
                                <svg
                                    width="180px"
                                    height="60px"
                                    viewBox="0 0 180 60"
                                >
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                </svg>
                                {option === 'bad' ? (
                                    <BiSolidDislike
                                        className={`${css.icon} ${css['icon--1']}`}
                                    />
                                ) : (
                                    <BiSolidLike
                                        className={`${css.icon} ${css['icon--1']}`}
                                    />
                                )}
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                                {option === 'good' ? (
                                    <BiSolidLike
                                        className={`${css.icon} ${css['icon--2']}`}
                                    />
                                ) : (
                                    <BiSolidDislike
                                        className={`${css.icon} ${css['icon--2']}`}
                                    />
                                )}
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default FeedBackOptions;
