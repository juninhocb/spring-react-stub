import styles from "../pages/CommonPage.module.css";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
function UserPage(){
    return (
        <div className="App">
            <NavBar/>
            <section className={styles.common}>
                <p> This is the user section! </p>
            </section>
            <Footer/>
        </div>
    );
}

export default UserPage
