import { Command } from '@/ports/Command';
import { EventHandler } from '@/types/EventHandler';
import { Message } from 'discord.js';

export interface CommandHandler extends EventHandler {
  process: (message: Message, commands: Command[]) => Promise<void>,
}
