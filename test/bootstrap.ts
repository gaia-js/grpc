const path = require('path');

import { newTester } from '@gaiajs/gaiajs/test/bootstrap';

const _debug = require('debug');
_debug.enable('gaia:*');

export default newTester({
  baseDir: path.resolve(__dirname, './fixtures'),
});
