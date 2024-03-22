import styles from './app.module.scss';
import logo from '../assets/logo.svg';
import screenMockups from '../assets/screen-mockups.svg';
import iconCommunities from '../assets/icon-communities.svg';
import iconMessages from '../assets/icon-messages.svg';
import growTogether from '../assets/illustration-grow-together.svg';
import flowingConversation from '../assets/illustration-flowing-conversation.svg';
import yourUsers from '../assets/illustration-your-users.svg';

export function App() {
  return (
    <div className={styles['test']}>
      <nav className={styles['nav']}>
        <img src={logo} className={styles['nav-logo']} alt="logo" />
        <button className={styles['nav-button']}>Try It Free</button>
      </nav>

      <div className={styles['body']}>
        <h1 className={styles['body-title']}>
          Build The Community Your Fans Will Love
        </h1>
        <p className={styles['body-description']}>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <button className={styles['start-button']}>Get Started for Free</button>

        <img
          src={screenMockups}
          className={styles['img-mockup']}
          alt="screen-mockups"
        />

        <ul className={styles['list-metrics']}>
          <li>
            <img src={iconCommunities} alt="icon-communities" />
            <span>1.4k+</span>
            <span>Communities Formed</span>
          </li>
          <li>
            <img src={iconMessages} alt="icon-messages" />
            <span>2.7m+</span>
            <span>Messages Sent</span>
          </li>
        </ul>

        <img src={growTogether} alt="grow-together" />
        <h3>Grow Together</h3>
        <p>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>

        <img src={flowingConversation} alt="flowing-conversation" />
        <h3>Flowing Conversation</h3>
        <p>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>

        <img src={yourUsers} alt="your-users" />
        <h3>Your Users</h3>
        <p>
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>

        <h2>Ready To Build Your Community?</h2>
        <button className={styles['start-button']}>Get Started for Free</button>
      </div>

      <footer>
        <h4>NEWSLETTER</h4>
        <p>
          To receive tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>

        <input name="email" type="email" />
        <button>Subscribe</button>

        {/*change nav logo style*/}
        <img src={logo} className={styles['nav-logo']} alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
      </footer>
    </div>
  );
}

export default App;
