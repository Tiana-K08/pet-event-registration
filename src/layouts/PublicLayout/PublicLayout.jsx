import { Outlet } from 'react-router';

import styles from './PublicLayout.module.scss';

export default function PublicLayout() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}
