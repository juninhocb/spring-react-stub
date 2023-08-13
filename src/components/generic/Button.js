import styles from './Button.module.css'
function Button({ type, text, onClick, rowButton, widthRowButton }) {
    return (
        rowButton ? (
            <button style={{ width: widthRowButton }} className={styles.btn} type={type} onClick={onClick}>
                {text}
            </button>
        ) : (
            <button className={styles.btn} type={type} onClick={onClick}>
                {text}
            </button>
        )
    );
}

export default Button