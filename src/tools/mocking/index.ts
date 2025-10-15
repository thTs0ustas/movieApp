import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

export async function initMocks() {
  console.log('=== MOCK SERVER RUNNING ===');
  if (typeof window !== 'undefined') {
    const worker = setupWorker(...handlers);

    await worker.start({ onUnhandledRequest: 'bypass' });
  }
}
