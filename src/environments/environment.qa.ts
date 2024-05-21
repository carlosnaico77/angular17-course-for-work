import { commonEnvironment } from './environment.common';

const env: Partial<typeof commonEnvironment> = { domain: 'https://axure-123' };

export const environment = { ...commonEnvironment, ...env };
