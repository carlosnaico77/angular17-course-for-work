import { commonEnvironment } from './environment.common';

const env: Partial<typeof commonEnvironment> = { titleApp: 'DEVELOPMEN APP' };

export const environment = { ...commonEnvironment, ...env };
