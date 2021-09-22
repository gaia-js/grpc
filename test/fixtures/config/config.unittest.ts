import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};

  config.security = {
    domainWhiteList: ['*'],
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    credentials: true,
  };

  config.redis = {
    clients: {
      // @ts-ignore
      default: {
        port: 6379,
        host: '127.0.0.1',
        db: 0,
        keyPrefix: `${appInfo.name}:`,
        password: '',
      },
    },
  };

  config.rpc = {
  };

  return config;
};
