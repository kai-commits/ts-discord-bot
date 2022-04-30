import * as env from 'env-var';

export default {
  client: {
    token: env.get('BOT_TOKEN').required().asString(),
    intents: env.get('BOT_INTENTS').default(131071).asInt(),
    rateLimitAmount: env.get('BOT_RATE_LIMIT_NUMBER_OF_MESSAGES').default(10).asInt(),
    rateLimitInterval: env.get('BOT_RATE_LIMIT_INTERVAL').default(30).asInt(),
    prefix: env.get('BOT_COMMAND_PREFIX').default('!').asString(),
  },
  logger: {
    level: env.get('LOG_LEVEL').default('debug').asString(),
  },
};
