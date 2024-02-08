import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles['test']}>
      <nav>
        <div>Huddle</div>
        <button>Try It Free</button>
      </nav>

      <div>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <button>Get Started for Free</button>

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
