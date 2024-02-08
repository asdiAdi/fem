import styles from './Buttons.module.scss';

/* eslint-disable-next-line */
export interface ButtonsProps {}

export function Buttons(props: ButtonsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Buttons!</h1>
    </div>
  );
}

export default Buttons;
