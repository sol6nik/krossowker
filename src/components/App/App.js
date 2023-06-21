import styles from './App.module.scss'
import Navbar from "../Navbar/Navbar";
import Geo from "../Geo/Geo";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className={styles.container}>
            <section className={styles.header}>
                <Geo/>
                <Navbar/>
            </section>

            <Footer/>
        </div>
    );
}

export default App;
