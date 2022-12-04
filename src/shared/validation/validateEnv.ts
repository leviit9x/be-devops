import * as Joi from 'joi';

export default function validateEnvJoi() {
  return Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test', 'provision')
      .default('development'),
    PORT: Joi.number().default(9001),
    POSTGRES_DB: Joi.string(),
    POSTGRES_USER: Joi.string(),
    POSTGRES_PASSWORD: Joi.string(),
    AUTH_ENABLED: Joi.optional(),
  });
}
