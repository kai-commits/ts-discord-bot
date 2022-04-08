import { Client } from 'discord.js';
import config from '@/config';
import { logger } from '@/utils/logger';
import logs from '@/lang/logs';

const start = async () => {
  logger.info('👀 Starting up...');

  const client = new Client({ intents: [ 8 ] });

  client.once('ready', () => {
    logger.debug('Ready!');
  });

  client.login(config.client.token);
};

start().catch((error) => {
  logger.error(logs.error.unidentified, error);
});
