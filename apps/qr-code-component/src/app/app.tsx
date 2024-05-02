// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import QRImage from '../assets/image-qr-code.png';

export function App() {
  return (
    <div>
      <div className={styles['card']}>
        <img className={styles['card-img']} src={QRImage} alt="qr-code" />

        <h1 className={styles['card-header']}>
          Improve your front-end skills by building projects
        </h1>

        <p className={styles['card-description']}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
