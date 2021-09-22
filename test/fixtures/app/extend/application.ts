import { Application } from 'egg';

export default {
  get indexed_app_name() {
    const app = this as any as Application;

    return `gaia.${app.name}`;
  },
};
