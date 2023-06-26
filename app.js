'use strict';

const Homey = require('homey');
const { Log } = require('homey-log');
const { debug } = require('zigbee-clusters');

// Enable zigbee-cluster logging
debug(true);

class OsramApp extends Homey.App {
	onInit() {
		this.log('init OsramApp');
    this.homeyLog = new Log({ homey: this.homey });
  }
}

module.exports = OsramApp;
