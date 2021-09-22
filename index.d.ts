import 'egg';
import '@gaiajs/gaiajs';
import { gaia } from '@gaiajs/gaiajs';
import './typings/app/service/index';
import './typings/app/service/rpc/index';

declare module grpc {
  interface IServiceRpc extends IGrpcServiceRpc, gaia.IServiceRpc {

  }

  interface IService extends IGrpcService, gaia.IService {
    rpc: IServiceRpc
  }
}
