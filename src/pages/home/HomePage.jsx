import { Billing } from "../../components/biling";
import { Business } from "../../components/business";
import { CardDeal } from "../../components/card-deal";
import { Clients } from "../../components/clients";
import { Cta } from "../../components/cta/Cta";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { Stats } from "../../components/stats";
import { Testimonials } from "../../components/testimonials";
import { Footer } from "../../components/footer";
import styles from "../../style";

const HomePage = () => {
  return (
    <div className={"bg-primary w-full  overflow-hidden"}>
      <Header />
      <div className={`bg-primary  ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
