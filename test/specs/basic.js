const assert = require('assert');
//import { multiremote } from 'webdriverio'

describe('webdriver.io page', () => {
	it('should have the right title', () => {
		let a = 2;
		browser.url('https://webdriver.io');
		const title = browser.getTitle();
		assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
	});
});
