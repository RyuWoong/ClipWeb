import { Bookmark } from '@/types';
import styles from './BookmarkCard.module.css';

function BookmarkCard({ link, index }: { link: Bookmark; index: number }) {
  return (
    <div key={link.id} className={styles.bookmarkItem} style={{ animationDelay: `${index * 0.1}s` }}>
      <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.bookmarkLink}>
        {/* 좌측: 썸네일 */}
        <div className={styles.thumbnailContainer}>
          {link.thumbnail ? (
            <img src={link.thumbnail} alt={link.title} className={styles.thumbnail} />
          ) : (
            <div className={styles.placeholderThumbnail}>
              <svg className={styles.placeholderIcon} fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {/* 우측: 정보 */}
        <div className={styles.contentContainer}>
          <h2 className={styles.bookmarkTitle}>{link.title || '제목 없음'}</h2>

          {link.description && <p className={styles.bookmarkDescription}>{link.description}</p>}

          <div className={styles.bookmarkUrl}>{new URL(link.url).hostname}</div>
        </div>
      </a>
    </div>
  );
}

export default BookmarkCard;
