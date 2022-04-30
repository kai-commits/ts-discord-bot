import { Message } from 'discord.js';

export interface EventContext {
  sendMessage: (botResponse: string, message: Message) => Promise<void>,
}
