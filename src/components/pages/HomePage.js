import styles from "../pages/CommonPage.module.css";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
function HomePage(){
    return (
      <div className="App">
        <NavBar />
        <section className={styles.common}>
            <p> This is the home section </p>
        </section>
        <Footer />
      </div>
    );
}

export default HomePage