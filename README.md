# [gaia.js] (http://gitlab.17zuoye.net/17zuoye/gaia.js) 的 grpc rpc插件


##
 * grpc rpc provider
 * grpc rpc client (native & via agent)

## 功能模块介绍

* grpc rpc provider

在app/rpc/grpc/proto/中的存放proto文件，app/rpc/grpc/provider/<package name>/<service>.ts

```

import grpcProvider, { BaseGrpcService } from '@gaiajs/gaiajs/app/lib/rpc/grpc/provider';

@grpcProvider.expose('helloworld', 'Greeter')
export default class GreeterService extends BaseGrpcService {
  @grpcProvider.method()
  async SayHello(req: any) {
    console.log(req);

    return this.ctx.body = { message: `hello, ${req.name}` };
  }
}


```

---

* grpc rpc client

可直接调用`await ctx.service.rpc.grpc.invoker(<package name>, <service name>, <method>).invoke(<request>)`。
```

---

[egg]: https://eggjs.org
[gaia.js]: http://github.com/gaia-js/gaia.js
