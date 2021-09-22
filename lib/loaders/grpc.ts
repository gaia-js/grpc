import * as path from 'path';
import * as is from 'is-type-of';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import grpcProvider from '../../app/lib/rpc/grpc/provider';
import grpcProto from '../../app/lib/rpc/grpc/proto';
import AppWorkerLoader from '@gaiajs/gaiajs/lib/loader';


export default function loadGrpc(this: AppWorkerLoader, opt: any) {
  const app = this.app;

  grpcProvider.app || (grpcProvider.app = app);
  grpcProto.app || (grpcProto.app = app);

  this.timing.start('Load grpc provider');

  app.loader.loadToApp(path.join(app.baseDir, 'app/rpc/grpc/proto'), '__grpc_proto_services', {
    call: true,
    caseStyle: 'camel',
    match: '**/*.proto',
    override: true,
    initializer(_, options) {
      grpcProto.registerDefinition(grpc.loadPackageDefinition(protoLoader.loadSync(options.path, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      })));

      return;
    },
  });

  app.loader.loadToApp(path.join(app.baseDir, 'app/rpc/grpc/provider'), '__grpc_server_services', {
    inject: this.app,
    caseStyle: 'camel',
    override: true,
    ...opt,
    filter(objClass) {
      return is.class(objClass);
    },
    initializer(clz) {
      return clz;
    },
  });

  this.timing.end('Load grpc provider');
}
