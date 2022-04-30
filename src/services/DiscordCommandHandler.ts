import { Command } from '@/ports/Command';
import { CommandHandler } from '@/ports/CommandHandler';
import { EventContext } from '@/models/EventContext';
import { Message } from 'discord.js';
import config from '@/config';
import { isRateLimited } from '@/utils/rateLimiter';
import { rateLimiter } from '@/utils';

const process = async (message: Message, commands: Command[]): Promise<void> => {
  if (isRateLimited(message.author.id) ||
  message.content.charAt(0) !== config.client.prefix) {
    return;
  }

  /*
   * TODO: Find the command the user is actually triggering and
   * pass in the eventContext and the message
   */
  const userCommand: string[] = message.content.slice(0).split('\\s+');

  // TODO: Making event context for easier use downstream in commands
  const eventContext: EventContext = {
    sendMessage: async (botResponse, message) => {
      await message.channel.send(botResponse);
    },
  };
};

export const discordCommandHandler: CommandHandler = {
  rateLimiter,
  process,
};
