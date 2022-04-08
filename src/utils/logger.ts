import winston, { Logger, LoggerOptions } from 'winston';
import config from '@/config';

const loggerConfig: LoggerOptions = {
  level: config.logger.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports:
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      ),
    }),
};

export const logger: Logger = winston.createLogger(loggerConfig);
