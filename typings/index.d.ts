import 'egg';
import '@gaiajs/gaiajs';
import { gaia } from '@gaiajs/gaiajs';
import './app/service/rpc/index';
import { IGrpcServiceRpc } from '../typings/app/index';

declare module grpc {
  interface IServiceRpc extends IGrpcServiceRpc, gaia.IServiceRpc {

  }

  interface IService extends gaia.IService {
    rpc: IServiceRpc
  }
}

declare module 'egg' {
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
