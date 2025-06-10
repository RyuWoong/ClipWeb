'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Information.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Information() {
  const videoContentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // 30%가 보일 때 트리거
        rootMargin: '0px 0px -50px 0px', // 50px 여유를 두고 트리거
      },
    );

    if (videoContentRef.current) {
      observer.observe(videoContentRef.current);
    }

    return () => {
      if (videoContentRef.current) {
        observer.unobserve(videoContentRef.current);
      }
    };
  }, []);

  return (
    <article className={styles.container}>
      <Image src="/assets/images/logo.png" alt="ClipLogo" width={480} height={480} className={styles.asset} />

      <div ref={videoContentRef} className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <h2>Apple 감성 그대로, 필요한 Web 콘텐츠를 한 곳에.</h2>
        <p>
          Clip은 웹에서 발견한 콘텐츠를 손쉽게 저장하고 정리할 수 있는 북마크앱이예요. Apple의 기본 디자인 시스템을
          활용하여, 익숙하면서도 직관적인 UI를 제공해요.
        </p>
        <p>
          필요한 정보, 영감이 되는 글, 나중에 다시 보고 싶은 페이지들까지 <b>Clip</b>에 저장하고, 당신만의 아카이브를
          만들어보세요.
        </p>

        <Link href="https://apps.apple.com/kr/app/clip/id6746070093" target="_blank" className={styles.appStore}>
          <Image src="/assets/images/appstore.svg" alt="AppStore" width={200} height={80} />
        </Link>
      </div>
    </article>
  );
}

export default Information;
