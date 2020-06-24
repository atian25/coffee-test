#!/usr/bin/env node

'use strict';

// 兜底，当被 fork 启动情况下，父进程退出，则自杀。
require('graceful-process')({
  logger: console,
  beforeExit() {
    console.log('before exit');
  },
});

const Command = require('..');

new Command().start();
