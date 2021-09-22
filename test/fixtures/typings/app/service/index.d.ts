// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportKafkaConsumerTest from '../../../app/service/kafka_consumer_test';
import ExportPingHealth from '../../../app/service/ping_health';
import ExportTestRedis from '../../../app/service/test_redis';
import ExportTestTask from '../../../app/service/test_task';

declare module 'egg' {
  interface IAppService {
    kafkaConsumerTest: ExportKafkaConsumerTest;
    pingHealth: ExportPingHealth;
    testRedis: ExportTestRedis;
    testTask: ExportTestTask;
  }
}
