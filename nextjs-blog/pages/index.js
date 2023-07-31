import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Professor Web</title>
        <meta
          name="description"
          content="A simple webpage displaying 'Hello Professor'."
        />
        <meta charSet="utf-8" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>Hello Professor.</h1>
      </main>
    </div>
  );
}
