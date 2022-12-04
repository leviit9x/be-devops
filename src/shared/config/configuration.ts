import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
  url: process.env.DATABASE_URL,
}));

export const cacheConfig = registerAs('cache', () => ({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
}));

export const serverConfig = registerAs('server', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV,
}));

export const graphqlConfig = registerAs('graphql', () => ({}));

export const _allConfig = [
  databaseConfig,
  cacheConfig,
  serverConfig,
  graphqlConfig,
];
