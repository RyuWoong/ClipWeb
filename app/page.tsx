import Link from 'next/link';
import Footer from './_components/footer';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="section-1" className={styles.page}>
        <h1 className={styles.centerText}>CLIP1</h1>
      </section>
      <section id="section-2" className={`${styles.page} ${styles.videoPage}`}>
        <article className={styles.videoContainer}>
          <video width={540} height={960} autoPlay muted preload="none" className={styles.video}>
            <source src="/assets/videos/clip.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoContent}>
            <h2>Apple 감성 그대로, 필요한 Web 콘텐츠를 한 곳에.</h2>
            <p>
              Clip은 웹에서 발견한 콘텐츠를 손쉽게 저장하고 정리할 수 있는 북마크앱이예요. Apple의 기본 디자인 시스템을
              활용하여, 익숙하면서도 직관적인 UI를 제공해요.
            </p>
            <p>
              필요한 정보, 영감이 되는 글, 나중에 다시 보고 싶은 페이지들까지 <b>Clip</b>에 저장하고, 당신만의
              아카이브를 만들어보세요.
            </p>

            <Link
              href="https://apps.apple.com/kr/app/clip/id6746070093"
              target="_blank"
              className={styles.appStoreLink}
            >
              <Image src="/assets/images/appstore.svg" alt="AppStore" width={200} height={80} />
            </Link>
          </div>
        </article>
        <Footer />
      </section>
    </div>
  );
}
