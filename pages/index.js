import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Education from "./parts/education";
import Experience from "./parts/experience";
import Hobbies from "./parts/hobbies";
import Overview from "./parts/overview";
import Skills from "./parts/Skills";
import Footer from "./parts/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
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
        <Footer />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
