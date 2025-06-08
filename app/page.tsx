import styles from './page.module.css';
import { Footer, Information } from './_components';

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="section-1" className={styles.page}>
        <h1 className={styles.centerText}>CLIP1</h1>
      </section>
      <section id="section-2" className={`${styles.page} ${styles.videoPage}`}>
        <Information />
        <Footer />
      </section>
    </div>
  );
}
