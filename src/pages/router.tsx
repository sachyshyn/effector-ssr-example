import { createBrowserRouter } from '@shared/lib/router';
import { Suspense } from '@shared/lib/react';
import { ROUTES } from '@shared/config';
import { MainPage } from './main';
import { SecondaryPage } from './secondary';

export const browserRouter = createBrowserRouter([
  {
    index: true,
    element: (
      <Suspense>
        <MainPage />
      </Suspense>
    ),
    path: ROUTES.MAIN
  },
  {
    element: (
      <Suspense>
        <SecondaryPage />
      </Suspense>
    ),
    path: ROUTES.SECONDARY
  }
]);
