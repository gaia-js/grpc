import 'egg';
import '@gaiajs/gaiajs';
import { gaia } from '@gaiajs/gaiajs';

declare module grpc {
  interface IService extends IGrpcService, gaia.IService {
  }
}

declare module 'egg' {
  interface IObject extends grpc.IObject {
  }


  interface IServiceRpc extends IGrpcServiceRpc, gaia.IServiceRpc {

  }

  interface IService extends grpc.IService {
    rpc: IServiceRpc
  }

  interface Application extends gaia.Application, EggApplication {
  }

  interface Context {
    service: IService;
    object: IObject;

    assert(c: any, msg?: string); // from gaia context extend
  }
}
