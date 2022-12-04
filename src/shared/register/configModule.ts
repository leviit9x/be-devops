import { ConfigModule } from '@nestjs/config';
import { _allConfig } from '../config/configuration';
import { validate } from '../validation/env.validation';
import validateEnvJoi from '../validation/validateEnv';
export const config__module__register = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  cache: true,
  load: _allConfig,
  validationSchema: validateEnvJoi(),
  validationOptions: {
    allowUnknown: false,
    abortEarly: true,
  },
  validate,
});
