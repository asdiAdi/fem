import styles from './app.module.scss';
import cardImg from '../assets/illustration-article.svg';
import avatar from '../assets/image-avatar.webp';

export function App() {
  return (
    <div className={styles['card']}>
      <img className={styles['card-img']} src={cardImg} alt="code-img" />
      <h3 className={styles['card-category']}>
        <span>Learning</span>
      </h3>
      <p className={styles['card-publish-date']}>Published 21 Dec 2023</p>

      <h1 className={styles['card-header']}>HTML & CSS foundations</h1>
      <p className={styles['card-description']}>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div className={styles['card-author']}>
        <img src={avatar} alt="author-avatar" />
        <span>Greg Hooper</span>
      </div>
    </div>
  );
}

export default App;
