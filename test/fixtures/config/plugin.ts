import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  'gaia-grpc': {
    enable: true,
    package: '../../../',
  },
};

export default plugin;
