import css from './Notification.module.scss';

const Notification = ({ message }) => {
    return <p className={css.notification}>{message}</p>;
};

export default Notification;
