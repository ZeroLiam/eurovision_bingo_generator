import { Injectable } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getDatabaseCredentials() {
    const dbHost = this.configService.get('DB_HOST');
    const dbPort = this.configService.get('DB_PORT');
    return `Connecting to database at ${dbHost}:${dbPort}`;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
