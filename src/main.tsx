import { withProviders } from '@app/providers';
import { createRoot } from '@shared/lib/react';
import { APP_ROOT } from '@shared/config';

createRoot(APP_ROOT).render(withProviders());
