import { RANDOM_USER_API_PROXY_TOKEN } from '@finastra/api-interfaces';
import { ProxyModuleOptions, ProxyModuleOptionsFactory, Service } from '@finastra/nestjs-proxy';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// Documentation for the proxy module can be founde here:
// https://github.com/Finastra/finastra-nodejs-libs/blob/develop/libs/proxy/README.md

@Injectable()
export class ProxyConfigService implements ProxyModuleOptionsFactory {
  readonly logger = new Logger(ProxyConfigService.name);

  constructor(private configService: ConfigService) { }

  createModuleConfig(): ProxyModuleOptions {
    // const FFDC = this.configService.get('FFDC');

    const services = [
      {
        id: RANDOM_USER_API_PROXY_TOKEN,
        url: 'https://randomuser.me/api',
        forwardToken: false
      },
      /* {
        id: 'ACCOUNT_INFORMATION_US',
        url: `${FFDC}/retail-us/me/account/v1/accounts`,
        config: {}
      } */
    ] as Service[];

    this.logger.log(services);

    return {
      services,
      allowedCookies: [],
    };
  }
}
