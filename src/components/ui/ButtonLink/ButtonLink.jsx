import { Link } from 'react-router';

import styles from './ButtonLink.module.scss';

export default function ButtonLink({ to, onClick, label }) {
  if (to) {
    return (
      <Link to={to} className={styles.button}>
        {label}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
}
