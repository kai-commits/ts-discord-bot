import { Message } from 'discord.js';
import { MessageHandler } from '@/types/MessageHandler';
import { logger } from '@/utils/logger';

const processDiscordMessage = async (message: Message): Promise<void> => {
  if (message.system || message.author.id === message.client.user?.id) {
    logger.debug('Message Event From Bot', message);
    return;
  }

  logger.debug('Message received from user', message);
};

export const discordMessageHandler: MessageHandler = {
  process: processDiscordMessage,
};
