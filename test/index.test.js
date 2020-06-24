'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/index.test.js', () => {
  const cli = path.join(__dirname, '../bin/cli.js');

  it('should work', async () => {
    await coffee.fork(cli)
      .debug()
      .end();
  });
});
