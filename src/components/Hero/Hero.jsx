import { Link } from 'react-router';

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <p className={styles.badge}>Безкоштовний вебінар від LinguaPro</p>
        <div className={styles.text}>
          <h1>
            Business English: <br /> Перший крок до впевненої комунікації
          </h1>
          <p>
            Якщо ви розумієте англійську, але на зустрічах відчуваєте
            невпевненість і <br /> вагаєтеся говорити - цей вебінар саме для
            вас.
          </p>
          <div className={styles.time}>
            <p>&#128197; 15 грудня 2025 · 19:00</p>
            <p>&#128187; Онлайн · Google Meet</p>
          </div>
        </div>
        <Link to="/registration" className={styles.button}>
          Забронювати місце
        </Link>
      </div>
    </section>
  );
}
