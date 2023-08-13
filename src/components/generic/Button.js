import styles from './Button.module.css'
function Button({type, text, onClick}){
    return (
        <button className={styles.btn} type={type} onClick={onClick} > {text} </button>
    )
}

export default Button