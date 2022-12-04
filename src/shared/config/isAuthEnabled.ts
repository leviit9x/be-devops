import { Dependencies, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Dependencies(ConfigService)
@Injectable()
export class ApiConfigService {
  configService: ConfigService;
  constructor(configService) {
    this.configService = configService;
  }

  get isAuthEnabled() {
    return this.configService.get('AUTH_ENABLED') === 'true';
  }
}
