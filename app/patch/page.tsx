import { patchNotes } from './notes';
import styles from './page.module.css';

export default function Patch() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Patch Note</h1>
      </div>

      <div className={styles.patchList}>
        {patchNotes.map((patch, index) => (
          <div key={patch.version} className={styles.patchItem}>
            <div className={styles.patchHeader}>
              <div className={styles.versionBadge}>
                <span className={styles.versionNumber}>{patch.version}</span>
                {index === 0 && <span className={styles.latestBadge}>최신</span>}
              </div>
              <span className={styles.date}>{patch.date}</span>
            </div>

            <h2 className={styles.patchTitle}>{patch.title}</h2>

            <ul className={styles.featureList}>
              {patch.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>더 많은 기능과 개선사항이 곧 업데이트될 예정이예요. 기대해주세요! 🚀</p>
      </div>
    </div>
  );
}
