import styles from './page.module.css';
import { Footer, Information, TypingAnimation } from './_components';

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="section-1" className={styles.page}>
        <TypingAnimation>CLIP</TypingAnimation>
      </section>
      <section id="section-2" className={`${styles.page} ${styles.videoPage}`}>
        <Information />
        <Footer />
      </section>
    </div>
  );
}
