declare module 'egg' {
  interface GaiaAppConfig {
    grpc?: {
      address?: string;
      port?: number;
      disableServer?: boolean;
    };
  }
}
