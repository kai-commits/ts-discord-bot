import { Client } from 'discord.js';
import config from '@/config';
import { discordMessageHandler } from '@/events';
import { logger } from '@/utils/logger';
import logs from '@/lang/logs';

const start = async () => {
  logger.info(logs.operational.startUp);

  const client = new Client({ intents: config.client.intents });

  client.once('ready', async () => {
    logger.debug(logs.operational.onReady);
    client.on('messageCreate',(event) => discordMessageHandler.process(event));
  });

  client.on('messageCreate', async (event) => {
    logger.debug('Message Author: ', event.author);
  });

  client.login(config.client.token);
};

start().catch((error) => {
  logger.error(logs.error.unidentified, error);
});
