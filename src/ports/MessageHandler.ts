import { EventHandler } from '@/types/EventHandler';
import { Message } from 'discord.js';

/*
 * This is the first stop in our interfaces.  The Discord message is emitted
 * and we receive it.
 */
export interface MessageHandler extends EventHandler {
  process: (msg: Message) => Promise<void>,
}
