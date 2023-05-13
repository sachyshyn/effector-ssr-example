import { RouterProvider } from '@shared/lib/router';
import { browserRouter } from '@pages/router';

export function withBrowserRouter() {
  return <RouterProvider router={browserRouter} />;
}
