'use strict';

module.exports = class Command {
  start() {
    console.log(process.pid);
  }
};
