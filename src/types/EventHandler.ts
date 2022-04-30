import { RateLimiter } from 'discord.js-rate-limiter';

export interface EventHandler {
  process: (...args: any[]) => Promise<void>,
  rateLimiter: RateLimiter,
}
