import Head from "next/head";

import styles from "styles/Home.module.scss";
import Education from "./parts/Education";
import Experience from "./parts/Experience";
import Hobbies from "./parts/Hobbies";
import Overview from "./parts/Overview";
import Skills from "./parts/Skills";
import Footer from "./parts/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shing Ho Tan</title>
        <meta
          name="description"
          content="Full-Stack developer focused on React.js, React-Native and Node.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Overview />
        <Skills />
        <Experience />
        <Hobbies />
        <Education />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
