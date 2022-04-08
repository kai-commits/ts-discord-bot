import * as env from 'env-var';

export default {
  client: {
    token: env.get('BOT_TOKEN').required().asString(),
  },
  logger: {
    level: env.get('LOG_LEVEL').default('debug').asString(),
  },
};
