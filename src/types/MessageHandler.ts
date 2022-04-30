import { Message } from 'discord.js';

export interface MessageHandler {
  process: (msg: Message) => Promise<void>,
}
