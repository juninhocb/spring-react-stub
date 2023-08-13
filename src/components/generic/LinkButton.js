import styles from './Button.module.css'
import { Link } from "react-router-dom";
function LinkButton({path, text}){
    return (
        <Link className={styles.btn} to={path} > {text} </Link>
    );
}
export default LinkButton