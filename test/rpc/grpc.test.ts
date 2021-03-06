import * as  assert from 'assert';
import tester from '../bootstrap';
import grpcProvider from '../../app/lib/rpc/grpc/provider';

tester('test/rpc/grpc.test.ts', it => {
  it('request', async (ctx, app) => {
    grpcProvider.app = app;
    // await grpcProvider.start();

    let result = await ctx.service.rpc.grpc.invoker('helloworld', 'Greeter', 'sayHello').invoke({ name: 'my name' });
    assert(result.message === 'hello, my name', 'should success');
  });
});
