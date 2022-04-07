import { logger } from '@/utils/logger';
import logs from '@/lang/logs';

const start = async () => {
  logger.info('👀 Starting up...');
};

start().catch((error) => {
  logger.error(logs.error.unidentified, error);
});
