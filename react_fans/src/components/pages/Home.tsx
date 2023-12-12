import styles from "./Home.module.css";
import Banner from "../layout/Banner";
import Steps from '../layout/Steps';
import TrustAndSafety from "../layout/TrustAndSafety";
import ImpactCards from "../layout/ImpactCards";
import StartSection from "../layout/StartSection";
import CorreiosCEP from "../layout/CorreiosCEP";

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.bannerHero}>
            <Banner />
            <h1 className={styles.bannerText}>O seu <br /> lugar para <br /> ajudar</h1>
            <button className={`${styles.startButton} btn btn`} type="submit">Comece no OnlyGivers</button>
            </div>
            <Steps />
            <CorreiosCEP />
            <TrustAndSafety />
            <ImpactCards />
            <StartSection />
        </section>
    );
}

export default Home;