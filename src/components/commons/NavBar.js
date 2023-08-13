import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import Image from "../generic/Image";
function NavBar(){
    return (
        <nav className={styles.navbar}>
            <Link to="/home"> <Image image={logo} alt="carlosjr" height={75}/> </Link>
            <ul className={styles.list} >
                <li className={styles.itemList}><Link to ="/home"> Home </Link></li>
                <li className={styles.itemList}><Link to ="/users" >Users</Link></li>
                <li className={styles.itemList}><Link to ="/contact" >Contact</Link></li>
                <li className={styles.itemList}><Link to ="/" >Exit</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar