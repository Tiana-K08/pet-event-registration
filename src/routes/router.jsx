import { createBrowserRouter } from 'react-router';

import PublicLayout from '../layouts/PublicLayout/PublicLayout.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage.jsx';
import SuccessPage from '../pages/SuccessPage/SuccessPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'registration', Component: RegistrationPage },
      { path: 'success', Component: SuccessPage },
    ],
  },
]);
