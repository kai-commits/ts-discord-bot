import * as env from 'env-var';

export default {
  client: {
    token: env.get('BOT_TOKEN').required().asString(),
    intents: env.get('CLIENT_INTENTS').default(131071).asInt(),
  },
  logger: {
    level: env.get('LOG_LEVEL').default('debug').asString(),
  },
};
