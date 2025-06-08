import { Footer } from '@/app/_components';
import { BookmarkCard, Empty } from './_components';
import styles from './page.module.css';
import { Bookmark } from '@/types';

export interface SharedPageProps {
  params: Promise<{ id: string }>;
}

async function SharedPage({ params }: SharedPageProps) {
  const { id } = await params;
  const data = await fetch(`${process.env.API_URI}/v1/sharedgroup/?key=${id}`);
  const links = await data.json();

  if (!links.data) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>CLIP</h1>
          <Empty />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CLIP</h1>
        <div className={styles.bookmarkList}>
          {links.data.map((link: Bookmark, index: number) => (
            <BookmarkCard key={link.id} link={link} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SharedPage;
