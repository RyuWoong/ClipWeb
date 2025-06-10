'use client';

import { useState, useEffect } from 'react';
import styles from './TypingAnimation.module.css';

const TypingAnimation = ({ children }: { children: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeAnimation = () => {
      if (!isDeleting) {
        // 타이핑 중
        if (currentIndex < children.length) {
          setDisplayText(children.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeAnimation, 300);
        } else {
          // 타이핑 완료, 잠시 대기 후 삭제 시작
          timeout = setTimeout(() => {
            isDeleting = true;
            typeAnimation();
          }, 2000);
        }
      } else {
        // 삭제 중
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayText(children.slice(0, currentIndex));
          timeout = setTimeout(typeAnimation, 200);
        } else {
          // 삭제 완료, 다시 타이핑 시작
          isDeleting = false;
          timeout = setTimeout(typeAnimation, 500);
        }
      }
    };

    typeAnimation();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <h1 className={styles.centerText}>
      {displayText}
      <span className={`${styles.cursor}`}>|</span>
    </h1>
  );
};

export default TypingAnimation;
