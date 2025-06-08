import styles from './Empty.module.css';

function Empty() {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyContent}>
        <div className={styles.emptyNumber}>404</div>
        <h2 className={styles.emptyTitle}>Not Found CLIP</h2>
      </div>
    </div>
  );
}

export default Empty;
