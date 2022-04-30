import { logger, rateLimiter } from '@/utils';
import { Message } from 'discord.js';
import { MessageHandler } from '@/ports/MessageHandler';

const processDiscordMessage = async (message: Message): Promise<void> => {
  if (message.system || message.author.id === message.client.user?.id) {
    logger.debug('Message Event From Bot', message);
    return;
  }

  // TODO: We should call the command handler with the message
  logger.debug('Message received from user', message);
};

export const discordMessageHandler: MessageHandler = {
  rateLimiter,
  process: processDiscordMessage,
};
