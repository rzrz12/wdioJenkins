const assert = require('assert');
//import { multiremote } from 'webdriverio'

describe('Joe Bloggs CV page', () => {
	it('should have the right heading', () => {
		browser.url('http://172.20.224.1:8088');
		$('h1').waitForDisplayed();
		const heading = $('h1').getText();
		console.log(heading);
		assert.strictEqual(heading, 'Joe Bloggs');
	});
});
