import { EggAppConfig, PowerPartial, EggAppInfo } from 'egg';

import TestingConfig from './config.testing';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = TestingConfig(appInfo);

  return config;
};
