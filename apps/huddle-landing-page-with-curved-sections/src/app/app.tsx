import styles from './app.module.scss';
import logo from '../assets/logo.svg';

export function App() {
  return (
    <div className={styles['test']}>
      <nav className={styles['nav']}>
        <img src={logo} className={styles['nav-logo']} alt="logo" />
        {/*<div className={styles['nav-logo']}>*/}
        {/*  <img src={iconMessages} alt="icon-messages" />*/}
        {/*  <span>Huddle</span>*/}
        {/*</div>*/}

        <button className={styles['nav-button']}>Try It Free</button>
      </nav>

      <div className={styles['body']}>
        <h1 className={styles['h1']}>
          Build The Community Your Fans Will Love
        </h1>
        <p className={styles['body-description']}>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <button className={styles['body-button']}>Get Started for Free</button>

        {/* Image here */}

        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
