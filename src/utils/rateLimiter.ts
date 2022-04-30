import { RateLimiter } from 'discord.js-rate-limiter';
import config from '@/config';

export const rateLimiter: RateLimiter = new RateLimiter(
  config.client.rateLimitAmount,
  (config.client.rateLimitInterval * 1000),
);

export const isRateLimited = (userId: string): boolean => rateLimiter.take(userId);
