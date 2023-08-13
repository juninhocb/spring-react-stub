import styles from './Footer.module.css';
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li><FaFacebook/></li>
                <li><FaGithub/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p className={styles.copyRight}> <span> Carlos jr  </span> &copy; 2023 </p>
        </footer>
    );
}

export default Footer