import { ChatInputApplicationCommandData, CommandInteraction, PermissionsString } from 'discord.js';
import { EventContext } from '@/models/EventContext';

export interface Command {
    metadata: ChatInputApplicationCommandData;
    requireDev: boolean;
    requireGuild: boolean;
    requireClientPerms: PermissionsString[];
    requireUserPerms: PermissionsString[];
    execute(intr: CommandInteraction, data: EventContext): Promise<void>;
}
