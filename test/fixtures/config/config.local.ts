'use strict';
import { EggAppInfo } from 'egg-core';
import devConfig from './config.unittest';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
export default (appInfo: EggAppInfo) => {
  const config = devConfig(appInfo);

  config.development = {
    watchDirs: ['../../lib', '../../app'],
  }

  config.logger = {
    dir: `./log/${appInfo.name}`,
  };

  return {
    ...config,
  } as EggAppInfo;
};
