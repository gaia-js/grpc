import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // the return config will combines to EggAppConfig
  return {
    ...config,
  } as EggAppInfo;
};
