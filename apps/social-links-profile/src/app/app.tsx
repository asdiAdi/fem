import styles from './app.module.scss';
import avatar from '../assets/avatar-jessica.jpeg';

export function App() {
  return (
    <div className={styles['card']}>
      <div className={styles['card-avatar']}>
        <img src={avatar} alt="user-avatar" />
      </div>
      <div className={styles['card-user-info']}>
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
      </div>
      <p className={styles['card-bio']}>
        "Front-end developer and avid reader."
      </p>
      <div className={styles['card-buttons']}>
        <button>Github</button>
        <button>Frontend Mentor</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
}

export default App;
